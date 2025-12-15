// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        const links = document.querySelectorAll('.nav-link');

        if (window.scrollY > 50) {
            nav.classList.add('bg-white', 'shadow-md');
            links.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-gray-700');
            });
        } else {
            nav.classList.remove('bg-white', 'shadow-md');
            links.forEach(link => {
                link.classList.remove('text-gray-700');
                link.classList.add('text-white');
            });
        }
    });

    // Gallery Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'bg-teal', 'text-white');
                    btn.classList.add('bg-white', 'text-teal', 'border-2', 'border-teal');
                });
                
                // Add active class to clicked button
                this.classList.add('active', 'bg-teal', 'text-white');
                this.classList.remove('bg-white', 'text-teal', 'border-2', 'border-teal');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Donation Amount Buttons
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('custom-amount');
    
    if (amountButtons.length > 0) {
        amountButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove selected class from all buttons
                amountButtons.forEach(btn => {
                    btn.classList.remove('selected', 'bg-teal', 'text-white');
                    btn.classList.add('bg-white', 'text-teal');
                });
                
                // Add selected class to clicked button
                this.classList.add('selected', 'bg-teal', 'text-white');
                this.classList.remove('bg-white', 'text-teal');
                
                // Set custom amount input to empty when preset amount is selected
                if (customAmountInput) {
                    customAmountInput.value = '';
                }
            });
        });
    }

    // Custom Amount Input Handler
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            // Remove selected class from all preset buttons when custom amount is entered
            amountButtons.forEach(btn => {
                btn.classList.remove('selected', 'bg-teal', 'text-white');
                btn.classList.add('bg-white', 'text-teal');
            });
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Show success message (in a real application, this would send data to a server)
            alert('Thank you for your message! We will get back to you within 24 hours.');
            
            // Reset form
            this.reset();
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenuBtn) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        }
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});

// FAQ Accordion Script
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');

        // Toggle visibility
        content.classList.toggle('hidden');

        // Rotate icon
        icon.classList.toggle('rotate-180');
    });
});

