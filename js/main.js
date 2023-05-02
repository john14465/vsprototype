// Mobile Nav Function
const mobileBTN = document.querySelector('.mobile-btn');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('#navBox');

mobileBTN.addEventListener('click', () => {
    const isOpened = mobileBTN.getAttribute('aria-expanded');
    if(isOpened === 'false') {
        mobileBTN.setAttribute('aria-expanded', 'true');
        nav.setAttribute('aria-expanded', 'true');
    } else {
        mobileBTN.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-expanded', 'false');
    };
})

navLinks.addEventListener('click', () => {
    const isOpened = mobileBTN.getAttribute('aria-expanded');
    if(isOpened === 'false') {
        mobileBTN.setAttribute('aria-expanded', 'true');
        nav.setAttribute('aria-expanded', 'true');
    } else {
        mobileBTN.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-expanded', 'false');
    };
})