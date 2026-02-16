// =====================
// View Switching Logic
// =====================

document.addEventListener('DOMContentLoaded', () => {
    const switchButtons = document.querySelectorAll('.switch-btn');
    const customerView = document.getElementById('customer-view');
    const agentView = document.getElementById('agent-view');

    switchButtons.forEach(button => {
        button.addEventListener('click', () => {
            const viewType = button.getAttribute('data-view');

            // Update active button
            switchButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Switch views
            if (viewType === 'customer') {
                customerView.classList.add('active');
                agentView.classList.remove('active');
            } else {
                agentView.classList.add('active');
                customerView.classList.remove('active');
            }
        });
    });

    // =====================
    // Interactive Elements
    // =====================

    // Quick action cards
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Action card clicked:', card.querySelector('h3').textContent);
            // Add your navigation logic here
        });
    });

    // Destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Destination clicked:', card.querySelector('h3').textContent);
            // Add your navigation logic here
        });
    });

    // Pipeline filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            console.log('Filter applied:', button.textContent);
            // Add your filtering logic here
        });
    });

    // WhatsApp buttons
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const customerName = button.closest('.pipeline-card').querySelector('.customer-name').textContent;
            console.log('WhatsApp clicked for:', customerName);
            // Add WhatsApp integration logic here
            // Example: window.open(`https://wa.me/94XXXXXXXXX?text=Hello ${customerName}`, '_blank');
        });
    });

    // Payment method selection
    const paymentCards = document.querySelectorAll('.payment-card');
    paymentCards.forEach(card => {
        card.addEventListener('click', () => {
            paymentCards.forEach(c => c.style.borderColor = 'var(--gray-200)');
            card.style.borderColor = 'var(--emerald-500)';
            console.log('Payment method selected:', card.querySelector('span').textContent);
        });
    });

    // =====================
    // Drag and Drop for Pipeline
    // =====================

    const pipelineCards = document.querySelectorAll('.pipeline-card');
    const pipelineColumns = document.querySelectorAll('.pipeline-column');

    pipelineCards.forEach(card => {
        card.setAttribute('draggable', 'true');

        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', card.innerHTML);
            card.classList.add('dragging');
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });
    });

    pipelineColumns.forEach(column => {
        const cardsContainer = column.querySelector('.pipeline-cards');

        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            column.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
        });

        column.addEventListener('dragleave', () => {
            column.style.backgroundColor = '';
        });

        column.addEventListener('drop', (e) => {
            e.preventDefault();
            column.style.backgroundColor = '';

            const draggingCard = document.querySelector('.dragging');
            if (draggingCard && cardsContainer) {
                cardsContainer.appendChild(draggingCard);

                // Update column count
                const count = cardsContainer.querySelectorAll('.pipeline-card').length;
                column.querySelector('.column-count').textContent = count;

                console.log('Card moved to:', column.querySelector('.column-title').textContent);
            }
        });
    });

    // =====================
    // Add CSS for dragging state
    // =====================

    const style = document.createElement('style');
    style.textContent = `
        .pipeline-card.dragging {
            opacity: 0.5;
            cursor: move;
        }

        .pipeline-card:hover {
            cursor: grab;
        }

        .pipeline-card:active {
            cursor: grabbing;
        }
    `;
    document.head.appendChild(style);

    // =====================
    // Smooth Scroll
    // =====================

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

    // =====================
    // Search Functionality (Placeholder)
    // =====================

    const searchInputs = document.querySelectorAll('input[type="search"]');
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            // Add your search logic here
        });
    });

    // =====================
    // Notification Badge Animation
    // =====================

    const notificationDot = document.querySelector('.notification-dot');
    if (notificationDot) {
        setInterval(() => {
            notificationDot.style.animation = 'none';
            setTimeout(() => {
                notificationDot.style.animation = 'pulse 2s infinite';
            }, 10);
        }, 5000);
    }

    // =====================
    // Live Tracking Pulse
    // =====================

    const pulseElements = document.querySelectorAll('.pulse');
    pulseElements.forEach(pulse => {
        pulse.style.animation = 'pulse 2s infinite';
    });

    // =====================
    // Console Log for Demo
    // =====================

    console.log('🌟 TravellerGlobal UI Loaded Successfully!');
    console.log('📱 Features:');
    console.log('  • Multi-role dashboard (Customer & Agent)');
    console.log('  • Booking pipeline with drag-and-drop');
    console.log('  • WhatsApp integration ready');
    console.log('  • Payment gateway UI');
    console.log('  • API aggregator display');
    console.log('  • Halal-friendly design elements');
});

// =====================
// Window Resize Handler
// =====================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
        // Add responsive adjustments here if needed
    }, 250);
});

// =====================
// Export for potential integration
// =====================

window.TravellerGlobalUI = {
    switchView: (viewType) => {
        const event = new CustomEvent('viewSwitch', { detail: viewType });
        document.dispatchEvent(event);
    },

    filterPipeline: (filterType) => {
        console.log('Filtering pipeline by:', filterType);
        // Add filtering logic
    },

    openWhatsApp: (phoneNumber, message) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
};
