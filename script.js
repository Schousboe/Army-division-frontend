const backendURL = "https://army-division-backend.onrender.com/";

document.querySelector(".login-container").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const res = await fetch(`${backendURL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  console.log(data);
});
