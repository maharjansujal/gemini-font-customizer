const STYLE_ID = "gemini-custom-typography-styles";

// Generate dynamic secure URLs for your local font files
const aptosUrl = chrome.runtime.getURL("fonts/aptos.ttf");
const mapleMonoUrl = chrome.runtime.getURL("fonts/maple-mono.ttf");

const CSS_RULES = `
  @font-face {
    font-family: 'AptosLocal';
    src: url('${aptosUrl}') format('truetype');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'MapleMonoLocal';
    src: url('${mapleMonoUrl}') format('truetype');
    font-weight: 300 700;
    font-style: normal;
    font-display: swap;
  }

  message-content,
  .message-content,
  .query-text,
  .model-response-text,
  user-query, div, p {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.75 !important;
    letter-spacing: -0.12px !important;
  }

  .model-response-text p,
  message-content p,
  .message-content p {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 16px !important;
    line-height: 1.75 !important;
    font-weight: 400 !important;
    letter-spacing: -0.12px !important;
    margin-top: 0.65em !important;
    margin-bottom: 0.85em !important;
  }

  .model-response-text h1,
  message-content h1,
  h1 {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 30px !important;
    font-weight: 750 !important;
    line-height: 1.2 !important;
    letter-spacing: -0.9px !important;
    margin-top: 1.35em !important;
    margin-bottom: 0.55em !important;
  }

  .model-response-text h2,
  message-content h2,
  h2 {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 25px !important;
    font-weight: 700 !important;
    line-height: 1.28 !important;
    letter-spacing: -0.6px !important;
    margin-top: 1.4em !important;
    margin-bottom: 0.5em !important;
  }

  .model-response-text h3,
  message-content h3,
  h3 {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 21px !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
    letter-spacing: -0.35px !important;
    margin-top: 1.3em !important;
    margin-bottom: 0.45em !important;
  }

  .model-response-text h4,
  message-content h4,
  h4 {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 18px !important;
    font-weight: 700 !important;
    line-height: 1.4 !important;
    letter-spacing: -0.2px !important;
    margin-top: 1.2em !important;
    margin-bottom: 0.4em !important;
  }

  .model-response-text h5,
  message-content h5,
  h5 {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    line-height: 1.45 !important;
    letter-spacing: 0 !important;
    margin-top: 1.1em !important;
    margin-bottom: 0.35em !important;
  }

  .model-response-text strong,
  message-content strong,
  .message-content strong,
  b {
    font-weight: 700 !important;
  }

  .model-response-text em,
  message-content em {
    font-style: italic !important;
  }

  .model-response-text ul,
  .model-response-text ol,
  message-content ul,
  message-content ol,
  .message-content ul,
  .message-content ol {
    padding-left: 1.5rem !important;
    margin-top: 0.65em !important;
    margin-bottom: 0.9em !important;
    list-style-position: outside !important;
  }

  .model-response-text ul,
  message-content ul,
  .message-content ul {
    list-style-type: disc !important;
  }

  .model-response-text ol,
  message-content ol,
  .message-content ol {
    list-style-type: decimal !important;
  }

  /* List items (removed conflicting padding-left) */
  .model-response-text li,
  message-content li,
  .message-content li {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.7 !important;
    letter-spacing: -0.12px !important;
    margin-bottom: 0.45em !important;
    list-style: none !important;
  }

  .model-response-text li > p,
  message-content li > p,
  .message-content li > p {
    margin-top: 0 !important;
    margin-bottom: 0.35em !important;
    line-height: 1.7 !important;
  }

  .model-response-text li::marker,
  message-content li::marker,
  .message-content li::marker {
    font-size: 0.9em !important;
    font-weight: 600 !important;
  }

  .model-response-text li > ul,
  .model-response-text li > ol,
  message-content li > ul,
  message-content li > ol {
    margin-top: 0.4em !important;
    margin-bottom: 0.5em !important;
  }

  .model-response-text blockquote,
  message-content blockquote {
    font-size: 15.5px !important;
    line-height: 1.7 !important;
    font-style: italic !important;
    border-left: 3px solid var(--gem-sys-color-primary, #8b8b8b) !important;
    padding-left: 16px !important;
    margin: 1em 0 !important;
    opacity: 0.9 !important;
  }

  code-block,
  pre,
  code,
  .code-container,
  .code-block {
    font-family: 'MapleMonoLocal', monospace !important;
    font-size: 13.5px !important;
    line-height: 1.7 !important;
    letter-spacing: -0.2px !important;
  }

  .model-response-text :not(pre) > code,
  message-content :not(pre) > code {
    font-family: 'MapleMonoLocal', monospace !important;
    font-size: 0.88em !important;
    padding: 2px 5px !important;
    border-radius: 4px !important;
    vertical-align: baseline !important;
  }

  table,
  th,
  td {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 14.5px !important;
    line-height: 1.55 !important;
  }

  th {
    font-weight: 700 !important;
  }

  td {
    font-weight: 400 !important;
  }

  .model-response-text,
  message-content {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
  }

  .follow-up-text.gds-headline-s {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 21px !important;
    font-weight: 500 !important;
    line-height: 1.55 !important;
    letter-spacing: -0.15px !important;
  }

  .elicitations-message.gds-headline-s {
    font-family: 'AptosLocal', system-ui, sans-serif !important;
    font-size: 19px !important;
    font-weight: 650 !important;
    line-height: 1.45 !important;
    letter-spacing: -0.25px !important;
    margin-bottom: 0.5em !important;
  }
`;

let stylesEnabled = false;
let styleObserver = null;

function enableCustomStyles() {
  stylesEnabled = true;

  let styleEl = document.getElementById(STYLE_ID);

  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = STYLE_ID;
  }

  styleEl.textContent = CSS_RULES;

  const target = document.head || document.documentElement;

  if (styleEl.parentNode !== target) {
    target.appendChild(styleEl);
  }

  if (!styleObserver) {
    styleObserver = new MutationObserver(() => {
      if (!stylesEnabled) return;

      const existingStyle = document.getElementById(STYLE_ID);

      if (!existingStyle) {
        const newStyle = document.createElement("style");
        newStyle.id = STYLE_ID;
        newStyle.textContent = CSS_RULES;
        (document.head || document.documentElement).appendChild(newStyle);
      }
    });

    styleObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
}

function disableCustomStyles() {
  stylesEnabled = false;

  const styleEl = document.getElementById(STYLE_ID);
  if (styleEl) styleEl.remove();
}

chrome.storage.local.get(["enabled"], (result) => {
  if (result.enabled !== false) {
    enableCustomStyles();
  }
});

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "toggle") {
    if (request.enabled) {
      enableCustomStyles();
    } else {
      disableCustomStyles();
    }
  }
});
