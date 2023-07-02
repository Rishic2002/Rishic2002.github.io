(function () {
    const themeToggleBtn = document.querySelector(".theme-btn");
  
    // Function to detect system theme preference
    function detectSystemTheme() {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
      }
    }
  
    // Function to toggle between light and dark mode
    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
      document.body.classList.toggle("light-mode");
    }
  
    // Event listener for theme toggle button
    themeToggleBtn.addEventListener("click", toggleTheme);
  
    // Call the function to detect system theme preference on page load
    detectSystemTheme();
  
    // Event listeners for individual control buttons
    [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });
  
    // Event listener for system theme change
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", detectSystemTheme);
    }
  })();
  