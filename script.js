// DOM Elements
    const lightThemeBtn = document.getElementById('lightTheme');
    const darkThemeBtn = document.getElementById('darkTheme');
    const colorfulThemeBtn = document.getElementById('colorfulTheme');
    const notification = document.getElementById('notification');

    // Function to set active theme button
    function setActiveThemeButton(themeType) {
      // Remove active class from all buttons
      themeButtons.forEach(btn => {
        btn.classList.remove('active-theme');
      });

      // Add active class to the selected theme button
      switch(themeType) {
        case 'light':
          lightThemeBtn.classList.add('active-theme');
          break;
        case 'dark':
          darkThemeBtn.classList.add('active-theme');
          break;
        case 'colorful':
          colorfulThemeBtn.classList.add('active-theme');
          break;
      }
    }

    // Function to set theme
    function setTheme(themeType) {
      // Remove all theme classes
      document.body.classList.remove('light-theme', 'dark-theme', 'colorful-theme');
      
      // Add the selected theme class(unless it's light, which is the default).
      if (themeType !== 'light') {
        document.body.classList.add(`${themeType}-theme`);
      }
      
      // Show notification
      showNotification(`${themeType.charAt(0).toUpperCase() + themeType.slice(1)} theme applied!`);
      
      // Set active theme button
      setActiveThemeButton(themeType);
      
      // Save theme preference to local Storage
      localStorage.setItem('preferredTheme', themeType);
    }

    // Function to show notification
    function showNotification(message) {
      notification.textContent = message;
      notification.classList.add('show');
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        notification.classList.remove('show');
      }, 3000);
    }

    // Event listeners for theme buttons
    lightThemeBtn.addEventListener('click', () => setTheme('light'));
    darkThemeBtn.addEventListener('click', () => setTheme('dark'));
    colorfulThemeBtn.addEventListener('click', () => setTheme('colorful'));

    // Check if user has a saved theme preference
    document.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('preferredTheme');
      
      // Apply saved theme or default to light
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme('light');
      }
      
      // Add animation to cards when page loads
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.opacity = '1';
        }, 100 * (index + 1));
      });
    });
  