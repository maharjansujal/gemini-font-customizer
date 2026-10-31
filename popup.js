const toggle = document.getElementById("toggle");

chrome.storage.local.get(["enabled"], (result) => {
  toggle.checked = result.enabled !== false;
});

toggle.addEventListener("change", async () => {
  const isEnabled = toggle.checked;

  chrome.storage.local.set({ enabled: isEnabled });

  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (!tab?.id) return;

    await chrome.tabs.sendMessage(tab.id, {
      action: "toggle",
      enabled: isEnabled,
    });
  } catch (error) {
    console.warn("Could not reach content script:", error.message);
  }
});
