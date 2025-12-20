const API_BASE = "https://portfolio-backend-c6ui.onrender.com";

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value
  };

  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Failed");

    alert("Message sent successfully!");
    e.target.reset();
  } catch {
    alert("Error sending message");
  }
});
