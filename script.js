// JavaScript to animate the opacity of the letter "Y" after a delay
window.addEventListener('load', () => {
    const circle = document.getElementById('circle');
    const letter = document.getElementById('letter');

    // Delay the start of the animation for both the circle and the letter "Y"
    setTimeout(() => {
        circle.style.animation = 'slideIn 3s ease-in-out forwards'; // Trigger sliding animation for the circle
        letter.style.animation = 'fadeIn 1s 2s forwards'; // Trigger fading in the letter "Y" after a delay
    }, 500); // Delay animation by 500ms after the page loads
});
