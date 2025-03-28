document.addEventListener("DOMContentLoaded", () => {
  // Obteniendo cookies
  const color = getCookie("color");

  // Cambiando color de letra si hay una cookie disponible para color
  if (color) {
    document.getElementById("color").value = color;

    const children = document.querySelectorAll("#main *");
    children.forEach((child) => {
      if (
        child.tagName.toLowerCase() !== "button" &&
        child.tagName.toLowerCase() !== "a"
      ) {
        child.style.color = color;
      }
    });
  }
});
