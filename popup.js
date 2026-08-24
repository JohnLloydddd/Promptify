const DEFAULT_PROMPTS = [{ name: "Greeting", text: "Hello" }];
const SEARCH_THRESHOLD = 6;

const TARGETS = {
  claude: { label: "Claude", urlPrefixes: ["https://claude.ai/"] },
  chatgpt: {
    label: "ChatGPT",
    urlPrefixes: ["https://chatgpt.com/", "https://chat.openai.com/"],
  },
};

const ICONS = {
  pencil:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5a1.7 1.7 0 0 1 2.4 2.4L6.5 15.3l-3.2.7.7-3.2 9.5-9.3Z"/></svg>',
  trash:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h12M8 6V4.5A1.5 1.5 0 0 1 9.5 3h1A1.5 1.5 0 0 1 12 4.5V6m-6.5 0 .6 9.4A1.5 1.5 0 0 0 7.6 17h4.8a1.5 1.5 0 0 0 1.5-1.6L14.5 6"/></svg>',
  back: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 4.5 6 10l6.5 5.5"/></svg>',
  arrow:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.5 12.5 10 7 15.5"/></svg>',
};

const mainView = document.getElementById("mainView");
const editView = document.getElementById("editView");
const promptList = document.getElementById("promptList");
const emptyState = document.getElementById("emptyState");
const editList = document.getElementById("editList");
const targetToggle = document.getElementById("targetToggle");
const searchWrap = document.getElementById("searchWrap");
const searchInput = document.getElementById("searchInput");
const toastEl = document.getElementById("toast");

let prompts = DEFAULT_PROMPTS; // committed, persisted list
let editDraft = []; // working copy while the edit view is open
let selectedTarget = "claude";
let searchQuery = "";
let toastTimer = null;
let draggedPrompt = null; // main list, native HTML5 drag-and-drop
let draggedEditIndex = null; // edit view, same mechanism

document.getElementById("manageBtn").innerHTML = ICONS.pencil;
document.getElementById("backBtn").innerHTML = ICONS.back;

init();

async function init() {
  const stored = await chrome.storage.local.get(["prompts", "presets", "target"]);
  prompts = normalizePrompts(stored);
  selectedTarget = TARGETS[stored.target] ? stored.target : "claude";

  renderTargetToggle();
  renderMainView();

  document.getElementById("manageBtn").addEventListener("click", openEditView);
  document.getElementById("backBtn").addEventListener("click", closeEditView);
  document.getElementById("addBtn").addEventListener("click", () => {
    openEditView();
    addDraftPrompt();
  });
  document.getElementById("emptyAddBtn").addEventListener("click", () => {
    openEditView();
    addDraftPrompt();
  });
  document.getElementById("addPromptBtn").addEventListener("click", addDraftPrompt);
  document.getElementById("doneBtn").addEventListener("click", saveAndClose);
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value;
    renderMainView();
  });
}

// Accepts either the new { name, text } shape, or migrates the old plain
// string array ("presets" key) from earlier versions of the extension.
function normalizePrompts(stored) {
  if (Array.isArray(stored.prompts) && stored.prompts.length) {
    return stored.prompts;
  }
  if (Array.isArray(stored.presets) && stored.presets.length) {
    return stored.presets.map((text, i) => ({ name: `Prompt ${i + 1}`, text }));
  }
  return DEFAULT_PROMPTS;
}

function renderTargetToggle() {
  targetToggle.innerHTML = "";
  Object.entries(TARGETS).forEach(([key, info]) => {
    const button = document.createElement("button");
    button.textContent = info.label;
    button.className = key === selectedTarget ? "active" : "";
    button.addEventListener("click", async () => {
      selectedTarget = key;
      await chrome.storage.local.set({ target: key });
      renderTargetToggle();
    });
    targetToggle.appendChild(button);
  });
}

function renderMainView() {
  promptList.innerHTML = "";

  searchWrap.classList.toggle("hidden", prompts.length <= SEARCH_THRESHOLD);

  const query = searchQuery.trim().toLowerCase();
  const visible = query
    ? prompts.filter(
        (p) =>
          p.name.toLowerCase().includes(query) || p.text.toLowerCase().includes(query)
      )
    : prompts;

  const isEmpty = prompts.length === 0;
  emptyState.classList.toggle("hidden", !isEmpty);
  promptList.classList.toggle("hidden", isEmpty);

  visible.forEach((prompt) => {
    const row = document.createElement("button");
    row.className = "prompt-row";
    row.draggable = true;

    const textWrap = document.createElement("div");
    textWrap.className = "prompt-text";

    const name = document.createElement("div");
    name.className = "prompt-name";
    name.textContent = prompt.name || "Untitled";

    const preview = document.createElement("div");
    preview.className = "prompt-preview";
    preview.textContent = prompt.text.replace(/\s+/g, " ").trim();

    textWrap.appendChild(name);
    textWrap.appendChild(preview);

    const arrow = document.createElement("span");
    arrow.className = "go-arrow";
    arrow.innerHTML = ICONS.arrow;

    row.appendChild(textWrap);
    row.appendChild(arrow);
    row.addEventListener("click", () => pasteText(prompt.text));

    row.addEventListener("dragstart", (e) => {
      draggedPrompt = prompt;
      e.dataTransfer.effectAllowed = "move";
    });
    row.addEventListener("dragover", (e) => {
      e.preventDefault();
      row.classList.add("drag-over");
    });
    row.addEventListener("dragleave", () => row.classList.remove("drag-over"));
    row.addEventListener("drop", async (e) => {
      e.preventDefault();
      row.classList.remove("drag-over");
      if (!draggedPrompt || draggedPrompt === prompt) return;
      const reordered = prompts.filter((p) => p !== draggedPrompt);
      reordered.splice(reordered.indexOf(prompt), 0, draggedPrompt);
      prompts = reordered;
      await chrome.storage.local.set({ prompts });
      renderMainView();
    });
    row.addEventListener("dragend", () => {
      draggedPrompt = null;
    });

    promptList.appendChild(row);
  });
}

