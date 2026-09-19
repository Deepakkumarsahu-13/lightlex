// --- DRDO Modal Toggle Logic ---

function openDrdoModal(tab) {
    const modal = document.getElementById('drdo-modal');

    modal.classList.remove(
        'opacity-0',
        'invisible',
        'pointer-events-none'
    );

    const content = modal.querySelector('.modal-content');

    content.classList.remove('scale-95');
    content.classList.add('scale-100');

    document.body.style.overflow = 'hidden';

    if (tab) {
        switchModalTab(tab);
    }
}


function closeDrdoModal() {
    const modal = document.getElementById('drdo-modal');
    const content = modal.querySelector('.modal-content');

    content.classList.remove('scale-100');
    content.classList.add('scale-95');

    modal.classList.add(
        'opacity-0',
        'invisible',
        'pointer-events-none'
    );

    document.body.style.overflow = '';
}


function switchModalTab(tabName) {

    const certBtn = document.getElementById('tab-btn-certificate');
    const demoBtn = document.getElementById('tab-btn-demo');

    const certContent =
        document.getElementById('tab-content-certificate');

    const demoContent =
        document.getElementById('tab-content-demo');


    if (tabName === 'certificate') {

        certBtn.className =
            "pb-3 border-b-2 border-amber-400 text-amber-300 font-semibold flex items-center gap-2";

        demoBtn.className =
            "pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center gap-2";

        certContent.classList.remove('hidden');
        demoContent.classList.add('hidden');

    } else {

        demoBtn.className =
            "pb-3 border-b-2 border-brand-400 text-brand-300 font-semibold flex items-center gap-2";

        certBtn.className =
            "pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center gap-2";

        demoContent.classList.remove('hidden');
        certContent.classList.add('hidden');
    }
}


// Close DRDO modal using Escape key
document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
        closeDrdoModal();
    }

});



// --- Mobile Menu Toggle Logic ---

const mobileMenuBtn =
    document.getElementById('mobile-menu-btn');

const closeMenuBtn =
    document.getElementById('close-menu-btn');

const mobileMenu =
    document.getElementById('mobile-menu');

const mobileNavLinks =
    document.querySelectorAll('.mobile-nav-link');


function toggleMobileMenu(show) {

    if (show) {

        mobileMenu.classList.remove('hidden');

        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
        }, 10);

    } else {

        mobileMenu.classList.add('opacity-0');

        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
}


// Menu button
mobileMenuBtn.addEventListener('click', () => {

    const isOpen =
        !mobileMenu.classList.contains('hidden');

    toggleMobileMenu(!isOpen);

});


// Close button
closeMenuBtn.addEventListener('click', () => {
    toggleMobileMenu(false);
});


// Close menu after clicking navigation link
mobileNavLinks.forEach(link => {

    link.addEventListener('click', () => {
        toggleMobileMenu(false);
    });

});


// Close when clicking dark overlay
mobileMenu.addEventListener('click', (e) => {

    if (e.target === mobileMenu) {
        toggleMobileMenu(false);
    }

});


// Close mobile menu using Escape
document.addEventListener('keydown', (e) => {

    if (
        e.key === 'Escape' &&
        !mobileMenu.classList.contains('hidden')
    ) {
        toggleMobileMenu(false);
    }

});



// --- Contact Form Submission Handler ---

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    try {
        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString()
        });

        alert('Message sent successfully!');
        contactForm.reset();

    } catch (error) {
        alert('Failed to send message. Please try again.');
    }
});



// --- Scrollspy Highlight Active Navigation Link ---

const sections =
    document.querySelectorAll('section');

const navLinks =
    document.querySelectorAll('.nav-link');


window.addEventListener('scroll', () => {

    let current = '';


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;


        if (
            pageYOffset >=
            (sectionTop - 220)
        ) {

            current =
                section.getAttribute('id');

        }

    });


    navLinks.forEach(link => {

        link.classList.remove('active');


        if (
            link.getAttribute('href').substring(1)
            === current
        ) {

            link.classList.add('active');

        }

    });

});