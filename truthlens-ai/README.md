# TruthLens AI - Misinformation Detection System

**An advanced AI-powered web application for detecting misinformation in news articles, social media posts, and online content.**

## 🎯 Overview

TruthLens AI is a modern, professional SaaS-style web interface built with React.js that uses artificial intelligence to detect fake news and misleading content. The application provides users with detailed credibility scores, confidence metrics, and explanations for why content may be misinformation.

### Key Features

✨ **AI-Powered Analysis** - Advanced machine learning algorithms analyze content in real-time
⭐ **Credibility Scoring** - Get detailed credibility scores based on multiple factors
⚡ **Real-time Detection** - Instant analysis of news articles and social media posts
📊 **Explainable Results** - Understand why content is marked as real or fake
🌙 **Dark Mode** - Toggle between light and dark themes for comfortable viewing
📋 **Analysis History** - Keep track of all your previous analyses
🎨 **Modern UI** - Clean, professional design similar to ChatGPT, Perplexity AI, and Notion AI

## 🛠️ Technology Stack

- **Frontend Framework**: React.js 18.3
- **Routing**: React Router v6
- **Styling**: Plain CSS (No Tailwind)
- **Charts**: Chart.js with react-chartjs-2
- **State Management**: React Hooks
- **API**: Mock API (replaceable with real ML model API)
- **Build Tool**: Create React App with react-scripts

## 📁 Project Structure

```
truthlens-ai/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/                # Reusable React components
│   │   ├── Navbar.js              # Navigation bar with dark mode toggle
│   │   ├── Sidebar.js             # Side navigation menu
│   │   ├── TextAnalyzerInput.js   # Main text input component
│   │   ├── ResultCard.js          # Result display card
│   │   ├── ConfidenceChart.js     # Chart visualizations
│   │   ├── HistoryTable.js        # Analysis history table
│   │   ├── LoaderAnimation.js     # Loading animation
│   │   └── Footer.js              # Footer component
│   │
│   ├── pages/                     # Page components
│   │   ├── LandingPage.js         # Home page with features and CTA
│   │   ├── DetectionDashboard.js  # Main analysis dashboard
│   │   ├── HistoryPage.js         # View previous analyses
│   │   └── SettingsPage.js        # User settings and preferences
│   │
│   ├── styles/                    # CSS stylesheets
│   │   ├── Navbar.css
│   │   ├── Sidebar.css
│   │   ├── TextAnalyzerInput.css
│   │   ├── ResultCard.css
│   │   ├── ConfidenceChart.css
│   │   ├── HistoryTable.css
│   │   ├── LoaderAnimation.css
│   │   ├── Footer.css
│   │   ├── LandingPage.css
│   │   ├── DetectionDashboard.css
│   │   ├── HistoryPage.css
│   │   ├── SettingsPage.css
│   │   └── (Global styles in index.css)
│   │
│   ├── utils/                     # Utility functions
│   │   └── mockAPI.js             # Mock API for testing
│   │
│   ├── App.js                     # Main App component with routing
│   ├── App.css                    # App-specific styles
│   ├── index.js                   # React DOM entry point
│   └── index.css                  # Global styles
│
├── package.json                   # Project dependencies and scripts
└── README.md                      # This file
```

## 🎨 UI/UX Design

### Color Palette
- **Primary Blue**: #2563EB (Main CTA buttons, links, accents)
- **Background**: #F8FAFC (Light mode) / #0F172A (Dark mode)
- **Cards**: #FFFFFF (Light) / #1F2937 (Dark) with subtle shadows
- **Success Green**: #22C55E (Real/Legitimate content)
- **Danger Red**: #EF4444 (Fake content)
- **Warning Orange**: #F97316 (Misleading content)

### Design Features
- Rounded corner cards (12px radius)
- Smooth hover effects with scale and shadow transitions
- Subtle animations (fade-in, slide-up, float)
- Responsive design for desktop, tablet, and mobile
- Professional typography with clear hierarchy
- Accessible color contrasts and focus states

## 📄 Pages

### 1. **Landing Page** (`/`)
- Hero section with compelling headline
- Feature cards showcasing key benefits
- "How It Works" section (3-step process)
- Call-to-action button
- Professional footer with links
- Fully responsive design

