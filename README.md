# TIdye - Restaurant Website

A modern, fully responsive restaurant website built with React and Vite. Features beautiful food photography from Unsplash, organized menu system, reservation form, gallery, and more.

## Features

✨ **5 Main Pages:**
- **Homepage**: Hero section with food photography, CTAs, quick info cards, featured dishes
- **Menu Page**: Organized by categories (Appetizers, Mains, Desserts, Drinks) with prices and descriptions
- **About Page**: Restaurant story, chef info, values, ambiance photos
- **Contact/Reservation Page**: Beautiful reservation form, contact info, Google Maps integration, hours
- **Gallery Page**: High-quality food and restaurant photography with hover effects

🎨 **Design Features:**
- Warm, inviting color scheme (browns, golds, warm tones)
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional typography with Georgia serif fonts
- High-quality images from Unsplash
- Glass-morphism effects and gradients
- Accessible form inputs with validation states

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with custom properties (CSS variables)
- **Package Manager**: npm

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       # Navigation bar with logo and links
│   └── Footer.jsx           # Footer with contact info and social links
├── pages/
│   ├── HomePage.jsx         # Landing page with hero and featured items
│   ├── MenuPage.jsx         # Menu with category filtering
│   ├── AboutPage.jsx        # Restaurant story and values
│   ├── ContactPage.jsx      # Reservations and contact form
│   └── GalleryPage.jsx      # Photo gallery with hover effects
├── styles/
│   ├── Navigation.css
│   ├── Footer.css
│   ├── HomePage.css
│   ├── MenuPage.css
│   ├── AboutPage.css
│   ├── ContactPage.css
│   └── GalleryPage.css
├── App.jsx                  # Main app component with routing
├── App.css                  # Global styles
├── index.css                # Reset and base styles
└── main.jsx                 # React entry point
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landscrape
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## Building for Production

Build the optimized production bundle:
```bash
npm run build
```

## Color Scheme

- **Primary**: `#8B4513` (Saddle Brown) - Main brand color
- **Secondary**: `#D2691E` (Chocolate) - Accents and hover states
- **Accent**: `#DAA520` (Goldenrod) - CTAs and highlights
- **Dark**: `#2C1810` (Dark Brown) - Headings and text
- **Light**: `#F5DEB3` (Wheat) - Light backgrounds and overlays

## Features Implemented

### Homepage
- Hero section with stunning food image
- "View Menu" and "Order Online" CTAs
- Quick info cards (Hours, Location, Contact)
- Featured dishes showcase
- About preview section
- Call-to-action section

### Menu Page
- Category-based filtering (Appetizers, Mains, Desserts, Drinks)
- Dish names, descriptions, and prices
- Smooth category switching
- Responsive grid layout
- Call-to-action section

### About Page
- Restaurant story with images
- Chef information
- Ambiance photos
- Core values display (Quality, Authenticity, Hospitality, Community)
- Beautiful gradient backgrounds

### Contact/Reservations Page
- Fully functional reservation form with fields for:
  - Name, Email, Phone
  - Date, Time, Number of Guests
  - Special requests/dietary restrictions
- Google Maps embedded
- Contact information with hours
- Success message on form submission
- Multiple contact method cards

### Gallery Page
- Responsive image grid
- Hover effects with category labels
- Image overlay animations
- Instagram call-to-action section
- Mix of food, ambiance, and kitchen photos

## Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and up
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

All components adapt beautifully to smaller screens with:
- Single column layouts
- Adjusted typography
- Touch-friendly button sizes
- Horizontal scrolling for menus on mobile

## Navigation

The site uses React Router for seamless navigation:
- `/` - Homepage
- `/menu` - Menu Page
- `/about` - About Page
- `/gallery` - Gallery Page
- `/contact` - Contact & Reservations

## Images

All food and restaurant photos are from [Unsplash](https://unsplash.com/), a free stock photo service. You can replace them with real restaurant photos:

- Homepage hero: Professional restaurant ambiance
- Menu items: High-quality food photography
- Gallery: Mix of dishes, ambiance, and kitchen photos

## Customization

### Restaurant Info
Edit the restaurant details in:
- `Navigation.jsx` - Restaurant name and logo
- `Footer.jsx` - Hours, location, contact info
- `HomePage.jsx` - Hours, location, featured items
- `ContactPage.jsx` - Address, phone, email, reservation hours

### Menu Items
Update the `menuData` object in `MenuPage.jsx` with:
- Dish names
- Descriptions
- Prices
- Categories

### Colors
Modify CSS variables in `App.css` and `index.css`:
```css
:root {
  --primary-color: #8B4513;
  --secondary-color: #D2691E;
  --accent-color: #DAA520;
  --dark-color: #2C1810;
  --light-color: #F5DEB3;
}
```

## Backend Integration

This is a **frontend-only** application. To fully integrate backend functionality:

1. **Reservation Form**: Connect to a backend API to save reservations to a database
2. **Menu Management**: Fetch menu items from a database or CMS
3. **Contact Form**: Send contact emails via backend service
4. **Authentication**: Add user login/registration if needed

Example API integration point in `ContactPage.jsx`:
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Replace with your API endpoint
  fetch('/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => console.log(data));
};
```

## Performance

- Fast load times with Vite's optimized bundling
- Responsive images using object-fit
- CSS Grid and Flexbox for efficient layouts
- Smooth animations with CSS transitions
- No external dependencies except React Router

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use and modification.

## Support

For questions or issues, please refer to the component files or contact the development team.

---

**Restaurant Name**: TIdye  
**Tagline**: Experience Authentic Flavors & Warm Hospitality  
**Built with ❤️ using React + Vite**
