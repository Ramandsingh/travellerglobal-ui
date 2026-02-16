// =====================
// Mobile Menu Toggle
// =====================

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenuOverlay = document.getElementById('mobileMenu');
    const closeMenuBtn = document.querySelector('.close-menu-btn');

    // Open menu
    menuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
    });

    // Close menu
    closeMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
    });

    // Close on overlay click
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
        }
    });

    // =====================
    // Search Tab Switching
    // =====================

    const searchTabs = document.querySelectorAll('.search-tab');
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            searchTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            console.log('Tab switched:', tab.textContent);
        });
    });

    // =====================
    // Quick Action Tiles
    // =====================

    const actionTiles = document.querySelectorAll('.action-tile');
    actionTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const action = tile.querySelector('span').textContent;
            console.log('Action clicked:', action);

            // Add haptic feedback for iOS
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });

    // =====================
    // Bottom Navigation
    // =====================

    const navItems = document.querySelectorAll('.nav-item-mobile');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            console.log('Nav clicked:', item.querySelector('.nav-label').textContent);

            // Add haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });

    // =====================
    // Destination Cards Scroll
    // =====================

    const destinationsScroll = document.querySelector('.destinations-scroll');
    if (destinationsScroll) {
        // Add scroll indicator
        destinationsScroll.addEventListener('scroll', () => {
            const scrollLeft = destinationsScroll.scrollLeft;
            const scrollWidth = destinationsScroll.scrollWidth - destinationsScroll.clientWidth;
            const scrollPercent = (scrollLeft / scrollWidth) * 100;
            console.log('Scroll progress:', scrollPercent + '%');
        });
    }

    // =====================
    // Search Form Submission
    // =====================

    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const fromInput = document.querySelector('.form-group input[value*="Colombo"]');
            const toInput = document.querySelector('.form-group input[value*="Dubai"]');
            const dateInput = document.querySelector('.form-group input[type="date"]');
            const travelersInput = document.querySelector('.form-group input[type="number"]');

            console.log('Search initiated:');
            console.log('From:', fromInput?.value);
            console.log('To:', toInput?.value);
            console.log('Date:', dateInput?.value);
            console.log('Travelers:', travelersInput?.value);

            // Add loading animation
            searchBtn.textContent = 'Searching...';
            searchBtn.disabled = true;

            setTimeout(() => {
                searchBtn.textContent = 'Search Flights';
                searchBtn.disabled = false;
                console.log('Search results ready');
            }, 1500);
        });
    }

    // =====================
    // Booking Action Buttons
    // =====================

    const actionBtns = document.querySelectorAll('.action-btn-mobile');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.textContent.trim();
            console.log('Booking action:', action);

            // WhatsApp integration
            if (btn.classList.contains('whatsapp')) {
                const bookingId = btn.closest('.booking-card-mobile')
                    .querySelector('.booking-id').textContent;
                const message = `Hi, I need support for booking ${bookingId}`;
                const whatsappUrl = `https://wa.me/94XXXXXXXXX?text=${encodeURIComponent(message)}`;
                console.log('Opening WhatsApp:', whatsappUrl);
                // window.open(whatsappUrl, '_blank');
            }

            // Add haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(15);
            }
        });
    });

    // =====================
    // Payment Method Selection
    // =====================

    const paymentMethods = document.querySelectorAll('.payment-method-mobile');
    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(m => m.style.borderColor = 'var(--gray-200)');
            method.style.borderColor = 'var(--emerald-500)';
            const selectedMethod = method.querySelector('.payment-name').textContent;
            console.log('Payment method selected:', selectedMethod);

            // Add haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });

    // =====================
    // Destination Card Click
    // =====================

    const destinationCards = document.querySelectorAll('.destination-card-mobile');
    destinationCards.forEach(card => {
        card.addEventListener('click', () => {
            const destinationName = card.querySelector('h3').textContent;
            console.log('Destination selected:', destinationName);

            // Add haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });

    // =====================
    // Book Button Click
    // =====================

    const bookButtons = document.querySelectorAll('.book-btn-mobile');
    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.destination-card-mobile');
            const destination = card.querySelector('h3').textContent;
            const price = card.querySelector('.price-mobile').textContent;

            console.log('Booking:', destination, price);

            // Add haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(15);
            }

            // Animation
            btn.textContent = 'Booking...';
            setTimeout(() => {
                btn.textContent = 'Book';
            }, 1000);
        });
    });

    // =====================
    // Menu Links
    // =====================

    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkText = link.textContent.trim();
            console.log('Menu link clicked:', linkText);

            // Close menu after selection
            setTimeout(() => {
                mobileMenuOverlay.classList.remove('active');
            }, 200);

            // Add haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });

    // =====================
    // Pull to Refresh (Optional)
    // =====================

    let touchStartY = 0;
    let touchEndY = 0;

    document.body.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.body.addEventListener('touchmove', (e) => {
        touchEndY = e.touches[0].clientY;
    }, { passive: true });

    document.body.addEventListener('touchend', () => {
        if (touchEndY > touchStartY + 100 && window.scrollY === 0) {
            console.log('Pull to refresh triggered');
            // Add refresh logic here

            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(20);
            }
        }
    });

    // =====================
    // Scroll Animations
    // =====================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.5s ease forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.booking-card-mobile').forEach(card => {
        observer.observe(card);
    });

    // =====================
    // Prevent Default Form Submission
    // =====================

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Form submission prevented (demo mode)');
        });
    });

    // =====================
    // Device Detection
    // =====================

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
        document.body.classList.add('ios-device');
        console.log('iOS device detected');
    } else if (isAndroid) {
        document.body.classList.add('android-device');
        console.log('Android device detected');
    }

    // =====================
    // Network Status
    // =====================

    window.addEventListener('online', () => {
        console.log('Network: Online');
        // Show success notification
    });

    window.addEventListener('offline', () => {
        console.log('Network: Offline');
        // Show offline notification
    });

    // =====================
    // Console Log
    // =====================

    console.log('🌟 TravellerGlobal Mobile UI Loaded Successfully!');
    console.log('📱 Mobile Features:');
    console.log('  • Touch-optimized interface');
    console.log('  • Bottom navigation');
    console.log('  • Slide-out menu');
    console.log('  • Horizontal scroll destinations');
    console.log('  • Booking status cards');
    console.log('  • WhatsApp integration');
    console.log('  • Payment gateway UI');
});

// =====================
// Export for Integration
// =====================

window.TravellerGlobalMobile = {
    openWhatsApp: (phoneNumber, message) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    },

    selectPaymentMethod: (method) => {
        console.log('Payment method selected programmatically:', method);
    },

    bookDestination: (destinationId) => {
        console.log('Booking destination:', destinationId);
    }
};
