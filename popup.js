// Add future built-in prompts here with a unique `builtIn` value and
// `locked: true`. Locked defaults stay out of Manage Prompts.
const DEFAULT_PROMPTS = [
  {
    builtIn: "greeting",
    name: "Greeting",
    text: "Hello",
    favorite: false,
    locked: true,
  },
  {
    builtIn: "rollforward",
    name: "Roll Forward",
    text: `# FINANCIAL STATEMENT ROLL-FORWARD AND FORMATTING INSTRUCTIONS

Please roll forward the attached Financial Statements from the **2025–2024 comparative period to 2026–2025**.

This is a **financial statement roll-forward task, not a rewriting or accounting-adjustment task**. Preserve the original document as closely as possible.

## 1. Core Roll-Forward Rule

For every applicable comparative financial statement table currently presented as:

| 2025     | 2024     |
| -------- | -------- |
| Amount A | Amount B |

Roll it forward to:

| 2026  | 2025     |
| ----- | -------- |
| BLANK | Amount A |

Apply the following rule consistently:

**Original 2025 → New comparative 2025**
**Original 2024 → Remove from the rolled-forward comparative table**
**New 2026 → Leave genuinely blank**

Do not move the original 2024 amounts into another column.

---

## 2. Update Reporting-Year Headings

Change applicable financial statement and note-table reporting headings from:

**2025 / 2024**

to:

**2026 / 2025**

Apply this to:

* Primary financial statements
* Supporting schedules
* Note disclosure tables
* Comparative financial data tables
* Reporting-period captions where the year change is clearly required

Do **not** perform a global replacement of every occurrence of 2025 or 2024 in the document.

---

## 3. Roll Forward Comparative Amounts

For every applicable comparative-period amount:

1. Copy or move the amount currently under **2025** into the new **2025 comparative column**.
2. Preserve the amount exactly as originally presented.
3. Clear the new **2026 numeric amount cell** completely.
4. Remove the old **2024 comparative amount** from that rolled-forward table.

Do not:

* Recalculate amounts
* Round amounts
* Change signs
* Change parentheses
* Change decimal places
* Change zeros to dashes
* Change dashes to zeros
* Create new amounts
* Infer missing balances
* Populate 2026 totals or subtotals
* Copy the 2025 amount into both 2026 and 2025

Examples:

Original:

| 2025      | 2024      |
| --------- | --------- |
| 1,250,000 | 1,100,000 |

Correct:

| 2026  | 2025      |
| ----- | --------- |
| BLANK | 1,250,000 |

If the original 2025 amount is:

**(1,250,000)**

the new comparative 2025 amount must remain:

**(1,250,000)**

If the original amount is a dash, preserve the dash in the comparative 2025 column.

---

## 4. Formatting of Transferred 2025 Amounts

Every amount transferred from the original 2025 column into the new comparative 2025 column must be formatted in **regular / non-bold font**.

This instruction applies **only to transferred comparative amount entries**.

Do not remove bold formatting from:

* Account titles
* Line-item descriptions
* Headings
* Subheadings
* Subtotal labels
* Total labels
* Note titles
* Structural text
* Other elements that were originally bold

---

## 5. New 2026 Current-Year Amount Cells

Every new 2026 numeric amount cell must remain **genuinely blank**.

Do not enter:

* 0
* *
* N/A
* Placeholder text
* Prior-year amounts
* Formulas producing zero
* Any other numeric value

The 2026 column heading must remain visible.

### Philippine Peso Formatting

Apply the appropriate **Philippine peso (₱) currency format** to blank 2026 numeric amount cells so that future amounts entered in those cells will display correctly.

If the original financial statements use a **separate currency-symbol column or separately positioned peso sign**, retain or insert **₱** in the designated 2026 symbol position while leaving the related numeric amount cell completely blank.

Do **not** type the ₱ symbol directly into a numeric amount cell if doing so would make that cell nonblank.

---

## 6. Preserve Disclosure Wording

Do not rewrite, summarize, polish, shorten, expand, correct, modernize, or paraphrase the disclosures.

Preserve exactly, except where a reporting-period year change is clearly required:

* Account titles
* Note titles
* Note numbering
* Disclosure descriptions
* Accounting policy wording
* Narrative paragraphs
* Table descriptions
* Subheadings
* Line-item descriptions
* Footnotes
* Note references
* Cross-references

Do not make grammatical or stylistic corrections during the roll-forward.

---

## 7. Preserve Existing Formatting and Layout

Except for the specifically required changes above, preserve the original:

* Fonts
* Font sizes
* Bold
* Italics
* Underlining
* Indentation
* Paragraph spacing
* Table widths
* Column widths
* Row heights
* Borders
* Shading
* Alignment
* Number formats
* Currency presentation
* Parentheses
* Decimal places
* Dashes
* Page breaks
* Headers
* Footers
* Table positioning
* Single underlines
* Double underlines
* Note numbering

The rolled-forward document should visually match the original as closely as possible.

---

## 8. Preserve Structural Elements

Do not delete any structural content merely because the 2026 amount column is blank.

Retain:

* All financial statement sections
* Notes
* Tables
* Rows
* Account descriptions
* Subtotals
* Total rows
* Percentage rows
* Section headings
* Supporting schedules
* Note references
* Borders
* Underlines
* Double underlines

---

## 9. Years Appearing in Narrative Disclosures

Use judgment when reviewing years inside narrative text.

Update a year only when it **clearly represents the reporting period being rolled forward**.

Do not automatically change historical years relating to:

* Incorporation
* Acquisitions
* Contracts
* Lease commencement
* Loan origination
* Loan maturity
* Tax years
* Registration
* Standards adoption
* Historical transactions
* Prior events
* Fixed contractual dates

Example:

> "The Company entered into the agreement in 2024."

If 2024 is the actual historical agreement date, leave it as **2024**.

If the correct treatment cannot be determined from the document, **preserve the original wording and flag the item FOR MANUAL REVIEW**.

---

## 10. Non-Monetary Numbers

Do not roll forward or alter numbers simply because they appear near a year.

Do not unintentionally change:

* Note numbers
* Paragraph numbers
* PFRS numbers
* PAS numbers
* IFRS numbers
* Republic Act numbers
* Revenue Regulation numbers
* Contract numbers
* Registration numbers
* Addresses
* Percentage rates
* Share quantities
* Reference numbers
* Historical dates
* Fixed contractual terms

Only roll forward values that clearly belong to comparative financial statement periods.

---

## 11. Ambiguous Items

If an item is ambiguous and it is unclear whether it should be changed:

1. Preserve the original content.
2. Do not make an unsupported assumption.
3. Flag the item as:

**FOR MANUAL REVIEW**

Briefly explain why the treatment is uncertain.

---

## 12. Final Quality-Control Check

Before completing the document, verify that:

* All applicable 2025–2024 headings are now 2026–2025.
* Every applicable original 2025 amount appears in the new comparative 2025 column.
* Transferred 2025 comparative amounts exactly match the original figures.
* Transferred 2025 amounts are regular / non-bold.
* Every applicable 2026 numeric amount cell is genuinely blank.
* No zero, dash, N/A, placeholder, or copied amount appears in a 2026 numeric cell.
* The appropriate ₱ formatting or symbol position is present for 2026.
* Old 2024 comparative amounts have been removed from rolled-forward tables.
* Historical 2024 or 2025 dates were not changed without justification.
* Disclosure wording was not unintentionally modified.
* No rows, tables, notes, schedules, or sections were deleted.
* Original formatting and layout were preserved except for the expressly required changes.

### Overriding Rule

When in doubt, **preserve the original document rather than making an unsupported change** and flag the item **FOR MANUAL REVIEW**.
`,
    favorite: false,
    locked: true,
  },
];

