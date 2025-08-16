const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  try {
    const res = await fetch("https://army-division-backend.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    alert(data.message || "Registration attempt finished");

    if (res.ok) {
      window.location.href = "index.html"; // redirect til login
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again later.");
  }
});
