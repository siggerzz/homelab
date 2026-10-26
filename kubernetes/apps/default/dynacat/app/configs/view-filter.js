(() => {
  const views = ["all", "productivity", "social"];
  const key = "dashboard-view";

  let stored = null;
  try {
    stored = localStorage.getItem(key);
  } catch {}

  const fromUrl = new URLSearchParams(location.search).get("view");
  document.documentElement.dataset.view =
    [fromUrl, stored].find((v) => views.includes(v)) ?? "productivity";

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view-button]");
    if (!button) return;
    document.documentElement.dataset.view = button.dataset.viewButton;
    try {
      localStorage.setItem(key, button.dataset.viewButton);
    } catch {}
  });
})();
