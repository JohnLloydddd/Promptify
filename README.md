# Promptify

A browser extension for saving reusable prompts and inserting them into [Claude.ai](https://claude.ai) or [ChatGPT](https://chatgpt.com) with one click.

## Features

- **One-click insert** — click a saved prompt to paste it directly into the chat box on Claude.ai or ChatGPT. On any other page, it's copied to your clipboard instead.
- **Right-click paste** — insert a prompt from the page's context menu without opening the popup.
- **Search** — quickly filter prompts by name or text (press `/` to focus search).
- **Favorites** — star your most-used prompts to pin them to the top of the list.
- **Drag-and-drop reordering** — rearrange prompts in the main list or the manage view.
- **Manage prompts** — add, edit, delete (with undo), and reorder prompts from a dedicated view.
- **Backup & restore** — export all prompts to a JSON file and import them back later or on another machine.

## Installation

1. Open `chrome://extensions` (or your Chromium browser's equivalent).
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this project folder.

## Project structure

| File | Purpose |
| --- | --- |
| `manifest.json` | Extension manifest (Manifest V3) |
| `popup.html` / `popup.js` | Popup UI: prompt list, search, manage view, backup/restore |
| `paste-logic.js` | Shared logic for inserting text into the chat box on supported sites |
| `background.js` | Service worker powering the right-click context menu |

## Supported sites

- claude.ai
- chatgpt.com / chat.openai.com
