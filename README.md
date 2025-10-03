# MotionHub - Animation Platform

A modern, interactive landing page showcasing a motion design and animation platform with Lottie and Rive animations.

## 🎨 Features

- **Interactive Animations**: Powered by Lottie and Rive animation libraries
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, gradient-based design with smooth transitions
- **Animation Library**: Showcase of various animation types including:
  - Loading animations
  - Success/Error states
  - Celebration effects with emoji overlay
  - Notification bells
  - Day/Night toggle
  - Cloud sync animations
- **Smooth Scrolling**: Enhanced user experience with smooth navigation
- **Interactive Elements**: Hover effects, parallax scrolling, and animated CTAs

## 📁 Project Structure

```
.
├── index.html              # Main HTML file
├── styles.css              # Styling and animations
├── script.js               # JavaScript functionality
├── assets/
│   ├── animations/         # Lottie animation files (.lottie)
│   │   ├── Cloud Loading.lottie
│   │   ├── Confetti - Full Screen.lottie
│   │   ├── Day and Night Toggle.lottie
│   │   ├── Error animation.lottie
│   │   ├── Loader animation.lottie
│   │   ├── loading.lottie
│   │   ├── Notification Bell Ringing.lottie
│   │   ├── Notification Bell Ringing (Teal).lottie
│   │   └── Success.lottie
│   └── rive/               # Rive animation files (.riv)
│       └── hero_ui_animation.riv
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML, CSS, and JavaScript!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HardikDewra/Lottie-files-Khushal-Dewra-temporary.git
```

2. Navigate to the project directory:
```bash
cd Lottie-files-Khushal-Dewra-temporary
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

4. Visit `http://localhost:8000` in your browser

## 🎭 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, flexbox, and grid
- **JavaScript (ES6+)**: Interactive functionality
- **Lottie**: JSON-based animation format
- **Rive**: Advanced interactive animations
- **DotLottie Player**: Lottie animation player component

## 📦 External Libraries

- [@dotlottie/player-component](https://www.npmjs.com/package/@dotlottie/player-component) - Lottie player
- [@rive-app/canvas](https://www.npmjs.com/package/@rive-app/canvas) - Rive animation runtime

## 🎨 Animations Included

| Animation | Type | Description |
|-----------|------|-------------|
| Loader Animation | Lottie | Loading spinner animation |
| Success Check | Lottie | Success confirmation animation |
| Celebration | Lottie | Confetti animation with 🥳 emoji overlay |
| Error Alert | Lottie | Error state animation |
| Data Sync | Lottie | Cloud loading animation |
| Notification | Lottie | Bell ringing animation |
| Upload Progress | Lottie | Loading indicator |
| Day/Night Toggle | Lottie | Theme toggle animation |
| Hero UI Animation | Rive | Interactive hero section animation |

## 🎯 Key Features

### Interactive Hero Section
- Powered by Rive with state machine interactivity
- Auto-resizing canvas
- Fallback placeholder if animation fails to load

### Animation Library Showcase
- 8+ animation examples
- Badge system (Featured, New, Popular)
- Like/favorite functionality
- Responsive grid layout

### Smooth User Experience
- Parallax scrolling effects
- Animated sections on scroll
- Smooth navigation
- Hover interactions
- Newsletter subscription form

## 🔧 Customization

### Adding New Animations

1. Add your `.lottie` file to `assets/animations/`
2. Add a new card in the `index.html` grid:

```html
<div class="card">
    <span class="badge badge-new">New</span>
    <div class="card-placeholder">
        <dotlottie-player
            src="assets/animations/your-animation.lottie"
            background="transparent"
            speed="1"
            style="width: 100%; height: 100%;"
            loop
            autoplay>
        </dotlottie-player>
    </div>
    <div class="card-footer">
        <span class="card-title">Your Animation</span>
        <button class="btn-icon">❤️</button>
    </div>
</div>
```

### Styling

All styles are contained in `styles.css`. Key CSS variables for theming:

```css
--dark-teal: #008080
--medium-teal: #00A3A3
--light-teal: #00C7C7
--teal-accent: #00D4D4
```

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

**Khushal Dewra**

## 🙏 Acknowledgments

- Lottie animations format by Airbnb
- Rive animation platform
- Design inspiration from modern SaaS landing pages

---

Made with ❤️ and lots of animations
