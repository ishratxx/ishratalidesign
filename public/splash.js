document.addEventListener('astro:page-load', () => {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
      setTimeout(() => {
        splashScreen.classList.add('fade-out');
        setTimeout(() => {
          splashScreen.remove();
        }, 1000);
      }, 1500);
    }
  });