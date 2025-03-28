document.addEventListener("DOMContentLoaded", () => {
  // Obteniendo cookies
  let font = getCookie("font");

  // Cambiando letra si hay una cookie disponible para color
  if (font) {
    font = font.replace(/^"|"$/g, "").trim();

    document.getElementById("main").style.fontFamily = font;

    const radios = document.querySelectorAll('input[name="font"]');
    radios.forEach((radio) => {
      if (radio.value === font) {
        radio.checked = true;
      }
    });
  } else {
  }
});
