# TravellerGlobal - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: View the Design

#### Desktop View
```bash
# Open in your default browser
open index.html

# Or navigate to the file in your browser
# Chrome: Ctrl/Cmd + O, then select index.html
```

**What you'll see:**
- Customer Dashboard (default view)
- Toggle to Agent Partner Portal (top-right switcher)
- Interactive elements (cards, buttons, filters)

#### Mobile View
```bash
# Open mobile-specific design
open mobile.html
```

**What you'll see:**
- Mobile-optimized interface
- Bottom navigation
- Slide-out menu
- Touch-friendly components

#### Design Specifications
```bash
# View comprehensive design system
open design-specs.html
```

**What you'll see:**
- Color palette
- Typography scale
- Component library
- Spacing system
- Responsive breakpoints

### Step 2: Explore Features

#### Switch Between Views
1. Open `index.html`
2. Click **"Agent Partner Portal"** button (top-right)
3. Explore booking pipeline, stats, and CRM features
4. Click **"Customer View"** to return

#### Test Interactive Elements

**Desktop (`index.html`):**
- ✅ Hover over destination cards
- ✅ Click quick action cards
- ✅ Drag pipeline cards between columns
- ✅ Click WhatsApp buttons
- ✅ Select payment methods
- ✅ Toggle pipeline filters

**Mobile (`mobile.html`):**
- ✅ Tap hamburger menu (☰)
- ✅ Swipe destination carousel
- ✅ Tap quick action tiles
- ✅ Tap booking action buttons
- ✅ Use bottom navigation

### Step 3: Customize the Design

#### Change Colors

**Edit `styles.css` or `mobile-styles.css`:**
```css
:root {
    /* Change primary color from emerald to your brand color */
    --emerald-500: #YOUR_COLOR;
    --emerald-600: #YOUR_DARKER_SHADE;

    /* Change accent from gold to your accent color */
    --gold-500: #YOUR_ACCENT;
    --gold-600: #YOUR_ACCENT_DARKER;
}
```

#### Update Content

**Edit `index.html`:**
```html
<!-- Change hero title -->
<h2 class="hero-title">Your Custom Title</h2>

<!-- Change company name -->
<span class="logo-text">YourCompany</span>

<!-- Add new destination -->
<div class="destination-card">
    <div class="destination-image" style="background-image: url('YOUR_IMAGE.jpg');">
        <div class="destination-badge">New</div>
    </div>
    <div class="destination-content">
        <h3>Your Destination</h3>
        <p class="destination-location">📍 Your Location</p>
        <div class="destination-footer">
            <span class="price">From LKR XX,XXX</span>
            <button class="btn-secondary-sm">Book Now</button>
        </div>
    </div>
</div>
```

#### Configure WhatsApp Integration

**Edit `script.js` or `mobile-script.js`:**
```javascript
// Update WhatsApp number (line ~120)
const whatsappNumber = '94771234567'; // Your number with country code

// Example usage
window.TravellerGlobalUI.openWhatsApp('94771234567', 'Hello, I need help!');
```

### Step 4: Test Responsiveness

#### Using Browser DevTools
1. Open `index.html` in Chrome/Firefox
2. Press `F12` or `Ctrl/Cmd + Shift + I`
3. Click device toolbar icon (or `Ctrl/Cmd + Shift + M`)
4. Test different screen sizes:
   - iPhone 12 Pro (390 × 844)
   - iPad Pro (1024 × 1366)
   - Desktop (1440 × 900)

#### Breakpoints to Test
- **Mobile**: 375px, 390px, 428px
- **Tablet**: 768px, 1024px
- **Desktop**: 1440px, 1920px

### Step 5: Prepare for Development

#### Production Checklist

**Replace Placeholder Content:**
- [ ] Update hero background images
- [ ] Add real destination images
- [ ] Update company logo (replace emoji with SVG/PNG)
- [ ] Add real WhatsApp number
- [ ] Update payment gateway details
- [ ] Add real customer/booking data

**Add Real Functionality:**
- [ ] Connect to backend API
- [ ] Implement authentication
- [ ] Integrate payment gateways
- [ ] Connect WhatsApp Business API
- [ ] Add database integration
- [ ] Implement search functionality
- [ ] Add booking workflow logic

**Optimize for Production:**
- [ ] Minify CSS and JavaScript
- [ ] Compress images
- [ ] Add lazy loading
- [ ] Implement caching
- [ ] Add error handling
- [ ] Set up analytics
- [ ] Configure CDN
- [ ] Add HTTPS/SSL

## 📁 File Structure Overview

```
Claude-Mockup/
├── index.html              # Main desktop UI (Customer + Agent views)
├── styles.css              # Desktop styles and responsive design
├── script.js               # Desktop interactivity
│
├── mobile.html             # Mobile-optimized UI
├── mobile-styles.css       # Mobile-specific styles
├── mobile-script.js        # Mobile interactions
│
├── design-specs.html       # Visual design system documentation
├── design-brief.md         # Project brief and requirements
├── README.md               # Comprehensive documentation
├── FEATURES.md             # Feature matrix and capabilities
└── QUICKSTART.md           # This file
```

