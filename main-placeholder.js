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

    // Form Submission (Success Alert handling)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            const data = new FormData(contactForm);
            const action = contactForm.action;
            if (action && action.includes("formspree.io")) {
                e.preventDefault();
                const submitBtn = contactForm.querySelector('.submit-btn');
                const origText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>⏳ Sending...</span>';
                
                try {
                    const response = await fetch(action, {
                        method: 'POST',
                        body: data,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    if (response.ok) {
                        alert('Thank you! Your message has been sent successfully. Srushti will get back to you soon!');
                        contactForm.reset();
                    } else {
                        alert('Oops! There was a problem submitting your form. Please try again.');
                    }
                } catch (error) {
                    alert('Oops! There was a network error. Please try again.');
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origText;
                }
            }
        });
    }

    // Certificate Modal Functionality
    const certModal = document.getElementById('cert-modal');
    const certModalTrigger = document.getElementById('cert-modal-trigger');
    const heroCertTrigger = document.getElementById('hero-cert-trigger');
    const certModalClose = document.getElementById('cert-modal-close');
    let previousScrollPosition = 0;

    function openCertModal(e) {
        e.preventDefault();
        previousScrollPosition = window.scrollY;
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => lucide.createIcons(), 100);
    }

    function closeCertModal() {
        certModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            window.scrollTo({ top: previousScrollPosition, behavior: 'smooth' });
        }, 300);
    }

    if (certModalTrigger) certModalTrigger.addEventListener('click', openCertModal);
    if (heroCertTrigger) heroCertTrigger.addEventListener('click', openCertModal);
    if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
    if (certModal) {
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) closeCertModal();
        });
    }

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

    function openProjectsModal(e) {
        e.preventDefault();
        projectsPreviousScrollPosition = window.scrollY;
        projectsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => lucide.createIcons(), 100);
    }

    function closeProjectsModal() {
        projectsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            window.scrollTo({ top: projectsPreviousScrollPosition, behavior: 'smooth' });
        }, 300);
    }

    if (projectsModalTrigger) projectsModalTrigger.addEventListener('click', openProjectsModal);
    if (projectsModalClose) projectsModalClose.addEventListener('click', closeProjectsModal);
    if (projectsModal) {
        projectsModal.addEventListener('click', (e) => {
            if (e.target === projectsModal) closeProjectsModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectsModal.classList.contains('active')) {
            closeProjectsModal();
        }
    });

    // --- Chatbot Functionality ---
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');

    let isChatbotInitialized = false;

    // Toggle Chatbot Window
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
            if (chatbotWindow.classList.contains('active') && !isChatbotInitialized) {
                initializeChatbot();
            }
        });
    }

    if (chatbotClose) {
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
        });
    }

    // Initialize Chatbot with Welcome Message
    function initializeChatbot() {
        isChatbotInitialized = true;
        addBotMessage("Hi! 👋 I'm Srushti's virtual assistant. Ask me anything about her skills, projects, education, or contact info!");
        // Add quick reply suggestions
        addQuickReplies();
    }

    // Helper to add a message to UI
    function addBotMessage(text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chatbot-message bot';
        msgDiv.innerHTML = text;
        chatbotMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    function addUserMessage(text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chatbot-message user';
        msgDiv.textContent = text;
        chatbotMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    function addQuickReplies() {
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'chatbot-quick-replies';
        suggestionsDiv.style.display = 'flex';
        suggestionsDiv.style.gap = '0.5rem';
        suggestionsDiv.style.flexWrap = 'wrap';
        suggestionsDiv.style.marginTop = '0.5rem';

        const replies = ['Projects 🚀', 'Skills 💻', 'Education 🎓', 'Contact 📞'];
        replies.forEach(reply => {
            const btn = document.createElement('button');
            btn.textContent = reply;
            btn.style.background = 'rgba(99, 102, 241, 0.1)';
            btn.style.border = '1px solid rgba(99, 102, 241, 0.2)';
            btn.style.borderRadius = '20px';
            btn.style.padding = '0.4rem 1rem';
            btn.style.color = 'var(--primary-light)';
            btn.style.cursor = 'pointer';
            btn.style.fontSize = '0.85rem';
            btn.style.transition = 'var(--transition)';

            btn.addEventListener('mouseenter', () => {
                btn.style.background = 'rgba(99, 102, 241, 0.2)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'rgba(99, 102, 241, 0.1)';
            });

            btn.addEventListener('click', () => {
                const query = reply.replace(/[^\w]/g, '').trim();
                handleUserQuery(query);
                suggestionsDiv.remove(); // Remove suggestions after selecting
            });
            suggestionsDiv.appendChild(btn);
        });
        chatbotMessages.appendChild(suggestionsDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Handle incoming user query
    function handleUserQuery(queryText) {
        if (!queryText.trim()) return;

        addUserMessage(queryText);
        
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot typing';
        typingDiv.textContent = 'Typing...';
        chatbotMessages.appendChild(typingDiv);
        scrollToBottom();

        setTimeout(() => {
            typingDiv.remove();
            const response = getResponse(queryText.toLowerCase());
            addBotMessage(response);
            // Optionally show quick replies again
            setTimeout(() => {
                if (chatbotMessages.lastElementChild && !chatbotMessages.lastElementChild.classList.contains('chatbot-quick-replies')) {
                    addQuickReplies();
                }
            }, 500);
        }, 800);
    }

    // Simple rule-based NLP response generator
    function getResponse(text) {
        if (text.includes('project') || text.includes('work') || text.includes('build')) {
            return `Srushti has worked on several impressive projects:
            <br>• <strong>🚀 AI Autopilot</strong>: A full-stack AI-powered dashboard featuring ChatGPT responses (Groq/LLaMA), JWT authentication, and command execution.
            <br>• <strong>🎮 Learn Quest</strong>: An educational gaming platform, a Savishkar Karnataka North Finalist!
            <br>• <strong>🌱 Plant Disease Detection</strong>: CNN & TensorFlow ML model recommending treatments.
            <br>• <strong>🛡️ Rakshaka</strong>: An AI-powered autonomous drone safety system with live video streaming and SOS GPS dispatch.
            <br>• <strong>🐄 Cow Breed Classifier</strong>: Deep Learning CNN model identifying cow breeds.`;
        }
        if (text.includes('skill') || text.includes('tech') || text.includes('language') || text.includes('code')) {
            return `Srushti's technical skills include:
            <br>• <strong>Frontend:</strong> HTML5, CSS3, JavaScript, Python, Bootstrap
            <br>• <strong>Backend:</strong> MongoDB, SQLite
            <br>• <strong>Tools:</strong> Git, GitHub, VS Code, Netlify, Vercel, Render`;
        }
        if (text.includes('education') || text.includes('college') || text.includes('study') || text.includes('degree') || text.includes('journey')) {
            return `Srushti is pursuing a <strong>Bachelor of Engineering in Electronics & Communication</strong> at <strong>AGM Rural College of Engineering & Technology, Varur</strong> (expected 2027) with an expected CGPA of <strong>8.5</strong>. She also studies at NxtWave CCBP 4.0 Academy.`;
        }
        if (text.includes('contact') || text.includes('email') || text.includes('phone') || text.includes('reach') || text.includes('connect')) {
            return `You can reach Srushti via:
            <br>• ✉️ <strong>Email:</strong> <a href="mailto:srushtipatil015@gmail.com">srushtipatil015@gmail.com</a>
            <br>• 📞 <strong>Phone:</strong> <a href="tel:+916360732272">+91 6360732272</a>
            <br>• 🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/srushti-patil-ss25205" target="_blank">srushti-patil-ss25205</a>
            <br>• 💻 <strong>GitHub:</strong> <a href="https://github.com/srushti81" target="_blank">github.com/srushti81</a>`;
        }
        if (text.includes('lead') || text.includes('oscode') || text.includes('role') || text.includes('appoint')) {
            return `Srushti was appointed as the <strong>Technical Team Lead for the OSCode AGMR Chapter (2025–2026)</strong>, where she leads technical teams, mentors peers, and organizes open-source events.`;
        }
        if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
            return "Hello there! How can I help you today?";
        }
        
        return "I'm not sure about that. Try asking about her **Projects**, **Skills**, **Education**, or **Contact** details! You can also check her full portfolio on this page.";
    }

    // Input handlers
    if (chatbotSend) {
        chatbotSend.addEventListener('click', () => {
            const query = chatbotInput.value;
            chatbotInput.value = '';
            handleUserQuery(query);
        });
    }

    if (chatbotInput) {
        chatbotInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = chatbotInput.value;
                chatbotInput.value = '';
                handleUserQuery(query);
            }
        });
    }
});