// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const navSignInBtn = document.querySelector('.btn-nav-signin');
const heroSection = document.querySelector('.hero');

function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    // Transform Sign In button after hero section
    if (heroSection && navSignInBtn) {
        const heroHeight = heroSection.offsetHeight;
        if (currentScroll > heroHeight - 100) {
            navSignInBtn.classList.add('scrolled');
        } else {
            navSignInBtn.classList.remove('scrolled');
        }
    }
    
    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleScroll, { passive: true });
document.addEventListener('DOMContentLoaded', handleScroll);

// Add hover effect to cards
const cards = document.querySelectorAll('.card, .workflow-card, .community-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Code tab switching
const codeTabs = document.querySelectorAll('.code-tab');

codeTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        codeTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitButton = newsletterForm.querySelector('button');
    
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        
        if (email && email.includes('@')) {
            // Simulate subscription
            submitButton.textContent = '✓ Subscribed';
            submitButton.style.background = 'var(--medium-teal)';
            emailInput.value = '';
            
            setTimeout(() => {
                submitButton.textContent = 'Subscribe';
                submitButton.style.background = 'linear-gradient(to bottom, var(--dark-teal), var(--darker-teal))';
            }, 3000);
        } else {
            emailInput.style.borderColor = 'var(--teal-accent)';
            setTimeout(() => {
                emailInput.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }, 2000);
        }
    });
}

// Add pulse animation to CTA buttons
const ctaButtons = document.querySelectorAll('.btn-hero, .btn-primary-large');

ctaButtons.forEach(button => {
    setInterval(() => {
        button.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            button.style.animation = '';
        }, 500);
    }, 5000);
});

// Add CSS for pulse animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);

// Like button functionality
const likeButtons = document.querySelectorAll('.btn-icon');

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.style.transform === 'scale(1.3)') {
            this.style.transform = 'scale(1)';
            this.textContent = '❤️';
        } else {
            this.style.transform = 'scale(1.3)';
            this.textContent = '💖';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        }
    });
});

// Parallax effect for floating icons
window.addEventListener('scroll', () => {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    const scrolled = window.pageYOffset;
    
    floatingIcons.forEach((icon, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        icon.style.transform = `translateY(${yPos}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Initialize Rive animation
let riveInstance;

// Load Rive animation
async function loadRiveAnimation() {
    try {
        // Wait for Rive library to load
        if (typeof window.rive === 'undefined') {
            console.log('⏳ Waiting for Rive library to load...');
            setTimeout(loadRiveAnimation, 100);
            return;
        }

        const canvas = document.getElementById('hero-rive-canvas');
        if (!canvas) {
            console.error('❌ Canvas element not found');
            showPlaceholderFallback();
            return;
        }

        console.log('🎯 Starting Rive animation load...');

        // Set canvas size to match container
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        // First, load without state machine to discover available state machines
        const tempRive = new window.rive.Rive({
            src: 'assets/rive/hero_ui_animation.riv',
            canvas: canvas,
            autoplay: false,
            onLoad: () => {
                console.log('📋 Discovering state machines...');
                const stateMachineNames = tempRive.stateMachineNames;
                console.log('Available state machines:', stateMachineNames);

                // Clean up temp instance
                tempRive.cleanup();

                // Now load with the first available state machine
                if (stateMachineNames && stateMachineNames.length > 0) {
                    loadWithStateMachine(stateMachineNames[0]);
                } else {
                    console.warn('⚠️ No state machines found, loading without interactivity');
                    loadWithStateMachine(null);
                }
            },
            onLoadError: (error) => {
                console.error('❌ Error loading Rive animation:', error);
                showPlaceholderFallback();
            }
        });
    } catch (error) {
        console.error('❌ Error initializing Rive:', error);
        showPlaceholderFallback();
    }
}

// Load Rive with state machine for interactivity
function loadWithStateMachine(stateMachineName) {
    const canvas = document.getElementById('hero-rive-canvas');
    const container = canvas.parentElement;

    // Set canvas size to match container
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const config = {
        src: './hero_ui_animation.riv',
        canvas: canvas,
        autoplay: true,
        fit: window.rive.Fit.Contain,
        alignment: window.rive.Alignment.Center,
        onLoad: () => {
            console.log('🎬 Rive animation loaded successfully!');
            console.log('🎮 State machine:', stateMachineName || 'None');

            // Resize to fill canvas completely
            riveInstance.resizeDrawingSurfaceToCanvas();

            console.log('✅ Rive is now interactive and fills the height!');
        },
        onLoadError: (error) => {
            console.error('❌ Error loading Rive animation:', error);
            showPlaceholderFallback();
        }
    };

    // Add state machine if available
    if (stateMachineName) {
        config.stateMachines = stateMachineName;
    }

    riveInstance = new window.rive.Rive(config);
}

// Fallback function to show placeholder if Rive fails
function showPlaceholderFallback() {
    const canvas = document.getElementById('hero-rive-canvas');
    if (canvas && canvas.parentElement) {
        canvas.parentElement.innerHTML = `
            <div class="animation-placeholder hero-placeholder">
                <div class="placeholder-content">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="40" r="30" stroke="#008080" stroke-width="2" stroke-dasharray="4 4"/>
                        <path d="M30 40L35 45L50 30" stroke="#008080" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span>Hero Animation</span>
                </div>
            </div>
        `;
    }
}


// Handle window resize to maintain proper canvas sizing
window.addEventListener('resize', () => {
    if (riveInstance && riveInstance.canvas) {
        console.log('🔄 Window resized, updating canvas...');
        riveInstance.resizeDrawingSurfaceToCanvas();
    }
});

// Load Rive animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to ensure the container is fully rendered
    setTimeout(() => {
        loadRiveAnimation();
    }, 100);
});

console.log('🎨 MotionHub - Animation Platform Loaded Successfully!');


