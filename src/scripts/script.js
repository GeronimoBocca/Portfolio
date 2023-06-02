const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLink = document.querySelectorAll('.nav__link'),
    contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message'),
    tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '' || contactSubject.value === '') {
        errorMessage.textContent = 'Write all the input fields'
    }
    else {
        emailjs.sendForm('service_sts2byc', 'template_l2icubr', '#contact-form', 'T_z1BHjWqGlkMkcaO').then(() => {
            errorMessage.classList.add('color-first');

            errorMessage.textContent = 'Message sent ✔️'

            setTimeout(() => {
                errorMessage.textContent = ''
            }, 5000);
        }, (error) => {
            alert('Something went wrong!', error)

        }
        )

        contactName.value = ''
        contactEmail.value = ''
        contactMessage.value = ''
        contactSubject.value = ''
    }
}

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}

function scrollUp() {
    const scrollup = document.getElementById('scroll-up')

    if (this.scrollY >= 350) scrollup.classList.add('show-scroll')
    else scrollup.classList.remove('show-scroll')
}

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

window.addEventListener('scroll', scrollHeader)

window.addEventListener('scroll', scrollUp)

contactForm.addEventListener('submit', sendEmail)

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        })

        target.classList.add('tab__active');
        tabs.forEach((tab) => {
            tab.classList.remove('tab__active')
        })

        tab.classList.add('tab__active')
    })
})













