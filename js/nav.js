document.addEventListener('DOMContentLoaded', () => {
  // Select elements
  const CSbody = document.querySelector('body');
  const CSnavbarMenu = document.querySelector('#cs-navigation');
  const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

  // Only proceed if elements exist
  if (CSnavbarMenu && CShamburgerMenu && CSbody) {

    // Hamburger click toggles classes and aria-expanded
    CShamburgerMenu.addEventListener('click', () => {
      CShamburgerMenu.classList.toggle('cs-active');
      CSnavbarMenu.classList.toggle('cs-active');
      CSbody.classList.toggle('cs-open');

      toggleAriaExpanded();
    });

    // Function to toggle aria-expanded on the main UL
    function toggleAriaExpanded() {
      const csUL = document.querySelector('#cs-expanded');
      if (!csUL) return; // safety check

      const isExpanded = csUL.getAttribute('aria-expanded') === 'true';
      csUL.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    }

    // Dropdowns inside mobile nav
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    dropDowns.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('cs-active');
      });
    });

  }
});
