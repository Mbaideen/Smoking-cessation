const langSwitch = document.getElementById('langSwitch');
const elements = document.querySelectorAll('[data-lang-en]');

langSwitch.addEventListener('click', () => {
    const isEnglish = langSwitch.textContent === 'عربي';
    elements.forEach(el => {
        if (isEnglish) {
            el.textContent = el.getAttribute('data-lang-ar');
            langSwitch.textContent = 'English';
            document.body.style.direction = 'rtl';  // Switch to RTL for Arabic
        } else {
            el.textContent = el.getAttribute('data-lang-en');
            langSwitch.textContent = 'عربي';
            document.body.style.direction = 'ltr';  // Switch to LTR for English
        }
    });
});