const TARGETS = {
  claude: {
    label: "Claude",
    urlPrefixes: ["https://claude.ai/"],
  },
  chatgpt: {
    label: "ChatGPT",
    urlPrefixes: ["https://chatgpt.com/", "https://chat.openai.com/"],
  },
};

const ICONS = {
  search:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="8.5" cy="8.5" r="5.5"/><path d="m13 13 4 4"/></svg>',
  pencil:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5a1.7 1.7 0 0 1 2.4 2.4L6.5 15.3l-3.2.7.7-3.2 9.5-9.3Z"/></svg>',
  trash:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h12M8 6V4.5A1.5 1.5 0 0 1 9.5 3h1A1.5 1.5 0 0 1 12 4.5V6m-6.5 0 .6 9.4A1.5 1.5 0 0 0 7.6 17h4.8a1.5 1.5 0 0 0 1.5-1.6L14.5 6"/></svg>',
  back:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 4.5 6 10l6.5 5.5"/></svg>',
  copy:
    '<svg viewBox="0 0 20 20"><rect x="6.5" y="6.5" width="9" height="9" rx="1.5"/><path d="M13 6.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v6.5A1.5 1.5 0 0 0 5 13h1.5"/></svg>',
  star:
    '<svg viewBox="0 0 20 20"><path d="m10 2.7 2.1 4.4 4.9.7-3.5 3.4.8 4.8-4.3-2.3L5.7 16l.8-4.8L3 7.8l4.9-.7L10 2.7Z"/></svg>',
  download:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3v9m0 0-3.2-3.2M10 12l3.2-3.2M4 14.5v1A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.5-1.5v-1"/></svg>',
  upload:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V4m0 0-3.2 3.2M10 4l3.2 3.2M4 14.5v1A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.5-1.5v-1"/></svg>',
};

