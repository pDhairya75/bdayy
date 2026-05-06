document.addEventListener('DOMContentLoaded', () => {
    const screenQuestion = document.getElementById('screen-question');
    const screenSuccess = document.getElementById('screen-success');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const heartContainer = document.getElementById('heart-container');

    // Create floating hearts in background
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = Math.random();
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Continuously create hearts
    setInterval(createHeart, 300);

    // Transition to success screen
    btnYes.addEventListener('click', () => {
        screenQuestion.style.opacity = '0';
        screenQuestion.style.transform = 'scale(0.9) translateY(-20px)';
        
        setTimeout(() => {
            screenQuestion.classList.remove('active');
            screenQuestion.classList.add('hidden');
            screenSuccess.classList.remove('hidden');
            screenSuccess.classList.add('active');
            
            for(let i = 0; i < 20; i++) {
                setTimeout(createHeart, i * 50);
            }
        }, 400);
    });

    // "No" button logic
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
        // PC Behavior: Hide button on hover
        btnNo.addEventListener('mouseover', () => {
            btnNo.style.opacity = '0';
            btnNo.style.pointerEvents = 'none';
        });
    } else {
        // Mobile Behavior: Show alert on click
        btnNo.addEventListener('click', (e) => {
            e.preventDefault();
            alert("This option is not available! 😜 Hint: Try the 'Yes' button! ✨");
        });
    }

    // Fallback prevent click for PC
    btnNo.addEventListener('click', (e) => {
        if (!isTouchDevice) {
            e.preventDefault();
        }
    });
});
