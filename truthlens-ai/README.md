# TruthLens AI - Misinformation Detection System

**An advanced AI-powered web application for detecting misinformation in news articles, social media posts, and online content.**

## 🎯 Overview

TruthLens AI is a modern, professional SaaS-style web interface built with React.js that uses artificial intelligence to detect fake news and misleading content. The application provides users with detailed credibility scores, confidence metrics, and explanations for why content may be misinformation.

### ✨ Key Features

✨ **AI-Powered Analysis** - Advanced machine learning algorithms analyze content in real-time  
⭐ **Credibility Scoring** - Get detailed credibility scores based on multiple factors  
⚡ **Real-time Detection** - Instant analysis of news articles and social media posts  
📊 **Explainable Results** - Understand why content is marked as real or fake  
🌙 **Dark Mode** - Toggle between light and dark themes for comfortable viewing  
📋 **Analysis History** - Keep track of all your previous analyses with 10 dummy examples included  
🎨 **Modern UI** - Clean, professional design similar to ChatGPT, Perplexity AI, and Notion AI  
📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices  
📚 **Comprehensive Docs** - Built-in documentation page with guides and tutorials  
ℹ️ **About Page** - Learn about the project, mission, and technology

## 🛠️ Technology Stack

- **Frontend Framework**: React.js 18.3.1
- **Routing**: React Router v6.22.0
- **Styling**: Plain CSS (No Tailwind)
- **Charts**: Chart.js 4.5.1 with react-chartjs-2 5.3.1
- **State Management**: React Hooks
- **API**: Mock API with 10 sample results (replaceable with real ML model API)
- **Build Tool**: Create React App with react-scripts 5.0.1
- **Data Storage**: localStorage (client-side, no external servers)

## 📁 Project Structure

```
truthlens-ai/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/                # Reusable React components
│   │   ├── Navbar.js              # Navigation bar with dark mode toggle
│   │   ├── Sidebar.js             # Side navigation menu (6 routes)
│   │   ├── TextAnalyzerInput.js   # Main text input component
│   │   ├── ResultCard.js          # Result display card
│   │   ├── ConfidenceChart.js     # Dual chart visualizations
│   │   ├── HistoryTable.js        # Sortable analysis history table
│   │   ├── LoaderAnimation.js     # Loading animation
│   │   └── Footer.js              # Footer component
│   │
│   ├── pages/                     # Page components (6 pages)
│   │   ├── LandingPage.js         # Home page with features and CTA
│   │   ├── DetectionDashboard.js  # Main analysis dashboard
│   │   ├── HistoryPage.js         # View previous analyses
│   │   ├── SettingsPage.js        # User settings and preferences
│   │   ├── DocsPage.js            # Complete documentation (NEW)
│   │   └── AboutPage.js           # About & mission (NEW)
│   │
│   ├── styles/                    # CSS stylesheets (13 files)
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
│   │   ├── DocsPage.css
│   │   ├── AboutPage.css
│   │   └── index.css (global styles)
│   │
│   ├── utils/                     # Utility functions
│   │   └── mockAPI.js             # Mock API with 10 sample results
│   │
│   ├── App.js                     # Main App component with routing
│   ├── index.js                   # React DOM entry point
│   └── index.css                  # Global styles
│
├── package.json                   # Project dependencies and scripts
├── README.md                      # This file
└── public/index.html              # HTML template
```

## 🎨 UI/UX Design

### Color Palette
- **Primary Blue**: #2563EB (Main CTA buttons, links, accents)
- **Background**: #F8FAFC (Light mode) / #0F172A (Dark mode)
- **Cards**: #FFFFFF (Light) / #1F2937 (Dark) with subtle shadows
- **Success Green**: #22C55E (Real/Legitimate content)
- **Danger Red**: #EF4444 (Fake content)
- **Warning Yellow**: #EAB308 (Misleading content)

### Design Features
- Rounded corner cards (12px radius)
- Smooth hover effects with scale and shadow transitions
- Subtle animations (fade-in, slide-up, float)
- Responsive design for desktop, tablet, and mobile
- Professional typography with clear hierarchy
- Accessible color contrasts and focus states
- Flexbox-based layout for proper spacing and alignment