const mainView = document.getElementById("mainView");
const editView = document.getElementById("editView");
const promptList = document.getElementById("promptList");
const emptyState = document.getElementById("emptyState");
const emptyMessage = document.getElementById("emptyMessage");
const emptyAddBtn = document.getElementById("emptyAddBtn");
const editList = document.getElementById("editList");
const searchWrap = document.getElementById("searchWrap");
const searchInput = document.getElementById("searchInput");
const siteStatus = document.getElementById("siteStatus");
const statusTitle = document.getElementById("statusTitle");
const statusHint = document.getElementById("statusHint");
const openTargets = document.getElementById("openTargets");
const promptCount = document.getElementById("promptCount");
const toastEl = document.getElementById("toast");
const restoreInput = document.getElementById("restoreInput");

let prompts = DEFAULT_PROMPTS;
let editDraft = [];
let activeTab = null;
let activeTarget = null;
let searchQuery = "";
let toastTimer = null;
let draggedPrompt = null;
let draggedEditIndex = null;

document.getElementById("searchBtn").innerHTML = ICONS.search;
document.getElementById("manageBtn").innerHTML = ICONS.pencil;
document.getElementById("backBtn").innerHTML = ICONS.back;
document.getElementById("backupBtn").innerHTML = ICONS.download;
document.getElementById("restoreBtn").innerHTML = ICONS.upload;

init();

async function init() {
  const stored = await chrome.storage.local.get(["prompts", "presets"]);
  prompts = normalizePrompts(stored);
  if (JSON.stringify(stored.prompts) !== JSON.stringify(prompts)) {
    await chrome.storage.local.set({ prompts });
  }
  [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  activeTarget = detectTarget(activeTab?.url);

  renderStatus();
  renderMainView();

  document.getElementById("manageBtn").addEventListener("click", openEditView);
  document.getElementById("searchBtn").addEventListener("click", toggleSearch);
  document.getElementById("backBtn").addEventListener("click", closeEditView);
  document.getElementById("addBtn").addEventListener("click", openNewPrompt);
  emptyAddBtn.addEventListener("click", () => {
    if (searchQuery) {
      searchInput.value = "";
      searchQuery = "";
      renderMainView();
    } else {
      openNewPrompt();
    }
  });
  document.getElementById("addPromptBtn").addEventListener("click", addDraftPrompt);
  document.getElementById("doneBtn").addEventListener("click", saveAndClose);
  document.getElementById("backupBtn").addEventListener("click", backupPrompts);
  document.getElementById("restoreBtn").addEventListener("click", () => restoreInput.click());
  restoreInput.addEventListener("change", async (event) => {
    const [file] = event.target.files;
    event.target.value = "";
    if (file) await restorePrompts(file);
  });
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value;
    renderMainView();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== searchInput) {
      event.preventDefault();
      searchWrap.classList.remove("hidden");
      searchInput.focus();
    } else if (event.key === "Escape" && document.activeElement === searchInput) {
      hideSearch();
    }
  });
  openTargets.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-url]");
    if (button) chrome.tabs.create({ url: button.dataset.url });
  });
}

function toggleSearch() {
  if (searchWrap.classList.contains("hidden")) {
    searchWrap.classList.remove("hidden");
    searchInput.focus();
  } else {
    hideSearch();
  }
}

