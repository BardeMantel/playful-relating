// Navigation-Dropdown on Narrow Screen
const navToggle = document.getElementById("nav-dropdown-toggle");
const navDropdown = document.getElementById("nav-dropdown");
const backFromAbout = document.getElementById("back-from-about");

// About-Dropdown
const aboutToggle = document.getElementById("about-toggle");
const aboutDropdown = document.getElementById("about-dropdown");

// Navigation-Dropdown Toggle
navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navDropdown.classList.toggle("open");
  
  // ensures that About-Dropdown is closed when Navigation-Toggle is Clicked
  aboutDropdown.classList.remove("open");
  }
);

// Close Navigation-Dropdown (and About-Dropdown) on outside click
document.addEventListener("click", () => {
  navDropdown.classList.remove("open");
  aboutDropdown.classList.remove("open");
});

// About-Dropdown Toggle
aboutToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  // closes Navigation-Dropdown when About-Dropdown is opened
  navDropdown.classList.remove("open");

  aboutDropdown.classList.toggle("open");
});

// closes About-Dropdown and opens Navigation-Dropdown
backFromAbout.addEventListener("click", (e) => {
  e.stopPropagation();
  aboutDropdown.classList.remove("open");
  navDropdown.classList.add("open");
});


// Header fading when scrolling down
const header = document.querySelector("header");        
  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      header.classList.add("faded");
    } else {
      header.classList.remove("faded");
    }
  });

// Randomize who appears on top on About-Us Page
const randomizationContainer = document.getElementById("randomization-container");
const boxes = Array.from(randomizationContainer.children);

for (let i = boxes.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
}

boxes.forEach(box => randomizationContainer.appendChild(box));
