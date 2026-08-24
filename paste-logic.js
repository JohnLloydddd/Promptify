// Shared by popup.js (executeScript from the popup) and background.js
// (executeScript from the right-click context menu). Loaded as a classic
// script in both, so `pasteIntoChat` is just a plain global function.
function pasteIntoChat(text) {
  const selectorsByHost = {
    "claude.ai": [
      'div[contenteditable="true"].ProseMirror',
      'div[contenteditable="true"][aria-label*="message" i]',
      'div[contenteditable="true"]',
      "textarea",
    ],
    "chatgpt.com": [
      "#prompt-textarea",
      'div[contenteditable="true"]',
      "textarea#prompt-textarea",
      "textarea",
    ],
    "chat.openai.com": [
      "#prompt-textarea",
      'div[contenteditable="true"]',
      "textarea#prompt-textarea",
      "textarea",
    ],
  };
  const selectors = selectorsByHost[location.hostname];
  if (!selectors) return { ok: false };

  let el = null;
  for (const sel of selectors) {
    el = document.querySelector(sel);
    if (el) break;
  }
  if (!el) return { ok: false };

  // Resolve variables using this page's own state, before our own
  // selection/focus handling below overwrites the user's selection.
  const selectedText = window.getSelection()?.toString() || "";
  const now = new Date();
  const resolvedText = text
    .replace(/\{\{\s*selection\s*\}\}/gi, selectedText)
    .replace(/\{\{\s*date\s*\}\}/gi, now.toLocaleDateString())
    .replace(/\{\{\s*time\s*\}\}/gi, now.toLocaleTimeString());

  el.focus();

  if (el.tagName === "TEXTAREA") {
    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      "value"
    ).set;
    setter.call(el, resolvedText);
    el.dispatchEvent(new Event("input", { bubbles: true }));
  } else {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);

    const dataTransfer = new DataTransfer();
    dataTransfer.setData("text/plain", resolvedText);
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
