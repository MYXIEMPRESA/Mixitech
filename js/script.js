

window.addEventListener('scroll', function () {
    const animatedText = document.querySelector('.animated-text');
    const nosotrosSection = document.querySelector('.nosotros');
    const textBottom = animatedText.getBoundingClientRect().bottom;
    const nosotrosTop = nosotrosSection.getBoundingClientRect().top;

    if (textBottom <= nosotrosTop) {
        animatedText.classList.remove('show');
    } else {
        animatedText.classList.add('show');
    }
});