const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

const form = document.getElementById("newsletter-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value
  };

  const response = await fetch("https://script.google.com/macros/s/AKfycbw5sjw1N2bM6oyiayTpTry0JvmSPMx_MEtwVYez5KxeulDlIhX4-eI8i5571I91IPqI/exec", {
    method: "POST",
    body: JSON.stringify(formData)
  });

  const result = await response.json();

  document.getElementById("status").textContent =
    result.status === "success"
      ? "Thanks for signing up!"
      : "Something went wrong.";
  
  form.reset();
});