## 📄 Pages & Routes

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
  - Prediction label (Real/Fake/Misleading) with color coding
  - Confidence score with progress bars
  - Explanation of analysis
  - Detected keywords highlighting
  - Dual visualization charts:
    - Doughnut chart showing confidence distribution
    - Bar chart for real vs. fake comparison
- Copy result button

### 3. **History Page** (`/history`)
- Displays all 10 pre-loaded dummy results + user analyses
- Sortable analysis history table
- Columns: Date, Content Preview, Prediction, Confidence
- Click row to view detailed result with full breakdown
- Side panel showing selected result details
- Clear history button with confirmation dialog
- Responsive table layout for mobile
- Color-coded prediction badges

### 4. **Settings Page** (`/settings`)
- Dark mode toggle
- Privacy & notification preferences
- Advanced settings
- About section with version info
- Reset to default button
- User-friendly panel-based layout
- Dark mode support throughout

### 5. **Documentation Page** (`/docs`) - NEW!
- Getting started guide
- Understanding confidence scores
- Usage guide for each feature
- Best practices for fact-checking
- Frequently asked questions (FAQ)
- Support information
- Comprehensive tutorials

### 6. **About Page** (`/about`) - NEW!
- Mission statement
- 6 key features highlighted
- How the system works (4-step process diagram)
- Technology stack details
- Privacy & security information
- Team & vision section
- Contact information and links

## 🔧 Installation & Setup

### Prerequisites
- Node.js 14+ and npm 6+

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

5. **Alternative port (if 3000 is taken)**
```bash
PORT=3001 npm start
```

## 📊 Dummy Data & Sample Results

The application comes pre-loaded with **10 realistic dummy detection results** in the History page:

### Fake News Examples:
- "Breaking News: Scientists discover shocking new cure for cancer..." - 92.5% fake
- "SHOCKING: Celebrity reveals they never secretly quit Hollywood..." - 88.3% fake
- "Influencer claims this one weird trick doctors hate..." - 85.7% fake
- "ALERT: Chemical in your drinking water is causing serious health problems..." - 81.9% fake
- "You won't BELIEVE what celebrities are hiding - exclusive exposé..." - 89.1% fake

### Legitimate Content Examples:
- "New Study Suggests Coffee May Have Health Benefits..." - 18.5% fake (81.5% real)
- "Market Analysis: Tech stocks show mixed performance..." - 22.1% fake
- "Government Reports Record Economic Growth..." - 15.8% fake
- "Technology Review: Latest smartphone features compared..." - 19.5% fake
- "Climate Study: Researchers analyze global temperature trends..." - 12.3% fake

