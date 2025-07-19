
const adminPassword = "admin123";

function login() {
  const pwd = document.getElementById("password").value;
  if (pwd === adminPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Parolă greșită!");
  }
}

function exportToExcel() {
  alert("Exportul va fi implementat.");
}
