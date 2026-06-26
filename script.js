console.log("script loaded");

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");

  const form = document.getElementById("newsletter-form");
  const status = document.getElementById("status");

  console.log("form:", form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("submit triggered");

    status.textContent = "Submitting...";

    try {
      const response = await fetch("YOUR_SCRIPT_URL_HERE", {
        method: "POST",
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value
        })
      });

      console.log("response received", response);

      const data = await response.json();
      console.log("parsed json", data);

      status.textContent =
        data.status === "success"
          ? "Thanks for signing up!"
          : "Something went wrong.";
    } catch (err) {
      console.error(err);
      status.textContent = "Error (check console)";
    }

    form.reset();
  });
});
