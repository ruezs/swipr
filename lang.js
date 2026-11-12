// Shows the Chinese or English half of the page: `?lang=en|zh` first, then the browser language.
(function () {
  var param = new URLSearchParams(location.search).get("lang");
  var language = param || (navigator.language || "").toLowerCase();
  var chosen = language.indexOf("zh") === 0 ? "zh-Hans" : "en";
  document.documentElement.classList.add("js");
  document.documentElement.lang = chosen;
  document.querySelectorAll("article[lang]").forEach(function (section) {
    section.classList.toggle("hidden", section.lang !== chosen);
  });
  document.querySelectorAll("nav.lang a").forEach(function (link) {
    link.setAttribute("aria-current", link.dataset.lang === chosen ? "true" : "false");
  });
})();
