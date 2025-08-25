# 🪙 Coin Flip Web Application

A beautiful, interactive web application for flipping coins with modern UI and smooth animations.

## Features

- 🎯 **Interactive Coin Flipping** - Click the coin or button to flip
- 🎨 **Modern UI Design** - Beautiful gradient backgrounds and smooth animations
- 📊 **Statistics Tracking** - Keeps track of heads, tails, and total flips
- 🎉 **Confetti Animation** - Celebration effects on each flip
- 💾 **Persistent Stats** - Statistics saved in browser localStorage
- 📱 **Responsive Design** - Works great on mobile and desktop
- ⌨️ **Keyboard Support** - Press Space or Enter to flip
- 🔄 **Reset Function** - Double-click stats to reset (with confirmation)

## Quick Start

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the application:**
   ```bash
   python main.py
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:5000
   ```

## How to Use

- Click the coin or "Flip Coin" button to start flipping
- Watch the beautiful 3D animation as the coin spins
- See the result with emojis and confetti celebration
- View your flip statistics at the bottom
- Use keyboard shortcuts (Space or Enter) for quick flips
- Double-click on statistics to reset all counts

## Project Structure

```
emotionalanalysis/
├── main.py                 # Flask application
├── requirements.txt        # Python dependencies
├── templates/
│   └── index.html         # Main HTML template
└── static/
    ├── css/
    │   └── style.css      # Styling and animations
    └── js/
        └── script.js      # Interactive functionality
```

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Animations**: CSS3 transitions and keyframes
- **Fonts**: Google Fonts (Poppins)
- **Storage**: Browser localStorage for statistics

Enjoy flipping coins and making decisions! 🎲
