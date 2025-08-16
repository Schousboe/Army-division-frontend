document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  if (!user || !token) {
    alert("You must be logged in to view this page.");
    window.location.href = "index.html";
    return;
  }

  // vis info på siden
  document.getElementById("usernameDisplay").textContent = user.username || "Unknown";
  document.getElementById("emailDisplay").textContent = user.email || "Unknown";

  // logoutA
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "index.html";
  });
});
