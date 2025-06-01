# Milk & Honey Clinic - Website Documentation

## Overview

This project is a static multilingual website for the "Milk & Honey Clinic", a facial treatment clinic. It provides key features such as:

* Modern and responsive layout using Bootstrap and Templated's Spatial design
* Embedded Google Calendar appointment scheduling
* Embedded Instagram feed (via Elfsight)
* Language toggle between English and Hebrew
* Smooth animations and persistent language preference using `localStorage`

---

## Folder Structure

```
MilkHoneyClinicWebsite/
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── jquery.min.js
│   │   ├── skel.min.js
│   │   ├── skel-layers.min.js
│   │   ├── init.js
│   │   └── translation.js
│   └── images/
│       ├── pic02.jpg
│       └── pic03.jpg
```

---

## Features

### 1. **Responsive Design**

Utilizes Bootstrap 4.5.2 for responsiveness and layout flexibility. The Templated "Spatial" theme offers a modern aesthetic.

### 2. **Language Toggle**

Buttons for English and Hebrew allow users to switch the site content dynamically without reloading the page.

* Language is stored in `localStorage`
* Elements use `data-i18n` attributes
* Language switching includes a fade transition

### 3. **Appointment Scheduling**

Embedded Google Calendar link styled with Bootstrap button. Opens in a new tab.

### 4. **Instagram Feed**

Integrated via Elfsight widget (ID: `ca25fba8-a85b-40eb-8a61-8c3161a2b0f7`). Displays latest posts.

### 5. **Smooth Scrolling and Transitions**

* `scroll-behavior: smooth` in CSS for anchor navigation
* `fade-transition` class to animate language switching

---

## How to Use

### 1. **Deploy Locally**

Open `index.html` in any browser. Ensure all assets are located in their respective folders.

### 2. **Deploy Online**

* Upload all files to any static hosting provider (Netlify, GitHub Pages, Vercel, etc.)

---

## Customization

### Adding New Translations:

Update `assets/js/translation.js` with additional keys under the `translations` object.

### Updating Instagram:

Log into Elfsight → Widget → Update content or replace Widget ID in `index.html`:

```html
<div class="elfsight-app-YOUR-WIDGET-ID"></div>
```

---

## Credits

* [Bootstrap 4.5.2](https://getbootstrap.com/)
* [Templated.co - Spatial Template](https://templated.co/spatial)
* [Elfsight Instagram Feed](https://elfsight.com/instagram-feed-instashow/)

---

## License

This project uses a Creative Commons Attribution 3.0 license for the template.

## Author

Adin L.D | Website Developer: \[Dror Mor]
