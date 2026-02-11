document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 100
    });

    // Initialize Lucide Icons
    lucide.createIcons();

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle (Simplified)
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
            if (navList.style.display === 'flex') {
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '100%';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.background = 'rgba(10, 10, 12, 0.95)';
                navList.style.padding = '2rem';
                navList.style.textAlign = 'center';
            }
        });
    }

    // Form Submission (Demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent (this is a demo).');
            contactForm.reset();
        });
    }

    // Certificate Modal Functionality
    const certModal = document.getElementById('cert-modal');
    const certModalTrigger = document.getElementById('cert-modal-trigger');
    const heroCertTrigger = document.getElementById('hero-cert-trigger');
    const certModalClose = document.getElementById('cert-modal-close');
    let previousScrollPosition = 0;

    // Open modal function
    function openCertModal(e) {
        e.preventDefault();
        // Save current scroll position
        previousScrollPosition = window.scrollY;
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        // Re-initialize Lucide icons for the modal
        setTimeout(() => lucide.createIcons(), 100);
    }

    // Close modal function
    function closeCertModal() {
        certModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
        // Return to previous scroll position
        setTimeout(() => {
            window.scrollTo({ top: previousScrollPosition, behavior: 'smooth' });
        }, 300);
    }

    // Event listeners for opening modal
    if (certModalTrigger) {
        certModalTrigger.addEventListener('click', openCertModal);
    }
    if (heroCertTrigger) {
        heroCertTrigger.addEventListener('click', openCertModal);
    }

    // Event listener for closing modal
    if (certModalClose) {
        certModalClose.addEventListener('click', closeCertModal);
    }

    // Close modal when clicking outside the content
    if (certModal) {
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                closeCertModal();
            }
        });
    }

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certModal.classList.contains('active')) {
            closeCertModal();
        }
    });

    // Projects Modal Functionality
    const projectsModal = document.getElementById('projects-modal');
    const projectsModalTrigger = document.getElementById('projects-modal-trigger');
    const projectsModalClose = document.getElementById('projects-modal-close');
    let projectsPreviousScrollPosition = 0;

    // Open projects modal function
    function openProjectsModal(e) {
        e.preventDefault();
        projectsPreviousScrollPosition = window.scrollY;
        projectsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => lucide.createIcons(), 100);
    }

    // Close projects modal function
    function closeProjectsModal() {
        projectsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            window.scrollTo({ top: projectsPreviousScrollPosition, behavior: 'smooth' });
        }, 300);
    }

    // Event listeners for projects modal
    if (projectsModalTrigger) {
        projectsModalTrigger.addEventListener('click', openProjectsModal);
    }
    if (projectsModalClose) {
        projectsModalClose.addEventListener('click', closeProjectsModal);
    }
    if (projectsModal) {
        projectsModal.addEventListener('click', (e) => {
            if (e.target === projectsModal) {
                closeProjectsModal();
            }
        });
    }

    // Close projects modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectsModal.classList.contains('active')) {
            closeProjectsModal();
        }
    });
});
