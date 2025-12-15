# NGO Foundation Website

A modern, responsive NGO website built with HTML, Tailwind CSS, and JavaScript, inspired by the Nelson Mandela Foundation website.

## Features

- **6 Complete Pages:**
  - Home - Hero section, stats, program previews, and call-to-action
  - About Us - Mission, vision, values, and team information
  - Our Programs - Detailed program descriptions with impact metrics
  - Gallery - Filterable image gallery with categories
  - Donate - Donation form with amount selection and payment options
  - Contact Us - Contact form and office information

## Design

- **Color Scheme:**
  - White (#FFFFFF) - Primary background
  - Gold (#D4AF37) - Accent color for highlights and CTAs
  - Teal (#008080) - Primary brand color

- **Icons:** FontAwesome 6.4.0
- **Styling:** Tailwind CSS (via CDN)
- **Responsive:** Fully responsive design for all screen sizes

## Files Structure

```
/
├── index.html          # Home page
├── about.html          # About Us page
├── programs.html       # Our Programs page
├── gallery.html        # Gallery page
├── donate.html         # Donate page
├── contact.html        # Contact Us page
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Features Implemented

### Navigation
- Fixed navigation bar with active page highlighting
- Mobile-responsive hamburger menu
- Smooth transitions and hover effects

### Home Page
- Hero section with call-to-action buttons
- Statistics section (beneficiaries, donors, countries)
- About section with mission statement
- Program preview cards
- Call-to-action section

### About Us Page
- Mission and vision cards
- Organization story
- Core values display
- Team member profiles

### Programs Page
- Detailed program descriptions
- Impact metrics for each program
- Visual cards with icons
- Additional program highlights

### Gallery Page
- Filterable gallery with categories (All, Programs, Events, Community, Education)
- Hover effects with overlay information
- Responsive grid layout

### Donate Page
- Payment type selection (one-time/monthly)
- Preset amount buttons
- Custom amount input
- Donor information form
- Payment information form
- Impact information sidebar
- Donor testimonials

### Contact Page
- Contact form with validation
- Office information display
- Office hours
- Social media links
- Map placeholder section

## JavaScript Functionality

- Mobile menu toggle
- Gallery filtering by category
- Donation amount selection
- Form submission handling
- Smooth scrolling
- Interactive UI elements

## Usage

Simply open `index.html` in a web browser. All pages are linked together through the navigation menu.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on mobile, tablet, and desktop

## Customization

To customize the website:
- Update colors in the `<style>` section of each HTML file
- Modify content in the HTML files
- Adjust Tailwind classes for layout changes
- Add functionality in `script.js`

## Notes

- This is a front-end only website (no backend integration)
- Forms will show alerts on submission (connect to a backend for actual processing)
- Gallery uses placeholder colored divs (replace with actual images)
- Map section is a placeholder (embed Google Maps or similar)


