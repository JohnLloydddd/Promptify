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
    "copilot.microsoft.com": [
      "#userInput",
      'textarea[aria-label*="Ask" i]',
      'div[contenteditable="true"]',
      "textarea",
    ],
    "m365.cloud.microsoft": [
      "#m365-chat-editor-target-element",
      '[contenteditable="true"][aria-label*="Copilot" i]',
      '[contenteditable="true"]',
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

    // Hold Shift around the paste, like Ctrl+Shift+V: ProseMirror-based
    // editors (ChatGPT) then treat it as a plain-text paste instead of
    // turning long text into a "Pasted text" file attachment.
    const shiftEvent = (type) => {
      const event = new KeyboardEvent(type, {
        key: "Shift",
        code: "ShiftLeft",
        shiftKey: type === "keydown",
        bubbles: true,
        cancelable: true,
      });
      // keyCode can't be set via the constructor; ProseMirror checks it.
      Object.defineProperty(event, "keyCode", { get: () => 16 });
      el.dispatchEvent(event);
    };

    const dataTransfer = new DataTransfer();
    dataTransfer.setData("text/plain", resolvedText);
    shiftEvent("keydown");
    el.dispatchEvent(
      new ClipboardEvent("paste", {
        clipboardData: dataTransfer,
        bubbles: true,
        cancelable: true,
      })
    );
    shiftEvent("keyup");
  }

  showConfidentialityReminder();
  return { ok: true };

  // Defined inside pasteIntoChat because executeScript serializes only this
  // function, so anything it calls has to travel with it.
  function showConfidentialityReminder() {
    const REMINDER_ID = "promptify-confidentiality-reminder";
    document.getElementById(REMINDER_ID)?.remove();

    const box = document.createElement("div");
    box.id = REMINDER_ID;
    box.setAttribute("role", "alert");
    box.style.cssText = [
      "position:fixed",
      "top:16px",
      "right:16px",
      "z-index:2147483647",
      "max-width:340px",
      "padding:12px 36px 12px 14px",
      "background:#fffbeb",
      "color:#78350f",
      "border:1px solid #f59e0b",
      "border-left:4px solid #f59e0b",
      "border-radius:8px",
      "box-shadow:0 4px 16px rgba(0,0,0,0.15)",
      "font:13px/1.45 system-ui,-apple-system,Segoe UI,sans-serif",
      "transition:opacity 0.3s",
    ].join(";");

    const title = document.createElement("div");
    title.textContent = "⚠️ Before you upload any files";
    title.style.cssText = "font-weight:600;margin-bottom:4px";

    const body = document.createElement("div");
    body.textContent =
      "Remove confidential data from files before uploading them, " +
      "e.g. names, client details, credentials, and financial or internal-only information.";

    const close = document.createElement("button");
    close.type = "button";
    close.textContent = "×";
    close.setAttribute("aria-label", "Dismiss reminder");
    close.style.cssText =
      "position:absolute;top:6px;right:8px;border:none;background:none;" +
      "color:#78350f;font-size:18px;line-height:1;cursor:pointer;padding:2px 4px";

    const dismiss = () => {
      box.style.opacity = "0";
      setTimeout(() => box.remove(), 300);
    };
    close.addEventListener("click", dismiss);

    box.append(title, body, close);
    document.body.appendChild(box);

    let timer = setTimeout(dismiss, 8000);
    box.addEventListener("mouseenter", () => clearTimeout(timer));
    box.addEventListener("mouseleave", () => {
      timer = setTimeout(dismiss, 4000);
    });
  }
}
