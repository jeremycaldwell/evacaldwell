document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const darkModeToggle = document.querySelector('#dark-mode-toggle');

  if (!body || !darkModeToggle) return; // safety check

  // Get status of dark mode from localStorage
  let darkMode = localStorage.getItem('darkMode');

  // Enable dark mode if user prefers dark system theme
  if (!darkMode && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
  }

  // Enable Dark Mode
  function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }

  // Disable Dark Mode
  function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }

  // Apply dark mode if it was enabled in localStorage
  if (darkMode === 'enabled') {
    enableDarkMode();
  }

  // Toggle dark mode on button click
  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});