## 🎨 Design Tokens Reference

### Colors (Quick Copy)
```css
/* Primary */
#10B981  /* Emerald 500 - Primary buttons, active states */
#059669  /* Emerald 600 - Hover states */
#F59E0B  /* Gold 500 - Accents, CTAs */
#D97706  /* Gold 600 - Gold hover states */

/* Status */
#3B82F6  /* Blue - Lead status */
#8B5CF6  /* Purple - Completed status */
#25D366  /* WhatsApp Green */

/* Neutrals */
#F9FAFB  /* Background */
#E5E7EB  /* Borders */
#6B7280  /* Secondary text */
#111827  /* Primary text */
```

### Typography (Quick Copy)
```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Sizes */
H1: 32px / 40px / Bold (700)
H2: 24px / 32px / SemiBold (600)
H3: 20px / 28px / Medium (500)
Body: 16px / 24px / Regular (400)
Small: 14px / 20px / Regular (400)
```

### Spacing (Quick Copy)
```css
XS:  4px   /* Tight spacing */
SM:  8px   /* Small gaps */
MD:  16px  /* Default spacing */
LG:  24px  /* Section spacing */
XL:  32px  /* Large spacing */
2XL: 48px  /* Hero spacing */
```

### Border Radius (Quick Copy)
```css
SM:  6px   /* Small elements */
MD:  8px   /* Buttons, inputs */
LG:  12px  /* Cards */
XL:  16px  /* Large cards */
```

## 🔧 Common Customizations

### Add a New Page/Section
```html
<!-- Copy this template -->
<section class="section">
    <div class="section-header">
        <h2 class="section-title">Section Title</h2>
        <a href="#" class="link-primary">View all →</a>
    </div>

    <div class="content-grid">
        <!-- Your content here -->
    </div>
</section>
```

### Add a Pipeline Stage
```html
<div class="pipeline-column">
    <div class="column-header YOUR-COLOR-header">
        <span class="column-title">Stage Name</span>
        <span class="column-count">0</span>
    </div>
    <div class="pipeline-cards">
        <!-- Cards will go here -->
    </div>
</div>
```

### Add a Stat Card (Agent Portal)
```html
<div class="stat-card">
    <div class="stat-icon YOUR-bg">
        🆕
    </div>
    <div class="stat-content">
        <span class="stat-label">Label</span>
        <h3 class="stat-value">100</h3>
        <span class="stat-change positive">↑ 10%</span>
    </div>
</div>
```

## 🐛 Troubleshooting

### Images Not Loading
```html
<!-- Replace with your own images -->
<div class="hero-section" style="background-image: url('path/to/your/image.jpg');">
```

### JavaScript Not Working
```bash
# Check browser console (F12 → Console tab)
# Make sure all three files are in the same directory:
# - index.html
# - styles.css
# - script.js
```

### Mobile View Not Responsive
```html
<!-- Ensure this meta tag is in <head> -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### WhatsApp Links Not Opening
```javascript
// Update phone number with country code (no + or spaces)
const phoneNumber = '94771234567'; // Sri Lanka: 94 + mobile number
```

## 📚 Learn More

### Documentation Files
- **README.md** - Full project overview
- **FEATURES.md** - Complete feature list
- **design-brief.md** - Original requirements
- **design-specs.html** - Visual design system

### Code Examples
- **index.html** - HTML structure and components
- **styles.css** - CSS techniques and responsive design
- **script.js** - JavaScript interactions

## 🚀 Next Steps

### For Designers
1. Import designs into Figma/Sketch
2. Customize colors and typography
3. Add brand assets (logos, icons)
4. Create additional screens
5. Export assets for development

### For Developers
1. Set up development environment
2. Choose backend framework
3. Set up database schema
4. Implement API endpoints
5. Connect frontend to backend
6. Add authentication
7. Integrate third-party APIs
8. Deploy to production

### For Product Owners
1. Review feature list (FEATURES.md)
2. Prioritize development phases
3. Define user stories
4. Set up project management
5. Plan sprint cycles
6. Define success metrics

## 💡 Pro Tips

### Performance
- Use WebP images for better compression
- Implement lazy loading for images
- Minify CSS/JS for production
- Use CDN for static assets

### Accessibility
- Add `alt` text to images
- Use semantic HTML tags
- Test with keyboard navigation
- Ensure color contrast meets WCAG standards

### SEO
- Add meta descriptions
- Use proper heading hierarchy
- Include schema markup
- Optimize page titles

### Security
- Never store sensitive data in frontend
- Use HTTPS in production
- Validate all inputs
- Implement CSRF protection

## 📞 Support

For questions or issues:
- 📧 Review README.md for detailed documentation
- 🎨 Check design-specs.html for design guidelines
- 📋 Reference FEATURES.md for feature details

---

**Happy Building! 🚀**

*Built with ❤️ for TravellerGlobal - Connecting travelers to beautiful Sri Lanka*
