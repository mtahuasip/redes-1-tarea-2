document.addEventListener("DOMContentLoaded", () => {
  // Obteniendo cookies
  const visitedLinksStr = getCookie("visited_links") || "";
  const visitedLinks = visitedLinksStr ? visitedLinksStr.split(",") : [];

  // Capturar clics en los enlaces y guardar los enlaces visitados en la cookie
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (event) {
      const href = this.getAttribute("href");
      let visitedLinks = getCookie("visited_links") || "";
      let visitedLinksArray = visitedLinks ? visitedLinks.split(",") : [];

      if (!visitedLinksArray.includes(href)) {
        visitedLinksArray.push(href);

        setCookie("expiration", getDate(1), 1);
        setCookie("visited_links", visitedLinksArray.join(","), 1);
      }
    });
  });

  // Cambiando el estado de visita de los links
  const linkRows = document.querySelectorAll(
    'section[aria-labelledby="enlaces"] tbody tr'
  );
  linkRows.forEach((row) => {
    const link = row.querySelector("a");
    const statusCell = row.querySelector("td:nth-child(2)");

    if (link) {
      const href = link.getAttribute("href");

      if (visitedLinks.includes(href)) {
        statusCell.textContent = "Visitado";
        statusCell.style.color = "green";
      } else {
        statusCell.textContent = "No Visitado";
        statusCell.style.color = "red";
      }
    }
  });
});