All dummy data is stored in **localStorage** and automatically loads on first visit.

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
  confidence: 87, // percentage (fake confidence)
  realConfidence: 13,
  fakeConfidence: 87,
  explanation: "Analysis explanation with detected keywords...",
  detectedKeywords: ["shocking", "must watch", "breaking"]
}
```

### Detected Patterns

The analyzer checks for suspicious patterns:

**Sensational Words:**
- "shocking", "must watch", "breaking", "exposé", "scandal", "bombshell", "unbelievable"

**Absolute Language:**
- "always", "never", "all", "none", "guarantee", "proof"

**Emotional Words:**
- "devastating", "horrifying", "outrageous", "disgusting", "incredible"

**Unverifiable Sources:**
- "reliable sources say", "insiders claim", "anonymous sources", "according to sources"

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
- Loading spinner with animation
- Clear button

### ResultCard
- Color-coded prediction badges (green/yellow/red)
- Confidence progress bars
- Explanation section with color highlight
- Keyword detection tags
- Copy-to-clipboard functionality
- Timestamp tracking
- Full analysis metadata

### ConfidenceChart (Dual Charts)
- Doughnut chart (pie) showing distribution (Real vs Fake %)
- Horizontal bar chart for easy comparison
- Interactive legend with color indicators
- Responsive sizing for all devices
- Dark mode color adjustments
- Tooltip information on hover

### HistoryTable
- Sortable columns (click headers to sort)
- Sort indicators (↑/↓)
- Hover effects for better UX
- Color-coded predictions with badges
- Inline mini progress bars
- Clickable rows for detail view
- Responsive design for mobile

### Sidebar Navigation
- 6 navigation items:
  - ✨ New Analysis
  - 📋 History
  - ⚙️ Settings
  - 📚 Documentation
  - ℹ️ About
- Fixed positioning with flexbox layout
- Dark mode support
- Smooth hover effects
- Mobile-friendly responsive design

### Navbar
- Logo with home link
- Navigation links for all pages
- Dark mode toggle button
- Hamburger menu for mobile
- Mobile-responsive dropdown menu

## 🌙 Dark Mode

Dark mode is managed globally via the `App.js` state:
- Persisted to localStorage as 'truthlensDarkMode'
- Applied to all components via CSS classes
- Smooth CSS transitions (0.3s)
- Different shadow values for depth perception
- Adjusted colors for WCAG contrast compliance
- Toggle available in Navbar and Settings

## 📱 Responsive Design

Breakpoints & Layout:
- **Desktop (1024px+)**: Sidebar visible on left, main content on right
- **Tablet (768px - 1023px)**: Adjusted fonts and spacing
- **Mobile (< 768px)**: Sidebar and content stack vertically

Layout approach: **Flexbox**
- `.detection-dashboard` using `display: flex; flex-direction: column`
- `.dashboard-container` using `display: flex; flex-direction: row`
- Sidebar with `position: relative` and `flex-shrink: 0`
- Main content with `flex: 1` for remaining space

## 🔒 Privacy & Security

- ✅ **No Data Collection** - We don't collect or store personal information
- ✅ **Local Processing** - All analysis happens on your device
- ✅ **No External Calls** - Your content never leaves your browser
- ✅ **localStorage Only** - Data persists only on your device
- ✅ **User Control** - Clear all data anytime with one button

## ♿ Accessibility

- Semantic HTML structure (header, nav, main, footer)
- ARIA labels on interactive elements
- Keyboard navigation support (Tab, Enter)
- Focus visible states on all interactive elements
- Color contrast compliance (WCAG AA)
- Readable font sizes (14px minimum)
- Sufficient spacing for touch targets

## 🚀 Performance Optimizations

- CSS-in-JS minimized (only external CSS files)
- Efficient event handling with proper cleanup
- Lazy loading ready for future implementation
- Minimal re-renders with proper React keys
- Optimized images and SVG icons
- Responsive image techniques
- Chart.js registration with ArcElement (fixes doughnut charts)

## 📦 Available Scripts

```bash
npm start      # Start development server on port 3000
npm run build  # Create production build in ./build/
npm test       # Run test suite
npm run eject  # Expose create-react-app config (irreversible!)
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
- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Check browser privacy settings

### Charts not rendering
- Ensure Chart.js and react-chartjs-2 are installed: `npm install chart.js react-chartjs-2`
- Check that ArcElement is registered for Doughnut charts
- Clear browser cache and refresh

### Dummy data not showing
- Dummy data loads on first visit from mockAPI.js
- Check History page (`/history`)
- Check browser localStorage permissions
- Dummy data is stored under 'truthlensHistory' key

## 📝 Future Enhancements

- [ ] Real ML model API integration
- [ ] User authentication & accounts
- [ ] Save favorite analyses
- [ ] Export results as PDF
- [ ] Browser extension version
- [ ] Advanced filters and search
- [ ] Real-time source verification
- [ ] Multi-language support
- [ ] Batch analysis
- [ ] Custom analysis criteria
- [ ] Team collaboration features
- [ ] Mobile app (iOS/Android)
- [ ] API endpoint for third-party use
- [ ] Advanced analytics dashboard

## 📄 License

This project is open-source and available for educational and commercial use.

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Submit issues and bug reports
- Suggest enhancement requests
- Create pull requests with improvements
- Share feedback and ideas

## 📞 Support & Contact

- **GitHub Issues**: Report bugs and feature requests
- **Documentation**: Built-in Docs page in the app
- **About Page**: Contains team and contact information
- **Version**: 1.0.0
- **Last Updated**: March 15, 2026

## 🎓 Learning Resources

### Fact-Checking References
- [Stanford Internet Observatory](https://io.stanford.edu)
- [Poynter Institute](https://www.poynter.org)
- [First Draft News](https://firstdraftnews.org)

### React Documentation
- [React Official Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Chart.js](https://www.chartjs.org)

---

**Built with ❤️ for truth and transparency in the digital age**

**Version**: 1.0.0  
**Last Updated**: March 15, 2026  
**Status**: Active Development

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
