document.addEventListener("DOMContentLoaded", () => {
  // Obteniendo cookies
  const expiration = getCookie("expiration");

  // Verificar si esta disponible la cookie
  let targetDate;
  if (expiration) {
    let date = expiration.replace(/^"|"$/g, "");
    date = new Date(date);

    targetDate = date.getTime();
  } else {
    document.getElementById("countdown").innerHTML = "No establecida";
    return;
  }

  // Función para actualizar el contador de expiración
  function startCountdown() {
    const countdownTimer = setInterval(function () {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;

      if (difference < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Tiempo expirado";
      }
    }, 1000);
  }

  startCountdown();
});