function openEditView() {
  editDraft = prompts.map((p) => ({ ...p }));
  renderEditView();
  mainView.classList.add("hidden");
  editView.classList.remove("hidden");
}

// Back discards the draft entirely - nothing is persisted until Done.
function closeEditView() {
  editView.classList.add("hidden");
  mainView.classList.remove("hidden");
}

function addDraftPrompt() {
  editDraft.push({ name: "", text: "" });
  renderEditView();
  const cards = editList.querySelectorAll(".edit-card-top input[type='text']");
  cards[cards.length - 1]?.focus();
}

function deleteDraftPrompt(i) {
  const [removed] = editDraft.splice(i, 1);
  renderEditView();
  showToast("Prompt removed", false, {
    label: "Undo",
    onClick: () => {
      editDraft.splice(i, 0, removed);
      renderEditView();
    },
  });
}

function moveDraftPrompt(from, to) {
  if (to < 0 || to >= editDraft.length || from === to) return;
  const [moved] = editDraft.splice(from, 1);
  editDraft.splice(to, 0, moved);
  renderEditView();
}

function renderEditView() {
  editList.innerHTML = "";

  editDraft.forEach((prompt, i) => {
    const card = document.createElement("div");
    card.className = "edit-card";
    card.draggable = true;

    card.addEventListener("dragstart", (e) => {
      if (e.target.closest("input, textarea, button")) {
        e.preventDefault();
        return;
      }
      draggedEditIndex = i;
      e.dataTransfer.effectAllowed = "move";
    });
    card.addEventListener("dragover", (e) => {
      e.preventDefault();
      card.classList.add("drag-over");
    });
    card.addEventListener("dragleave", () => card.classList.remove("drag-over"));
    card.addEventListener("drop", (e) => {
      e.preventDefault();
      card.classList.remove("drag-over");
      if (draggedEditIndex !== null) moveDraftPrompt(draggedEditIndex, i);
    });
    card.addEventListener("dragend", () => {
      draggedEditIndex = null;
    });

    const top = document.createElement("div");
    top.className = "edit-card-top";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Button name";
    nameInput.value = prompt.name;
    nameInput.addEventListener("input", () => {
      prompt.name = nameInput.value;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "icon-btn delete-btn";
    deleteBtn.innerHTML = ICONS.trash;
    deleteBtn.title = "Delete prompt";
    deleteBtn.addEventListener("click", () => deleteDraftPrompt(i));

    top.appendChild(nameInput);
    top.appendChild(deleteBtn);

    const textArea = document.createElement("textarea");
    textArea.placeholder = "Text to paste";
    textArea.value = prompt.text;
    textArea.addEventListener("input", () => {
      prompt.text = textArea.value;
    });

    card.appendChild(top);
    card.appendChild(textArea);
    editList.appendChild(card);
  });
}

async function saveAndClose() {
  prompts = editDraft
    .map((p) => ({ name: p.name.trim() || "Untitled", text: p.text }))
    .filter((p) => p.text.trim().length > 0);

  await chrome.storage.local.set({ prompts });
  renderMainView();
  closeEditView();
}

function showToast(message, isError, action) {
  clearTimeout(toastTimer);
  toastEl.innerHTML = "";

  const text = document.createElement("span");
  text.textContent = message;
  toastEl.appendChild(text);

  if (action) {
    const btn = document.createElement("button");
    btn.className = "toast-action";
    btn.textContent = action.label;
    btn.addEventListener("click", () => {
      clearTimeout(toastTimer);
      toastEl.classList.remove("show");
      action.onClick();
    });
    toastEl.appendChild(btn);
  }

  toastEl.classList.toggle("error", !!isError);
  toastEl.classList.add("show");
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), action ? 3200 : 1600);
}

async function pasteText(text) {
  const targetInfo = TARGETS[selectedTarget];
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const matches = tab?.url && targetInfo.urlPrefixes.some((p) => tab.url.startsWith(p));

  if (!tab?.id || !matches) {
    showToast(`Open ${targetInfo.label} first`, true);
    return;
  }

  const [result] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: pasteIntoChat,
    args: [text],
  });

  if (result.result?.ok) {
    showToast("Pasted");
  } else {
    showToast("Couldn't find the chat box", true);
  }
}
