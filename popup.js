const DEFAULT_PROMPTS = [{ name: "Greeting", text: "Hello" }];

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
  plus: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M10 4v12M4 10h12"/></svg>',
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
const toastEl = document.getElementById("toast");

let prompts = DEFAULT_PROMPTS;
let selectedTarget = "claude";
let toastTimer = null;

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
    addPrompt();
  });
  document.getElementById("emptyAddBtn").addEventListener("click", () => {
    openEditView();
    addPrompt();
  });
  document.getElementById("addPromptBtn").addEventListener("click", addPrompt);
  document.getElementById("doneBtn").addEventListener("click", saveAndClose);
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

  const isEmpty = prompts.length === 0;
  emptyState.classList.toggle("hidden", !isEmpty);
  promptList.classList.toggle("hidden", isEmpty);

  prompts.forEach((prompt) => {
    const row = document.createElement("button");
    row.className = "prompt-row";

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

    promptList.appendChild(row);
  });
}

function openEditView() {
  renderEditView();
  mainView.classList.add("hidden");
  editView.classList.remove("hidden");
}

function closeEditView() {
  editView.classList.add("hidden");
  mainView.classList.remove("hidden");
}

function addPrompt() {
  prompts.push({ name: "", text: "" });
  renderEditView();
  const cards = editList.querySelectorAll(".edit-card-top input[type='text']");
  cards[cards.length - 1]?.focus();
}

function renderEditView() {
  editList.innerHTML = "";

  prompts.forEach((prompt, i) => {
    const card = document.createElement("div");
    card.className = "edit-card";

    const top = document.createElement("div");
    top.className = "edit-card-top";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Button name";
    nameInput.value = prompt.name;
    nameInput.addEventListener("input", () => {
      prompts[i].name = nameInput.value;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "icon-btn delete-btn";
    deleteBtn.innerHTML = ICONS.trash;
    deleteBtn.title = "Delete prompt";
    deleteBtn.addEventListener("click", () => {
      prompts.splice(i, 1);
      renderEditView();
    });

    top.appendChild(nameInput);
    top.appendChild(deleteBtn);

    const textArea = document.createElement("textarea");
    textArea.placeholder = "Text to paste";
    textArea.value = prompt.text;
    textArea.addEventListener("input", () => {
      prompts[i].text = textArea.value;
    });

    card.appendChild(top);
    card.appendChild(textArea);
    editList.appendChild(card);
  });
}

async function saveAndClose() {
  prompts = prompts
    .map((p) => ({ name: p.name.trim() || "Untitled", text: p.text }))
    .filter((p) => p.text.trim().length > 0);

  await chrome.storage.local.set({ prompts });
  renderMainView();
  closeEditView();
}

function showToast(message, isError) {
  clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.classList.toggle("error", !!isError);
  toastEl.classList.add("show");
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1600);
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
    args: [text, selectedTarget],
  });

  if (result.result?.ok) {
    showToast("Pasted");
  } else {
    showToast("Couldn't find the chat box", true);
  }
}

function pasteIntoChat(text, target) {
  const selectorsByTarget = {
    claude: [
      'div[contenteditable="true"].ProseMirror',
      'div[contenteditable="true"][aria-label*="message" i]',
      'div[contenteditable="true"]',
      "textarea",
    ],
    chatgpt: [
      "#prompt-textarea",
      'div[contenteditable="true"]',
      "textarea#prompt-textarea",
      "textarea",
    ],
  };
  const selectors = selectorsByTarget[target] || selectorsByTarget.claude;

  let el = null;
  for (const sel of selectors) {
    el = document.querySelector(sel);
    if (el) break;
  }

  if (!el) return { ok: false };

  el.focus();

  if (el.tagName === "TEXTAREA") {
    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      "value"
    ).set;
    setter.call(el, text);
    el.dispatchEvent(new Event("input", { bubbles: true }));
  } else {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);

    const dataTransfer = new DataTransfer();
    dataTransfer.setData("text/plain", text);
    el.dispatchEvent(
      new ClipboardEvent("paste", {
        clipboardData: dataTransfer,
        bubbles: true,
        cancelable: true,
      })
    );
  }

  return { ok: true };
}
