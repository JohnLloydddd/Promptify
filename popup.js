// Add future built-in prompts here with a unique `builtIn` value and
// `locked: true`. Locked defaults stay out of Manage Prompts.
const DEFAULT_PROMPTS = [
  {
    builtIn: "rollforward",
    name: "Roll Forward",
    text: `FINANCIAL STATEMENT ROLL-FORWARD PROMPT 

 
Roll forward the attached financial statements from the 2025–2024 reporting period to the 2026–2025 reporting period. 
The objective is to prepare the financial statements for 2026 while preserving the existing wording, presentation, structure, and formatting. 
This is a financial-statement roll-forward task, not a rewriting, recalculation, or accounting-adjustment task. 
1. Reporting-year definitions 
For this roll-forward: 
• New current year: 2026 
• Most recent comparative year: 2025 
• Second comparative year, where a three-year presentation is used: 2024 
• Oldest year to remove from a three-year presentation: 2023 
Apply these year mappings only when the years clearly represent financial-reporting periods. 
Do not automatically change historical, contractual, acquisition, maturity, incorporation, tax, regulatory, or other fixed dates. 
2. General hierarchy of instructions 
Apply the instructions in the following order: 
1. Apply the special rules for statements of changes in equity and similar current-year movement schedules in Section 5. 
2. Apply the special rules for PPE, investment property, and similar schedules in Section 4. 
3. Apply the ordinary two-year and three-year table rules in Sections 3 and 4. 
4. Preserve historical and fixed dates in accordance with Section 10. 
5. If a table remains genuinely ambiguous, preserve it and identify it for review. 
The special rules for equity and similar movement schedules override the general instruction to transfer prior-year amounts. 
3. Ordinary two-year tables 
For every ordinary table currently presenting two reporting years, apply the following mapping: 
Existing presentation Rolled-forward presentation 
2025 2026 
2024 2025 
Old 2025 amount New 2025 comparative amount 
Old 2024 amount Remove 
New 2026 amount Leave genuinely blank 
Required treatment 
• Change the reporting-year headings from 2025–2024 to 2026–2025. 
• Transfer each exact old 2025 amount to the corresponding new 2025 comparative position. 
• Remove the old 2024 amounts from that two-year table. 
• Leave every new 2026 monetary or numeric amount cell genuinely blank. 
• Do not enter zero, a dash, N/A, a placeholder, an underscore, or a copied amount in a new 2026 numeric cell. 
• Do not leave an old 2025 amount in the same physical column after changing that column heading to 2026. 
• Verify the mapping by row and account description, not merely by column position. 
Illustration 
Before roll-forward 
Account 2025 2024 
Sample account 1,000 800 
After roll-forward 
Account 2026 2025 
Sample account 1,000 
4. Ordinary three-year tables 
Do not skip, collapse, or leave unchanged any table that presents three reporting years. 
Apply the following mapping: 
Existing presentation Rolled-forward presentation 
2025 2026 
2024 2025 
2023 2024 
Old 2025 amount New 2025 comparative amount 
Old 2024 amount New 2024 comparative amount 
Old 2023 amount Remove 
New 2026 amount Leave genuinely blank 
Required treatment 
• Add or establish the new 2026 current-year period. 
• Retain the two most recent existing comparative periods: 2025 and 2024. 
• Keep every amount associated with its correct reporting year: 
o Old 2025 amounts remain associated with 2025. 
o Old 2024 amounts remain associated with 2024. 
• Remove the old 2023 period and its amounts. 
• Keep the table as a three-year table. 
• Leave every new 2026 monetary or numeric amount cell genuinely blank. 
• Do not reduce a three-year table to a two-year table. 
• Do not merely rename the headings while leaving the amounts under the wrong years. 
Illustration 
Before roll-forward 
Account 2025 2024 2023 
Sample account 1,000 800 600 
After roll-forward 
Account 2026 2025 2024 
Sample account 1,000 800 
Apply this rule whether the reporting periods are presented: 
• Horizontally as column headings 
• Vertically as row headings 
• In separate year blocks 
• In repeated subtables or schedules 
• In merged cells 
• In multilevel table headings 
• On different pages within the same note 
5. Statements of changes in equity and similar movement schedules 
This section is a mandatory exception to the general amount-transfer rules. 
Apply this special treatment to: 
• Statements of changes in equity 
• Retained earnings movement schedules 
• Share capital movement schedules 
• Appropriation or reserve movement schedules 
• Dividends movement schedules 
• Equity reconciliation tables 
• Other similar schedules presenting movements for a single reporting period 
Required treatment 
For a current-year equity or similar movement schedule: 
1. Roll the reporting period forward from 2025 to 2026. 
2. Update applicable current-year dates, including: 
o January 1, 2025 → January 1, 2026 
o December 31, 2025 → December 31, 2026 
o For the year ended December 31, 2025 → For the year ended December 31, 2026 
3. Preserve all account headings, equity categories, movement descriptions, rows, columns, totals, borders, and underlines. 
4. Leave all monetary amount cells for the new 2026 movement schedule genuinely blank. 
5. Do not copy, transfer, duplicate, or carry forward the old 2025 amounts into the new 2026 monetary cells. 
6. Do not automatically use the old December 31, 2025 closing balance as the January 1, 2026 opening balance. 
7. Do not calculate or create a new opening balance. 
8. Do not retain old 2025 profit, loss, dividends, contributions, withdrawals, appropriations, transfers, issuances, or other movements in the new 2026 schedule. 
9. Do not enter zero, a dash, N/A, a placeholder, or an estimated amount in any new 2026 monetary cell. 
Illustration 
Before roll-forward 
Movement Share capital Retained earnings Total equity 
Balance at January 1, 2025 1,000 500 1,500 
Profit for 2025 — 200 200 
Balance at December 31, 2025 1,000 700 1,700 
After roll-forward 
Movement Share capital Retained earnings Total equity 
Balance at January 1, 2026  
Profit for 2026  
Balance at December 31, 2026  
The old 2025 amounts must not be copied into the new 2026 equity movement schedule. 
Important distinction 
This special rule applies to current-year movement and reconciliation schedules. 
If an equity note contains a separate ordinary two-year balance table presenting 2025 and 2024 balances, apply the ordinary two-year rule in Section 3 unless that table is itself a movement schedule. 
6. PPE, investment property, and similar movement schedules 
Apply the roll-forward rules to all detailed movement and reconciliation schedules, including: 
• Property, plant and equipment 
• Investment property 
• Right-of-use assets 
• Intangible assets 
• Accumulated depreciation or amortization 
• Asset revaluation schedules 
• Construction in progress 
• Financial investments 
• Loans and receivables 
• Borrowings 
• Lease liabilities 
• Deferred tax accounts 
• Provisions 
• Other notes or schedules using the same multi-year structure 
Do not skip these tables merely because they contain: 
• Several asset classes 
• Numerous monetary columns 
• Opening and closing balances 
• Additions 
• Disposals 
• Transfers 
• Depreciation or amortization 
• Impairment or revaluation 
• Separate cost and accumulated depreciation sections 
• Repeated year headings 
• Two or three years of amounts 
• Merged cells or multilevel headings 
Three-year movement schedules 
For a three-year PPE or similar schedule: 
1. Establish the new 2026 period using the same table structure. 
2. Keep all 2026 monetary cells genuinely blank. 
3. Retain the complete old 2025 period as the 2025 comparative period. 
4. Retain the complete old 2024 period as the 2024 comparative period. 
5. Remove the old 2023 period and its amounts. 
6. Preserve every asset-category heading, movement description, total, subtotal, border, and underline. 
7. Apply the mapping to every monetary row, not only to opening and closing balances. 
Two-year movement schedules 
For a two-year PPE or similar schedule: 
1. Establish the new 2026 period using the existing table structure. 
2. Keep all 2026 monetary cells genuinely blank. 
3. Retain the complete old 2025 period as the new 2025 comparative period. 
4. Remove the old 2024 period and its amounts. 
5. Apply the mapping to every monetary row. 
Do not apply the equity exception in Section 5 to PPE, investment property, intangible assets, depreciation, amortization, or similar asset and liability schedules. 
7. Comparative-amount formatting 
Every monetary or numeric amount transferred from a previous year must appear as regular, non-bold text. 
The Philippine peso sign associated with a transferred comparative amount must also be regular and non-bold. 
This requirement applies whether the peso sign: 
• Appears in the same cell as the comparative amount 
• Appears in a separate currency-symbol column 
• Is attached directly to the amount 
• Is repeated before a subtotal, total, opening balance, or closing balance 
For every transferred comparative figure: 
• The amount must be regular and non-bold. 
• The related ₱ sign must be regular and non-bold. 
• Do not copy bold formatting from the old current-year amount or peso sign. 
• If the source amount and peso sign were bold, remove bold formatting from both when transferring them to the comparative-year position. 
This requirement applies to: 
• Individual account amounts 
• Subtotal amounts 
• Total amounts 
• Opening and closing balances 
• Comparative figures in the primary financial statements 
• Comparative figures in the notes 
• Comparative figures in PPE and other movement schedules 
• Comparative percentages, ratios, and per-share amounts, where applicable 
• Both retained comparative years in a three-year table 
Bold-formatting distinction 
• Transferred comparative monetary and numeric figures: regular and non-bold 
• Peso signs associated with transferred comparative figures: regular and non-bold 
• Account titles and account names: preserve existing formatting 
• Row descriptions: preserve existing formatting 
• Headings and year headings: preserve existing formatting 
• Subtotal and total labels: preserve existing formatting 
• Note titles and section titles: preserve existing formatting 
A subtotal or total label may remain bold, but its transferred comparative amount and the related peso sign must both be regular and non-bold. 
When transferring an amount, copy its exact value and applicable number format without copying the source cell’s bold formatting. 
8. Amount handling 
When retaining or transferring an amount: 
• Preserve its exact numeric value. 
• Preserve commas, decimal places, parentheses, dashes, percentage signs, ratios, and other number presentation. 
• Do not recalculate, round, adjust, combine, infer, or create an amount. 
• Do not change formulas or relationships between balances unless specifically instructed. 
• Do not move an amount based only on visual proximity. 
• Match the amount using its account title, row description, reporting year, and table structure. 
• Ensure that no amount is placed under the wrong reporting year. 
• Apply the non-bold rule in Section 7 to every transferred comparative amount. 
9. Blank 2026 cells and peso formatting 
All new 2026 monetary and numeric amount cells must be genuinely blank and ready for data entry. 
Do not place any of the following in a new 2026 numeric cell: 
• Zero 
• A dash 
• N/A 
• An underscore 
• A numeric placeholder 
• A copied prior-year amount 
• A formula returning zero 
• A space intended to imitate a blank amount 
• A typed peso sign inside the numeric amount cell 
Preserve or apply the appropriate Philippine peso currency-number format to the blank 2026 numeric cells. 
If the original table uses a separate currency-symbol column: 
• Retain or insert the ₱ sign in the designated currency-symbol position. 
• Leave the corresponding numeric amount cell genuinely blank. 
A peso sign in a separate designated currency-symbol cell is permitted. A peso sign must not be typed into the blank numeric amount cell itself. 
10. Narrative years and narrative amounts 
Change a year in narrative text only when it clearly represents a reporting period being rolled forward. 
For narrative disclosures containing comparative reporting-period amounts: 
• Change the reporting years from 2025 and 2024 to 2026 and 2025. 
• Leave the new 2026 amount blank. 
• Transfer the old 2025 amount as the new 2025 comparative amount. 
• Remove the old 2024 comparative amount from that sentence. 
• Keep the wording unchanged except for the necessary year-and-amount roll-forward. 
• Format the retained 2025 comparative amount as regular, non-bold text. 
Illustration 
Before 
Depreciation expense amounted to ₱100,000 in 2025 and ₱80,000 in 2024. 
After 
Depreciation expense amounted to ₱________ in 2026 and ₱100,000 in 2025. 
Do not automatically change: 
• Historical dates 
• Contract dates 
• Maturity dates 
• Acquisition dates 
• Incorporation dates 
• Lease commencement dates 
• Standards-adoption dates 
• Taxable years 
• Regulatory filing dates 
• Note or paragraph numbers 
• PFRS, PAS, or IFRS numbers 
• Registration or contract numbers 
• Addresses 
• Fixed contractual terms 
11. Preserve disclosures and structure 
Do not rewrite, summarize, improve, shorten, or expand the disclosures. 
Preserve: 
• Disclosure wording 
• Accounting policies 
• Account and note titles 
• Line-item descriptions 
• Note numbers and references 
• Cross-references 
• Footnotes 
• Rows and columns 
• Asset classifications 
• Subtotals and totals 
• Percentage and ratio rows 
• Table borders and underlines 
• Headers and footers 
• Page layout and page breaks 
Do not delete structural rows merely because the new 2026 amount cells are blank. 
Do not remove an account, movement row, subtotal, or total solely because it has no 2026 amount. 
12. Preserve formatting 
Except for the required year, amount, comparative-font, and peso-format changes, preserve: 
• Fonts and font sizes 
• Bold, italic, and underline formatting 
• Indentation and paragraph spacing 
• Table, column, and row dimensions 
• Borders and shading 
• Alignment 
• Number formats 
• Parentheses and decimal places 
• Table positioning 
• Headers and footers 
• Page layout and page breaks 
The rolled-forward document should visually match the source document. 
The instruction to preserve formatting does not override the requirement that all transferred comparative amounts be regular and non-bold. 
13. Mandatory quality-control review 
Before completing the document, inspect every page, table, schedule, note, and narrative disclosure. 
Confirm that: 
• Every applicable two-year table was rolled from 2025–2024 to 2026–2025. 
• Every applicable three-year table was rolled from 2025–2024–2023 to 2026–2025–2024. 
• No applicable three-year table was skipped or reduced to two years. 
• All PPE, investment property, intangible-asset, and similar schedules were rolled forward. 
• Every movement row in the applicable schedules was addressed. 
• The complete old 2025 amounts are presented under 2025 in ordinary comparative tables. 
• The complete old 2024 amounts are presented under 2024 in applicable three-year tables. 
• Old 2023 amounts were removed from applicable three-year tables. 
• All new 2026 monetary and numeric cells are genuinely blank. 
• No amount was placed under the wrong year. 
• No zero, dash, N/A, underscore, formula, or placeholder was entered for 2026. 
• All transferred comparative amounts are regular and non-bold. 
• Bold formatting remains on account titles, row descriptions, headings, and subtotal or total labels where originally applicable. 
• Peso formatting was applied appropriately to blank 2026 numeric cells. 
• Statements of changes in equity and similar current-year movement schedules were rolled to 2026 without copying old 2025 monetary amounts. 
• All 2026 monetary cells in equity and similar movement schedules are blank. 
• No table, row, account, note, schedule, or disclosure was unintentionally deleted. 
• Narrative reporting periods and narrative amounts were rolled forward where applicable. 
• Historical dates and non-reporting-period numbers were not incorrectly changed. 
• Headers, footers, page breaks, borders, underlines, alignment, and table dimensions remain consistent with the source document. 
• The complete document was rendered or visually inspected to identify clipping, overlap, broken tables, incorrect page breaks, or missing content. 
14. Final instruction 
This is a financial-statement roll-forward task, not a rewriting, recalculation, or accounting-adjustment task. 
Do not use ambiguity as a reason to skip an entire table, note, or schedule. 
If an individual item remains genuinely ambiguous after applying all instructions: 
1. Preserve the item. 
2. Do not invent or transfer an amount. 
3. Identify the specific item, table, note, and page for review. 
4. Continue processing all other unambiguous items.  
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
  copilot: {
    label: "Copilot",
    urlPrefixes: ["https://copilot.microsoft.com/", "https://m365.cloud.microsoft/chat"],
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
