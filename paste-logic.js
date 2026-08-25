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

  const previousSelection = window.getSelection();
  const previousEditorRange =
    previousSelection?.rangeCount > 0 &&
    el.contains(previousSelection.getRangeAt(0).commonAncestorContainer)
      ? previousSelection.getRangeAt(0).cloneRange()
      : null;

  el.focus();

  if (el.tagName === "TEXTAREA") {
    const currentText = el.value;
    const start = el.selectionEnd ?? currentText.length;
    const nextText =
      currentText.slice(0, start) + resolvedText + currentText.slice(start);
    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      "value"
    ).set;
    setter.call(el, nextText);
    el.setSelectionRange(start + resolvedText.length, start + resolvedText.length);
    el.dispatchEvent(new Event("input", { bubbles: true }));
  } else {
    const selection = window.getSelection();
    const range = document.createRange();
    if (previousEditorRange) {
      previousEditorRange.collapse(false);
      selection.removeAllRanges();
      selection.addRange(previousEditorRange);
    } else {
      range.selectNodeContents(el);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }

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
