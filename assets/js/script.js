window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');

    if (loadingScreen) {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.pointerEvents = "none";
    }
});