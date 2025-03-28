// Función para establecer cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para obtener cookies por nombre
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Función para crear fecha de expiración
function getDate(days = 1) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const year = expirationDate.getFullYear();
  const month = String(expirationDate.getMonth() + 1).padStart(2, "0");
  const day = String(expirationDate.getDate()).padStart(2, "0");
  const hours = String(expirationDate.getHours()).padStart(2, "0");
  const minutes = String(expirationDate.getMinutes()).padStart(2, "0");
  const seconds = String(expirationDate.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
