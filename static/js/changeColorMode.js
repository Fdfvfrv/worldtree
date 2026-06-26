(function () {
  var saved = localStorage.getItem("color-scheme");
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("color-mode", saved);
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  var select = document.getElementById("theme-select");

  if (!select) return;
  // 初始化下拉框的选中状态
  select.value = localStorage.getItem("color-scheme") || "auto";
  // 监听切换事件
  select.addEventListener("change", function () {
    var value = select.value;

    var updateTheme = function () {
      if (value === "auto") {
        document.documentElement.removeAttribute("color-mode");
        localStorage.removeItem("color-scheme");
      } else {
        document.documentElement.setAttribute("color-mode", value);
        localStorage.setItem("color-scheme", value);
      }
    };

    // 视图过渡 API
    if (document.startViewTransition) {
      document.startViewTransition(function () {
        updateTheme();
      });
    } else {
      updateTheme();
    }
  });
});
