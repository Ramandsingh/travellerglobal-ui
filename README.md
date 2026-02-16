# TravellerGlobal - Sri Lankan Travel Agency UI/UX Design

## 📋 Overview

High-fidelity UI/UX design for a modern Sri Lankan travel agency platform featuring multi-role dashboards, booking pipeline management, and integrated payment solutions with Halal-friendly design elements.

## 🎨 Design Features

### Visual Identity
- **Color Palette**: Emerald Green (#10B981) and Gold (#F59E0B) accents
- **Typography**: Inter (Sans-serif) for clean, modern readability
- **Style**: Minimalist, 4K-ready, Figma-style presentation
- **Cultural Elements**: Halal-certified visual cues and Islamic geometric patterns

### Key Screens

#### 1. Desktop Views
- **Customer Dashboard** (`index.html` - Customer View)
  - Hero section with Sri Lankan landmark imagery (Sigiriya)
  - Quick action cards for Flight, Hotel, and Transport booking
  - Featured destinations grid with pricing
  - Payment gateway integration display
  - WhatsApp support integration

- **Agent Partner Portal** (`index.html` - Agent View)
  - Performance statistics dashboard
  - Booking pipeline with 4 stages: Lead → Booked → In-Travel → Completed
  - Drag-and-drop pipeline management
  - Commission tracking
  - API aggregator status display
  - WhatsApp CRM integration

#### 2. Mobile Views (`mobile.html`)
- Bottom navigation bar
- Slide-out hamburger menu
- Touch-optimized search widget
- Horizontal scroll destinations
- Booking status cards with progress tracking
- Payment method selection
- WhatsApp quick contact

## 🚀 Files Structure

```
Claude-Mockup/
├── index.html              # Desktop view (Customer & Agent Portal)
├── styles.css              # Desktop styles
├── script.js               # Desktop interactions
├── mobile.html             # Mobile-optimized view
├── mobile-styles.css       # Mobile-specific styles
├── mobile-script.js        # Mobile interactions
├── design-brief.md         # Design specifications
└── README.md               # This file
```

## 🎯 Multi-Role Dashboard

### Customer View Features
- ✈️ Flight, Hotel, Transport search
- 🗺️ Destination browsing with Sri Lankan landmarks
- 📋 Booking management
- 💬 WhatsApp support integration
- 💳 Multiple payment gateways (Dialog mCash, eZ Cash, Bank Transfer)
- ☪ Halal certification badge

### Agent Partner Portal Features
- 📊 Real-time statistics (Leads, Bookings, In-Travel, Commissions)
- 🔄 Kanban-style booking pipeline
- 👥 Customer management
- 💰 Commission tracking
- 📈 Performance analytics
- 🔗 API aggregator status (Flights, Hotels, Transport, Activities)

## 📱 Booking Pipeline Stages

1. **Lead** (Blue) - Initial customer inquiry
2. **Booked** (Green) - Confirmed reservation with payment
3. **In-Travel** (Gold) - Currently traveling with live tracking
4. **Completed** (Purple) - Trip finished with ratings

## 🔌 Integrations

### Payment Gateways (SL-based)
- 💳 Visa/Mastercard
- 📱 Dialog mCash
- 📲 eZ Cash (Mobitel)
- 🏦 Bank Transfer
- 💰 Cash Payment

### API Aggregators
- ✈️ **Flight API**: Amadeus, Sabre
- 🏨 **Hotel API**: Booking.com, Agoda
- 🚗 **Transport API**: PickMe, Uber
- 🎫 **Activities API**: GetYourGuide

### Communication
- 💬 WhatsApp Business Integration
- 📧 Email notifications
- 📱 SMS alerts (Dialog, Mobitel)

## 🌍 Sri Lankan Landmarks Featured

- **Sigiriya Rock Fortress** - Ancient rock fortress, UNESCO World Heritage
- **Galle Fort** - Dutch colonial fortification
- **Ella Tea Plantations** - Scenic hill country
- **Beaches** - Southern and Eastern coast

## 🎨 Color System

```css
/* Primary Colors */
--emerald-500: #10B981;
--emerald-600: #059669;
--gold-500: #F59E0B;
--gold-600: #D97706;

/* Status Colors */
--blue-500: #3B82F6;    /* Lead */
--emerald-500: #10B981; /* Booked */
--gold-500: #F59E0B;    /* In-Travel */
--purple-500: #8B5CF6;  /* Completed */
```

## 📐 Responsive Breakpoints

- **Desktop**: 1440px+ (Full sidebar + 4-column pipeline)
- **Tablet**: 1024px - 1440px (2-column layouts)
- **Mobile**: 375px - 768px (Single column, bottom nav)

## ✨ Interactive Features

### Desktop
- View switching between Customer and Agent Portal
- Drag-and-drop pipeline cards
- Hover animations on cards
- Click-to-call WhatsApp integration
- Payment method selection

### Mobile
- Pull-to-refresh
- Horizontal scroll destinations
- Haptic feedback (iOS/Android)
- Touch-optimized 44px buttons
- Slide-out navigation menu
- Bottom tab bar navigation

## 🔧 How to Use

### Option 1: Open Locally
1. Open `index.html` in a modern web browser for desktop view
2. Open `mobile.html` for mobile view
3. Toggle between Customer View and Agent Portal using the switcher

### Option 2: Responsive Testing
- Use browser DevTools (F12)
- Enable device toolbar (Ctrl/Cmd + Shift + M)
- Test on different screen sizes

### Option 3: Mobile Device
- Transfer files to mobile device
- Open `mobile.html` in mobile browser
- For best experience, use Chrome or Safari

## 🎭 User Personas

### Customer (Ahmed)
- **Role**: Tourist planning Sri Lanka trip
- **Needs**: Easy booking, Halal-friendly options, WhatsApp support
- **Features Used**: Search, Browse destinations, Book packages, Track bookings

### Agent (Sales Agent)
- **Role**: Travel agent managing customer bookings
- **Needs**: Pipeline management, Commission tracking, Customer communication
- **Features Used**: Pipeline board, Statistics, WhatsApp CRM, API aggregator

## 💡 Design Decisions

### Halal-Friendly Elements
- ☪ Crescent moon icons
- Green color palette (Islamic tradition)
- "Halal Certified Services" badge
- Family-friendly imagery
- Prayer facility indicators

### Local Context
- Sri Lankan Rupee (LKR) currency
- Local payment gateways (Dialog, Mobitel)
- Sri Lankan landmarks and destinations
- Multi-language support ready (English, Sinhala, Tamil)

## 🚀 Future Enhancements

- [ ] Real API integration
- [ ] Multi-language switcher (Sinhala/Tamil)
- [ ] Dark mode toggle
- [ ] Push notifications
- [ ] Offline mode support
- [ ] Advanced filtering and search
- [ ] Calendar view for bookings
- [ ] Customer reviews and ratings
- [ ] Live chat integration
- [ ] Currency converter
- [ ] Visa requirement checker
- [ ] Travel insurance integration

## 📊 Performance Optimizations

- **Lazy loading** for images
- **CSS animations** for smooth transitions
- **Intersection Observer** for scroll animations
- **Touch events** optimized for mobile
- **Safe area insets** for iOS notch support

## 🎨 Typography Scale

```
H1: 32px/40px Bold    - Page titles
H2: 24px/32px SemiBold - Section headings
H3: 20px/28px Medium  - Card titles
Body: 16px/24px Regular - Body text
Small: 14px/20px Regular - Meta info
```

## 📱 Touch Targets

All interactive elements meet accessibility standards:
- Minimum 44px × 44px touch targets
- Adequate spacing between elements
- Clear visual feedback on interaction

## 🌈 Accessibility

- Semantic HTML structure
- ARIA labels where needed
- High contrast text
- Focus indicators
- Keyboard navigation support

## 🔐 Security Considerations

- No sensitive data in frontend
- Payment gateway integration via secure APIs
- HTTPS required for production
- Input validation on all forms
- CSRF protection needed for backend

## 📞 Contact & Support

**WhatsApp Integration**: +94 XX XXX XXXX (Configure in script.js)

## 📄 License

Design created for TravellerGlobal - Educational/Portfolio purposes

## 🙏 Credits

- **Design**: High-fidelity UI/UX mockup
- **Icons**: Unicode emoji (production: use Font Awesome or custom SVGs)
- **Images**: Unsplash (Sri Lankan landmarks)
- **Fonts**: Google Fonts (Inter)

---

## 📸 Screenshots

### Desktop - Customer View
- Hero section with Sigiriya background
- Quick action cards (Flight/Hotel/Transport)
- Featured destinations grid
- Payment methods display

### Desktop - Agent Portal
- Statistics dashboard (4 cards)
- Booking pipeline (4 columns: Lead/Booked/In-Travel/Completed)
- API aggregator status
- WhatsApp CRM buttons

### Mobile View
- Search widget with tabs
- Horizontal scroll destinations
- Booking cards with progress bars
- Bottom navigation
- Slide-out menu

---

## 🔧 Customization Guide

### Change Primary Color
```css
/* In styles.css or mobile-styles.css */
--emerald-500: #YOUR_COLOR;
--emerald-600: #YOUR_DARKER_SHADE;
```

### Add New Payment Gateway
```html
<div class="payment-card">
    <div class="payment-logo">🆕</div>
    <span>New Gateway</span>
</div>
```

### Modify WhatsApp Number
```javascript
// In script.js or mobile-script.js
const whatsappNumber = '94XXXXXXXXX'; // Your number
```

### Add New Pipeline Stage
```html
<div class="pipeline-column">
    <div class="column-header custom-header">
        <span class="column-title">New Stage</span>
        <span class="column-count">0</span>
    </div>
    <div class="pipeline-cards"></div>
</div>
```

---

**Built with ❤️ for TravellerGlobal - Connecting travelers to beautiful Sri Lanka**