### 2. **Detection Dashboard** (`/detect`)
- Side navigation menu
- Large text input area (up to 5000 characters)
- Real-time character counter
- Analysis button with loading state
- Results display with:
  - Prediction label (Real/Fake/Misleading)
  - Confidence score with progress bars
  - Explanation of analysis
  - Detected keywords highlighting
  - Visual confidence chart (doughnut + bar)
- Copy result button

### 3. **History Page** (`/history`)
- Sortable analysis history table
- Columns: Date, Content Preview, Prediction, Confidence
- Click row to view detailed result
- Side panel showing selected result details
- Clear history button with confirmation
- Responsive table layout

### 4. **Settings Page** (`/settings`)
- Dark mode toggle
- Privacy & notification preferences
- Advanced settings
- About section with version info
- Reset to default button
- Danger zone for account actions

## 🔧 Installation & Setup

### Prerequisites
- Node.js 14+ and npm

### Steps

1. **Navigate to project directory**
```bash
cd truthlens-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```
The app will open at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
```

## 📊 API Integration

The application uses a **mock API** (`src/utils/mockAPI.js`) for demonstration. Key functions:

### `analyzeContent(text: string)`
Analyzes text and returns:
```javascript
{
  id: timestamp,
  timestamp: "3/15/2026, 2:30:45 PM",
  content: "Preview of analyzed content...",
  prediction: "Fake News", // or "Misleading Content" / "Likely Real"
  label: "fake", // or "misleading" / "real"
  confidence: 87, // percentage
  realConfidence: 13,
  fakeConfidence: 87,
  explanation: "Analysis explanation...",
  detectedKeywords: ["shocking", "must watch"]
}
```

### To integrate with real ML API:
Replace the mock logic in `mockAPI.js` with actual API calls:

```javascript
export const analyzeContent = async (text) => {
  // Call your ML model API
  const response = await fetch('https://your-api.com/analyze', {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: { 'Content-Type': 'application/json' }
  });
  
  return await response.json();
};
```

## 🎯 Component Details

### TextAnalyzerInput
- Character counter with 5000-char limit
- Disabled state during analysis
- Validation feedback
- Loading spinner

### ResultCard
- Color-coded prediction badges
- Confidence progress bars
- Explanation section with yellow highlight
- Keyword detection tags
- Copy-to-clipboard functionality
- Timestamp tracking

### ConfidenceChart
- Doughnut chart (distribution)
- Horizontal bar chart (comparison)
- Legend with color indicators
- Responsive sizing

### HistoryTable
- Sortable columns (click headers)
- Sort indicators (↑/↓)
- Hover effects
- Color-coded predictions
- Inline mini progress bars
- Clickable rows for detail view

## 🌙 Dark Mode

Dark mode is managed globally via the `App.js` state:
- Persisted to localStorage
- Applied to all components
- Smooth CSS transitions
- Different shadow values for depth
- Adjusted blues for contrast

## 📱 Responsive Design

Breakpoints:
- **Desktop**: 1024px+ (sidebar visible)
- **Tablet**: 768px - 1023px (adjusted layouts)
- **Mobile**: < 768px (stacked layouts, full-width elements)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Reduced motion support (@prefers-reduced-motion)

## 🚀 Performance Optimizations

- CSS-in-JS minimized (only CSS files)
- Efficient event handling
- Lazy loading ready
- Minimal re-renders with proper React keys
- SVG icons for scalability
- Responsive image techniques

## 📦 Available Scripts

```bash
npm start      # Start development server
npm build      # Create production build
npm test       # Run test suite
npm eject      # Expose create-react-app config (irreversible)
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
PORT=3001 npm start
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dark mode not persisting
Check if localStorage is enabled in your browser

## 📝 Future Enhancements

- [ ] Real ML model API integration
- [ ] User authentication
- [ ] Save favorite analyses
- [ ] Export results as PDF
- [ ] Browser extension version
- [ ] API endpoint for third-party integration
- [ ] Advanced filters and search
- [ ] Real-time source verification
- [ ] Multi-language support
- [ ] Batch analysis
- [ ] Custom analysis criteria
- [ ] Team collaboration features

## 📄 License

This project is open-source and available for educational and commercial use.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

## 📞 Support

For issues, questions, or feedback, please refer to the GitHub repository or contact the development team.

---

**Built with ❤️ for truth and transparency**

Version: 1.0.0
Last Updated: March 15, 2026