function hideSearch() {
  searchInput.value = "";
  searchQuery = "";
  searchWrap.classList.add("hidden");
  renderMainView();
}

function openNewPrompt() {
  openEditView();
  addDraftPrompt();
}

function normalizePrompts(stored) {
  let source = [];
  if (Array.isArray(stored.prompts)) {
    source = stored.prompts;
  } else if (Array.isArray(stored.presets)) {
    source = stored.presets.map((text, i) => ({
      name: `Prompt ${i + 1}`,
      text,
      favorite: false,
    }));
  }

  const claimedIndices = new Set();
  const defaultPrompts = DEFAULT_PROMPTS.map((defaultPrompt) => {
    const storedIndex = source.findIndex(
      (prompt, index) =>
        !claimedIndices.has(index) && matchesDefaultPrompt(prompt, defaultPrompt)
    );
    if (storedIndex >= 0) claimedIndices.add(storedIndex);
    const storedPrompt = storedIndex >= 0 ? source[storedIndex] : null;
    return {
      ...defaultPrompt,
      favorite: storedPrompt ? Boolean(storedPrompt.favorite) : Boolean(defaultPrompt.favorite),
    };
  });

  const userPrompts = source
    .filter((_prompt, index) => !claimedIndices.has(index))
    .map((prompt, index) => ({
      name: typeof prompt?.name === "string" ? prompt.name : `Prompt ${index + 1}`,
      text: typeof prompt?.text === "string" ? prompt.text : "",
      favorite: Boolean(prompt?.favorite),
      locked: false,
    }));

  return [...defaultPrompts, ...userPrompts];
}

function matchesDefaultPrompt(prompt, defaultPrompt) {
  return (
    (defaultPrompt.builtIn && prompt?.builtIn === defaultPrompt.builtIn) ||
    (prompt?.name === defaultPrompt.name && prompt?.text === defaultPrompt.text)
  );
}

function detectTarget(url) {
  if (!url) return null;
  return (
    Object.values(TARGETS).find((target) =>
      target.urlPrefixes.some((prefix) => url.startsWith(prefix))
    ) || null
  );
}

function renderStatus() {
  siteStatus.classList.toggle("ready", Boolean(activeTarget));
  openTargets.classList.toggle("hidden", Boolean(activeTarget));

  if (activeTarget) {
    statusTitle.textContent = `Ready for ${activeTarget.label}`;
    statusHint.textContent = "Choose a prompt to insert it into the chat box.";
  } else {
    statusTitle.textContent = "Copy mode";
    statusHint.textContent = "Prompts will be copied on unsupported pages.";
  }
}

function renderMainView() {
  promptList.innerHTML = "";
  const query = searchQuery.trim().toLowerCase();
  const visible = query
    ? prompts.filter(
        (prompt) =>
          prompt.name.toLowerCase().includes(query) ||
          prompt.text.toLowerCase().includes(query)
      )
    : prompts;

  promptCount.textContent = `${prompts.length} ${prompts.length === 1 ? "prompt" : "prompts"}`;
  emptyState.classList.toggle("hidden", visible.length > 0);
  promptList.classList.toggle("hidden", visible.length === 0);

  if (!visible.length) {
    emptyMessage.textContent = prompts.length ? "No matching prompts." : "No prompts yet.";
    emptyAddBtn.textContent = prompts.length ? "Clear search" : "Add your first prompt";
    return;
  }

  const favorites = visible.filter((prompt) => prompt.favorite);
  const others = visible.filter((prompt) => !prompt.favorite);

  if (favorites.length && others.length) {
    appendSection("Favorites", favorites);
    appendSection("All prompts", others);
  } else {
    appendPromptRows(visible);
  }
}

function appendSection(label, items) {
  const heading = document.createElement("div");
  heading.className = "section-label";
  heading.textContent = label;
  promptList.appendChild(heading);
  appendPromptRows(items);
}

