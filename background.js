importScripts("paste-logic.js");

const ROOT_ID = "promptify-root";

async function rebuildMenu() {
  await chrome.contextMenus.removeAll();

  const { prompts } = await chrome.storage.local.get("prompts");
  if (!prompts || !prompts.length) return;

  chrome.contextMenus.create({
    id: ROOT_ID,
    title: "Promptify",
    contexts: ["page", "selection", "editable"],
  });

  prompts.forEach((prompt, i) => {
    chrome.contextMenus.create({
      id: `promptify-${i}`,
      parentId: ROOT_ID,
      title: prompt.name || "Untitled",
      contexts: ["page", "selection", "editable"],
      documentUrlPatterns: [
        "https://claude.ai/*",
        "https://chatgpt.com/*",
        "https://chat.openai.com/*",
      ],
    });
  });
}

chrome.runtime.onInstalled.addListener(rebuildMenu);
chrome.runtime.onStartup.addListener(rebuildMenu);

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.prompts) rebuildMenu();
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (!tab?.id || info.menuItemId === ROOT_ID) return;
  const index = Number(String(info.menuItemId).replace("promptify-", ""));
  if (Number.isNaN(index)) return;

  const { prompts } = await chrome.storage.local.get("prompts");
  const prompt = prompts?.[index];
  if (!prompt) return;

  const [result] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: pasteIntoChat,
    args: [prompt.text],
  });

  chrome.action.setBadgeText({ tabId: tab.id, text: result.result?.ok ? "✓" : "!" });
  chrome.action.setBadgeBackgroundColor({
    tabId: tab.id,
    color: result.result?.ok ? "#0d9488" : "#dc2626",
  });
  setTimeout(() => chrome.action.setBadgeText({ tabId: tab.id, text: "" }), 1500);
});
