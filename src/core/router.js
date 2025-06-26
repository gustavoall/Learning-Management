import { routes } from "../routes/routes.js";

async function loadContent() {
  let path = window.location.pathname;

  const basePath = "/";
  if (path.startsWith(basePath)) {
    path = path.slice(basePath.length - 1);
  }

  const htmlPath = routes[path] || routes["/"];

  try {
    const html = await fetch(htmlPath).then(res => {
      if (!res.ok) throw new Error("Página não encontrada");
      return res.text();
    });
    document.getElementById("app").innerHTML = html;
  } catch (err) {
    document.getElementById("app").innerHTML = `<h1>Erro: ${err.message}</h1>`;
    console.error("Erro ao carregar página:", err);
  }
}

window.addEventListener("popstate", loadContent);

document.addEventListener("click", e => {
  const link = e.target.closest("a[data-link]");
  if (link) {
    e.preventDefault();
    history.pushState(null, "", link.getAttribute("href"));
    loadContent();
  }
});

loadContent();  

export default loadContent; 