function appendPromptRows(items) {
  items.forEach((prompt) => {
    const row = document.createElement("div");
    row.className = "prompt-row";
    row.draggable = !prompt.locked;

    const primary = document.createElement("button");
    primary.type = "button";
    primary.className = "prompt-main";
    primary.title = activeTarget ? `Insert into ${activeTarget.label}` : "Copy prompt";
    primary.addEventListener("click", () => usePrompt(prompt.text));

    const avatar = document.createElement("span");
    avatar.className = "prompt-avatar";
    avatar.textContent = (prompt.name.trim()[0] || "P").toUpperCase();

    const textWrap = document.createElement("span");
    textWrap.className = "prompt-text";
    const name = document.createElement("span");
    name.className = "prompt-name";
    const nameText = document.createElement("span");
    nameText.className = "prompt-name-text";
    nameText.textContent = prompt.name || "Untitled";
    name.appendChild(nameText);
    if (prompt.favorite) {
      const mark = document.createElement("span");
      mark.className = "favorite-mark";
      mark.textContent = "★";
      mark.setAttribute("aria-label", "Favorite");
      name.appendChild(mark);
    }

    const preview = document.createElement("span");
    preview.className = "prompt-preview";
    preview.textContent = prompt.text.replace(/\s+/g, " ").trim();
    textWrap.append(name, preview);
    primary.append(avatar, textWrap);

    const actions = document.createElement("div");
    actions.className = "row-actions";
    const copyButton = createRowAction("Copy prompt", ICONS.copy, () =>
      copyText(prompt.text)
    );
    const favoriteButton = createRowAction(
      prompt.favorite ? "Remove from favorites" : "Add to favorites",
      ICONS.star,
      () => toggleFavorite(prompt)
    );
    favoriteButton.classList.toggle("active", prompt.favorite);
    actions.append(copyButton, favoriteButton);
    row.append(primary, actions);

    row.addEventListener("dragstart", (event) => {
      if (prompt.locked || event.target.closest(".row-action")) {
        event.preventDefault();
        return;
      }
      draggedPrompt = prompt;
      event.dataTransfer.effectAllowed = "move";
    });
    row.addEventListener("dragover", (event) => {
      event.preventDefault();
      row.classList.add("drag-over");
    });
    row.addEventListener("dragleave", () => row.classList.remove("drag-over"));
    row.addEventListener("drop", async (event) => {
      event.preventDefault();
      row.classList.remove("drag-over");
      if (!draggedPrompt || draggedPrompt === prompt || prompt.locked) return;
      const reordered = prompts.filter((item) => item !== draggedPrompt);
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

function createRowAction(label, icon, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "row-action";
  button.title = label;
  button.setAttribute("aria-label", label);
  button.innerHTML = icon;
  button.addEventListener("click", handler);
  return button;
}

async function toggleFavorite(prompt) {
  prompt.favorite = !prompt.favorite;
  await chrome.storage.local.set({ prompts });
  renderMainView();
  showToast(prompt.favorite ? "Added to favorites" : "Removed from favorites");
}

function openEditView() {
  editDraft = prompts
    .filter((prompt) => !prompt.locked)
    .map((prompt) => ({ ...prompt }));
  renderEditView();
  mainView.classList.add("hidden");
  editView.classList.remove("hidden");
}

function closeEditView() {
  editView.classList.add("hidden");
  mainView.classList.remove("hidden");
}

function addDraftPrompt() {
  editDraft.push({ name: "", text: "", favorite: false });
  renderEditView();
  const cards = editList.querySelectorAll(".edit-card-top input[type='text']");
  cards[cards.length - 1]?.focus();
}

async function deleteDraftPrompt(index) {
  if (editDraft[index]?.locked) return;
  const [removed] = editDraft.splice(index, 1);
  renderEditView();
  await persistDraft();
  showToast("Prompt removed", false, {
    label: "Undo",
    onClick: async () => {
      editDraft.splice(index, 0, removed);
      renderEditView();
      await persistDraft();
    },
  });
}

function moveDraftPrompt(from, to) {
  if (
    to < 0 ||
    to >= editDraft.length ||
    from === to ||
    editDraft[from]?.locked ||
    editDraft[to]?.locked
  ) {
    return;
  }
  const [moved] = editDraft.splice(from, 1);
  editDraft.splice(to, 0, moved);
  renderEditView();
}

function renderEditView() {
  editList.innerHTML = "";

  editDraft.forEach((prompt, index) => {
    const card = document.createElement("div");
    card.className = "edit-card";
    card.draggable = true;
    card.addEventListener("dragstart", (event) => {
      if (event.target.closest("input, textarea, button")) {
        event.preventDefault();
        return;
      }
      draggedEditIndex = index;
      event.dataTransfer.effectAllowed = "move";
    });
    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      card.classList.add("drag-over");
    });
    card.addEventListener("dragleave", () => card.classList.remove("drag-over"));
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      card.classList.remove("drag-over");
      if (draggedEditIndex !== null) moveDraftPrompt(draggedEditIndex, index);
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
    deleteBtn.type = "button";
    deleteBtn.className = "icon-btn delete-btn";
    deleteBtn.innerHTML = ICONS.trash;
    deleteBtn.title = "Delete prompt";
    deleteBtn.setAttribute("aria-label", "Delete prompt");
    deleteBtn.addEventListener("click", () => deleteDraftPrompt(index));
    top.append(nameInput, deleteBtn);

    const textArea = document.createElement("textarea");
    textArea.placeholder = "Text to paste";
    textArea.value = prompt.text;
    textArea.addEventListener("input", () => {
      prompt.text = textArea.value;
    });

    card.append(top, textArea);
    editList.appendChild(card);
  });
}

async function saveAndClose() {
  await persistDraft();
  closeEditView();
}

async function persistDraft() {
  const lockedPrompts = prompts.filter((prompt) => prompt.locked);
  const editablePrompts = editDraft
    .map((prompt) => ({
      name: prompt.name.trim() || "Untitled",
      text: prompt.text,
      favorite: Boolean(prompt.favorite),
      locked: Boolean(prompt.locked),
      ...(prompt.builtIn ? { builtIn: prompt.builtIn } : {}),
    }))
    .filter((prompt) => prompt.text.trim().length > 0);
  prompts = [...lockedPrompts, ...editablePrompts];

  await chrome.storage.local.set({ prompts });
  renderMainView();
}

function backupPrompts() {
  const backup = {
    type: "promptify-backup",
    version: 1,
    exportedAt: new Date().toISOString(),
    prompts,
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `promptify-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Backup downloaded");
}

async function restorePrompts(file) {
  let source;
  try {
    const data = JSON.parse(await file.text());
    source = Array.isArray(data) ? data : data?.prompts;
    if (!Array.isArray(source)) throw new Error("Invalid backup file");
  } catch (_error) {
    showToast("Couldn't restore backup — invalid file", true);
    return;
  }

  const previousPrompts = prompts;
  prompts = normalizePrompts({ prompts: source });
  await chrome.storage.local.set({ prompts });
  editDraft = prompts.filter((prompt) => !prompt.locked).map((prompt) => ({ ...prompt }));
  renderEditView();
  renderMainView();
  showToast(`Restored ${prompts.length} prompts`, false, {
    label: "Undo",
    onClick: async () => {
      prompts = previousPrompts;
      await chrome.storage.local.set({ prompts });
      editDraft = prompts.filter((prompt) => !prompt.locked).map((prompt) => ({ ...prompt }));
      renderEditView();
      renderMainView();
    },
  });
}

async function usePrompt(text) {
  if (!activeTarget || !activeTab?.id) {
    await copyText(text);
    return;
  }

  try {
    const [result] = await chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: pasteIntoChat,
      args: [text],
    });

    if (result.result?.ok) {
      showToast("Pasted");
    } else {
      showToast("Couldn't find the chat box", true);
    }
  } catch (_error) {
    showToast("Couldn't access this page", true);
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard");
  } catch (_error) {
    const fallback = document.createElement("textarea");
    fallback.value = text;
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.appendChild(fallback);
    fallback.select();
    const copied = document.execCommand("copy");
    fallback.remove();
    showToast(copied ? "Copied to clipboard" : "Couldn't copy prompt", !copied);
  }
}

function showToast(message, isError = false, action = null) {
  clearTimeout(toastTimer);
  toastEl.innerHTML = "";
  const text = document.createElement("span");
  text.textContent = message;
  toastEl.appendChild(text);

  if (action) {
    const button = document.createElement("button");
    button.className = "toast-action";
    button.textContent = action.label;
    button.addEventListener("click", () => {
      clearTimeout(toastTimer);
      toastEl.classList.remove("show");
      action.onClick();
    });
    toastEl.appendChild(button);
  }

  toastEl.classList.toggle("error", isError);
  toastEl.classList.add("show");
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), action ? 3200 : 1600);
}
