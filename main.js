<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Portfolio | NxtWave Student</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <!-- AOS Animation -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="cursor"></div>
    <div class="cursor-follower"></div>

    <nav class="navbar">
        <div class="container">
            <a href="#" class="logo">PORTFOLIO<span>.</span></a>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#" id="cert-modal-trigger">Certifications</a></li>
                <li><a href="#" id="projects-modal-trigger">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="nav-toggle" id="nav-toggle">
                <i data-lucide="menu"></i>
            </div>
        </div>
    </nav>

    <main>
        <!-- Hero Section -->
        <section id="home" class="hero">
            <div class="container hero-container">
                <div class="hero-profile" data-aos="zoom-in">
                    <img src="./assets/images/WhatsApp Image 2026-02-09 at 9.53.26 PM (1).jpeg" alt="Profile"
                        class="profile-img">
                </div>
                <div class="hero-content" data-aos="fade-up">
                    <span class="hero-subtitle">ELECTRONICS & COMMUNICATION ENGINEER</span>
                    <h1 class="hero-name gradient-text">Srushti S Patil</h1>
                    <p class="hero-tagline">Fullstack Developer | ML Enthusiast | Hardware Innovator</p>
                    <p class="hero-description">Passionate about bridging software and hardware. Dedicated student at
                        NxtWave CCBP 4.0 Academy, building innovative solutions with code and circuits.</p>

                    <div class="hero-btns">
                        <a href="#" id="hero-cert-trigger" class="btn btn-primary">View Certifications</a>
                        <a href="#contact" class="btn btn-outline">Get In Touch</a>
                    </div>

                    <div class="hero-socials">
                        <a href="https://github.com/srushti81" target="_blank"><i data-lucide="github"></i></a>
                        <a href="https://www.linkedin.com/in/srushti-patil-ss25205" target="_blank"><i
                                data-lucide="linkedin"></i></a>
                        <a href="mailto:srushtipatil015@gmail.com"><i data-lucide="mail"></i></a>
                    </div>

                    <div class="scroll-down">
                        <i data-lucide="chevron-down"></i>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about">
            <div class="container">
                <div class="section-title" data-aos="fade-up">
                    <h2>About Me</h2>
                    <div class="title-underline"></div>
                </div>
                <div class="about-grid">
                    <div class="about-text" data-aos="fade-right">
                        <p>I am a passionate student from <strong>A.G.M College of Engineering and Technology</strong>
                            and a dedicated learner at <strong>NxtWave</strong>, specializing in Full Stack Development.
                            I love solving problems through code and constantly learning new tools to build better
                            software.</p>
                        <p>I was officially appointed as <strong>Technical Team Lead for the OSCode AGMR Chapter
                                (2025–2026)</strong>.
                            This role involves leading technical teams, mentoring peers, contributing to open-source
                            initiatives,
                            and supporting the execution of technical events and projects, strengthening both my
                            leadership and
                            problem-solving skills.</p>
                        <div class="about-info">
                            <div class="info-item">
                                <i data-lucide="mail"></i>
                                <span>srushtipatil015@gmail.com</span>
                            </div>
                            <div class="info-item">
                                <i data-lucide="map-pin"></i>
                                <span>Hubli,Karnataka</span>
                            </div>
                        </div>
                    </div>
                    <div class="about-stats" data-aos="fade-left">
                        <div class="stat-card">
                            <h3>20+</h3>
                            <p>Certifications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="skills">
            <div class="container">
                <div class="section-title" data-aos="fade-up">
                    <h2>Technical Skills</h2>
                    <div class="title-underline"></div>
                </div>
                <div class="skills-grid">
                    <div class="skill-category" data-aos="zoom-in">
                        <i data-lucide="code-2"></i>
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML5 / CSS3</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div class="skill-category" data-aos="zoom-in" data-aos-delay="100">
                        <i data-lucide="database"></i>
                        <h3>Backend</h3>
                        <ul>
                            <li>MongoDB</li>
                            <li>SQLite</li>
                        </ul>
                    </div>
                    <div class="skill-category" data-aos="zoom-in" data-aos-delay="200">
                        <i data-lucide="wrench"></i>
                        <h3>Tools</h3>
                        <ul>
                            <li>Git / GitHub</li>
                            <li>VS Code</li>
                            <li>Antigravity</li>
                            <li>Netlify</li>
                            <li>Vercel & Render</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Modal -->
        <div id="projects-modal" class="cert-modal">
            <div class="cert-modal-content">
                <div class="cert-modal-header">
                    <h2>My Projects</h2>
                    <button class="cert-modal-back" id="projects-modal-close">
                        <i data-lucide="arrow-left"></i>
                        <span>Back</span>
                    </button>
                </div>
                <div class="cert-modal-body">
                    <div class="projects-grid-modal">
                        <!-- Project 1 - AI Autopilot -->
                        <div class="project-card-modal">
                            <h3>🚀 AI Autopilot</h3>
                            <p class="project-description">A full-stack AI-powered web application that provides
                                ChatGPT-like AI responses, secure JWT authentication, email automation with multiple
                                attachments, and command execution. Features include AI chat assistant using Groq/LLaMA,
                                command history tracking, and a comprehensive dashboard with status pages.</p>
                            <div class="project-tags">
                                <span>React</span>
                                <span>Vite</span>
                                <span>FastAPI</span>
                                <span>Python</span>
                                <span>MongoDB</span>
                                <span>JWT</span>
                                <span>Groq AI</span>
                                <span>Tailwind CSS</span>
                            </div>
                        </div>

                        <!-- Project 2 - Learn Quest -->
                        <div class="project-card-modal">
                            <h3>🎮 Learn Quest</h3>
                            <p class="project-description">An interactive educational gaming platform that makes
                                learning fun through engaging gameplay. Features multiple educational games including
                                English Sprint, Photosynthesis Lab, Sodium Water Lab, and Mixture Fix. Includes secure
                                user authentication, leaderboard system, user profiles, and responsive design for all
                                devices.</p>
                            <div class="project-tags">
                                <span>React</span>
                                <span>TypeScript</span>
                                <span>Vite</span>
                                <span>Tailwind CSS</span>
                                <span>shadcn/ui</span>
                                <span>Supabase</span>
                                <span>PostgreSQL</span>
                            </div>
                        </div>

                        <!-- Project 3 - Plant Disease Detection and Recommendation System -->
                        <div class="project-card-modal">
                            <h3>🌱 Plant Disease Detection and Recommendation System</h3>
                            <p class="project-description">A modern web application that uses artificial intelligence to
                                detect plant diseases from images. Built with Flask, TensorFlow, and a pre-trained
                                Convolutional Neural Network (CNN) model. Features AI-Powered Detection for 17 disease
                                categories in Tomato, Potato, and Bell Pepper plants, with real-time analysis,
                                confidence scores, symptoms, and treatment recommendations.</p>
                            <div class="project-tags">
                                <span>Flask</span>
                                <span>TensorFlow</span>
                                <span>CNN</span>
                                <span>Python</span>
                                <span>AI</span>
                                <span>Machine Learning</span>
                                <span>OpenCV</span>
                            </div>
                        </div>

                        <!-- Project 4 - AI Powered Cow Breed Classifier -->
                        <div class="project-card-modal">
                            <h3>🐄 AI Powered Cow Breed Classifier</h3>
                            <p class="project-description">A Deep Learning-based Cow Breed Classifier using
                                TensorFlow/Keras to identify cow breeds from images. The system includes data
                                preprocessing, model training, evaluation, and a prediction module integrated into a web
                                application for real-time inference.</p>
                            <div class="project-tags">
                                <span>Python</span>
                                <span>TensorFlow</span>
                                <span>Keras</span>
                                <span>NumPy</span>
                                <span>OpenCV</span>
                                <span>Flask</span>
                                <span>Tailwind CSS</span>
                                <span>Git</span>
                                <span>LFS</span>
                            </div>
                        </div>

                        <!-- Project 5 - Rakshaka -->
                        <div class="project-card-modal">
                            <h3>🛡️ Rakshaka</h3>
                            <p class="project-description">An AI-powered autonomous drone-based personal safety system designed for real-time emergency response. It combines a smart mobile application with a human-following drone equipped with GPS navigation and live video surveillance. Upon SOS activation, the nearest drone is automatically dispatched to the victim's location for immediate monitoring and assistance. The system streams live footage to guardians and authorities while using LED lights and buzzers as threat deterrents. By integrating AI, IoT, and cloud technologies, Rakshaka enhances situational awareness, reduces response time, and improves public safety.</p>
                            <div class="project-tags">
                                <span>AI</span>
                                <span>IoT</span>
                                <span>Drone Technology</span>
                                <span>GPS Navigation</span>
                                <span>Video Surveillance</span>
                                <span>Cloud Technologies</span>
                                <span>Emergency Response</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- Certifications Modal -->
        <div id="cert-modal" class="cert-modal">
            <div class="cert-modal-content">
                <div class="cert-modal-header">
                    <h2>My Certifications</h2>
                    <button class="cert-modal-back" id="cert-modal-close">
                        <i data-lucide="arrow-left"></i>
                        <span>Back</span>
                    </button>
                </div>
                <div class="cert-modal-body">
                    <!-- Achievement Certificates Section -->
                    <div class="cert-section">
                        <h3 class="cert-section-title">Achievement Certificates</h3>
                        <div class="certs-image-grid">
                            <img src="assets/certificates/Screenshot 2026-07-02 222259.png"
                                alt="Introduction to Databases Certificate" class="cert-image">
                            <img src="assets/certificates/Screenshot 2026-07-02 222334.png"
                                alt="Build Your Own Responsive Website Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 7.14.19 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-10 at 7.54.43 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-10 at 7.54.44 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-10 at 7.54.54 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.42.53 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.42.53 PM (1).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.24 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.24 PM (1).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.24 PM (2).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.25 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.25 PM (1).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.25 PM (2).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.23 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.23 PM (1).jpeg"
                                alt="Certificate" class="cert-image">
                        </div>
                    </div>

                    <!-- Participation Certificates Section -->
                    <div class="cert-section">
                        <h3 class="cert-section-title">Participation Certificates</h3>
                        <div class="certs-image-grid">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.42.17 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.42.49 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.42.50 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.42.51 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.42.51 PM (1).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.42.52 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.42.52 PM (1).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.26 PM.jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.26 PM (1).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.26 PM (2).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.24 PM (2).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.25 PM (1).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.24 PM (1).jpeg"
                                alt="Certificate" class="cert-image">
                            <img src="assets/certificates/WhatsApp Image 2026-02-09 at 8.43.24 PM.jpeg"
                                alt="Certificate" class="cert-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Achievements Section -->
        <section id="achievements" class="achievements">
            <div class="container">
                <div class="section-title" data-aos="fade-up">
                    <h2>Achievements</h2>
                    <div class="title-underline"></div>
                </div>
                <div class="achievements-list">
                    <div class="achievement-item" data-aos="fade-left">
                        <div class="achievement-number">01</div>
                        <div class="achievement-content">
                            <h3><i data-lucide="trophy" style="width: 24px; height: 24px; margin-right: 8px; color: #6366f1;"></i>NxtWave CCBP Academy</h3>
                            <p>Consistently held top ranks in weekly exams and practical coding challenges.</p>
                        </div>
                    </div>
                    <div class="achievement-item" data-aos="fade-left" data-aos-delay="100">
                        <div class="achievement-number">02</div>
                        <div class="achievement-content">
                            <h3><i data-lucide="award" style="width: 24px; height: 24px; margin-right: 8px; color: #6366f1;"></i>Hackathon Finalist</h3>
                            <p>Finalist (Top 4) in the Savishkar Karnataka North (CODEBHARAT 2025) hackathon held at
                                IIIT,Dharwad for building playful learning website (Learn Quest) without pressure for students.</p>
                        </div>
                    </div>
                    <div class="achievement-item" data-aos="fade-left" data-aos-delay="200">
                        <div class="achievement-number">03</div>
                        <div class="achievement-content">
                            <h3><i data-lucide="zap" style="width: 24px; height: 24px; margin-right: 8px; color: #6366f1;"></i>Winner - App Idea in One Hour</h3>
                            <p>Winner in Agratha 2K26 Competition for the Best App Idea in One Hour Challenge.</p>
                        </div>
                    </div>
                </div>

                <!-- Project Demo Videos -->
                <div class="achievements-videos" data-aos="fade-up">
                    <div class="achievements-videos-grid">
                        <div class="achievement-video-card">
                            <video controls width="100%">
                                <source src="assets/videos/WhatsApp Video 2026-02-09 at 8.42.49 PM.mp4"
                                    type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="achievement-video-card">
                            <video controls width="100%">
                                <source src="assets/videos/WhatsApp Video 2026-02-09 at 8.43.23 PM.mp4"
                                    type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Academic Section -->
        <section id="academic" class="academic">
            <div class="container">
                <div class="academic-header" data-aos="fade-up">
                    <div class="academic-number">03</div>
                    <h2 class="section-title-text">
                        <span class="gradient-text">Academic</span> Journey
                    </h2>
                </div>
                <div class="academic-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="academic-info">
                        <h3 class="degree-title">Bachelor of Engineering</h3>
                        <p class="degree-subtitle">Electronics & Communication Engineering</p>
                        <p class="college-name">AGM Rural College of Engineering & Technology,Varur</p>
                        <p class="university-name">Visvesvaraya Technological University (VTU), Karnataka</p>
                    </div>
                    <div class="cgpa-card">
                        <span class="cgpa-label">Expected CGPA</span>
                        <div class="cgpa-value">8.5</div>
                    </div>
                    <div class="year-range">
                        <span>2023 - 2027</span>
                    </div>
                </div>
            </div>
        </section>


        <!-- Contact Section -->
        <section id="contact" class="contact">
            <div class="container">
                <div class="contact-header" data-aos="fade-up">
                    <h2 class="contact-title">Let's <span class="gradient-text">Connect</span></h2>
                    <p class="contact-subtitle">Ready to build something extraordinary together? Let's talk.</p>
                </div>
                <div class="contact-grid" data-aos="fade-up" data-aos-delay="100">
                    <div class="contact-info">
                        <h3 class="info-title">Get in touch</h3>
                        <p class="info-description">Whether it's an exciting project, collaboration opportunity, internship, or just a conversation about AI and technology — my inbox is always open.</p>
                        
                        <div class="contact-item">
                            <i data-lucide="mail"></i>
                            <div class="contact-item-content">
                                <span class="contact-label">EMAIL</span>
                                <a href="mailto:srushtipatil015@gmail.com" class="contact-value">srushtipatil015@gmail.com</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i data-lucide="phone"></i>
                            <div class="contact-item-content">
                                <span class="contact-label">PHONE</span>
                                <a href="tel:+916360732272" class="contact-value">+91 6360732272</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i data-lucide="linkedin"></i>
                            <div class="contact-item-content">
                                <span class="contact-label">LINKEDIN</span>
                                <a href="https://www.linkedin.com/in/srushti-patil-ss25205" target="_blank" class="contact-value">linkedin.com/in/srushti-patil-ss25205</a>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i data-lucide="github"></i>
                            <div class="contact-item-content">
                                <span class="contact-label">GITHUB</span>
                                <a href="https://github.com/srushti81" target="_blank" class="contact-value">github.com/srushti81</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form-wrapper">
                        <form class="contact-form" action="https://formspree.io/f/xykqbvvr" method="POST">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your name" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="your@email.com" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="What's this about?" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Tell me about your project, idea, or opportunity..." required></textarea>
                            </div>
                            <button type="submit" class="submit-btn">
                                <span>🚀 Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <p>&copy; 2024 Portfolio. Designed by Srushti Patil.</p>
                <div class="social-links">
                    <a href="https://github.com/srushti81" target="_blank"><i data-lucide="github"></i></a>
                    <a href="https://www.linkedin.com/in/srushti-patil-ss25205" target="_blank"><i
                            data-lucide="linkedin"></i></a>
                    <a href="mailto:srushtipatil015@gmail.com"><i data-lucide="mail"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Chatbot -->
    <div class="chatbot-container">
        <button class="chatbot-toggle" id="chatbot-toggle">
            <i data-lucide="message-circle" class="chatbot-icon"></i>
        </button>
        <div class="chatbot-window" id="chatbot-window">
            <div class="chatbot-header">
                <div class="chatbot-header-content">
                    <div class="chatbot-avatar">
                        <i data-lucide="smile" style="width: 30px; height: 30px;"></i>
                    </div>
                    <div>
                        <h3>Srushti's Assistant</h3>
                        <span>Ask me anything!</span>
                    </div>
                </div>
                <button class="chatbot-close" id="chatbot-close">
                    <i data-lucide="x"></i>
                </button>
            </div>
            <div class="chatbot-messages" id="chatbot-messages"></div>
            <div class="chatbot-input-container">
                <input type="text" id="chatbot-input" placeholder="Type your message..." />
                <button id="chatbot-send">
                    <i data-lucide="send"></i>
                </button>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script type="module" src="main.js"></script>
</body>

</html>