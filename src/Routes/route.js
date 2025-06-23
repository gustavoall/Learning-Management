const routes = {
  "/lesson": "/src/views/lesson.html",
};

async function loadContent() {
  const path = window.location.pathname;
  const htmlPath = routes[path] || routes["/"];
  const html = await fetch(htmlPath).then(res => res.text());
  document.getElementById("app").innerHTML = html;
}

window.addEventListener("popstate", loadContent);

document.addEventListener("click", e => {
  const link = e.target.closest("a[data-link]");
  if (link) {
    e.preventDefault();
    history.pushState(null, "", link.href);
    loadContent();
  }
});

loadContent();