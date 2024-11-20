<!-- Toggle Accordion Attributes for Accessibility -->
// Select all accordion components
const accordions = document.querySelectorAll('.accordion_component');

accordions.forEach((accordion) => {
  const button = accordion.querySelector('.accordion_top');
  const content = accordion.querySelector('.accordion_bottom');

  // Add event listener to the button
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Update ARIA attributes
    button.setAttribute('aria-expanded', !isExpanded);
    content.setAttribute('aria-hidden', isExpanded);

  });

  // Add keyboard support
  button.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      button.click(); // Trigger the click event
    }
  });
});
