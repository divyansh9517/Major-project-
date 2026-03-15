// Mock API Service for TruthLens AI
// In production, replace this with actual ML model API calls

// Initialize with dummy data if history is empty
const initializeDummyData = () => {
  const dummyResults = [
    {
      id: Date.now() - 500000,
      timestamp: '3/15/2026, 2:30:45 PM',
      content: 'Breaking News: Scientists discover shocking new cure for cancer that big pharma doesn\'t want you to know about...',
      prediction: 'Fake News',
      label: 'fake',
      confidence: 92.5,
      realConfidence: 7.5,
      fakeConfidence: 92.5,
      explanation: 'Analysis detected 4 suspicious element(s): breaking, shocking, cure. The content uses inflammatory language.',
      detectedKeywords: ['breaking', 'shocking', 'cure'],
    },
    {
      id: Date.now() - 450000,
      timestamp: '3/15/2026, 1:45:30 PM',
      content: 'New Study Suggests Coffee May Have Health Benefits According to Recent Research Published in...',
      prediction: 'Likely Real',
      label: 'real',
      confidence: 18.5,
      realConfidence: 81.5,
      fakeConfidence: 18.5,
      explanation: 'Analysis detected 0 suspicious element(s): none. The content uses neutral language and contains limited text.',
      detectedKeywords: [],
    },
    {
      id: Date.now() - 400000,
      timestamp: '3/15/2026, 12:20:15 PM',
      content: 'SHOCKING: Celebrity reveals they never secretly quit Hollywood - insiders claim this is bombshell proof...',
      prediction: 'Fake News',
      label: 'fake',
      confidence: 88.3,
      realConfidence: 11.7,
      fakeConfidence: 88.3,
      explanation: 'Analysis detected 5 suspicious element(s): shocking, bombshell, insiders claim. The content uses inflammatory language.',
      detectedKeywords: ['shocking', 'bombshell', 'insiders claim'],
    },
    {
      id: Date.now() - 350000,
      timestamp: '3/15/2026, 11:00:45 AM',
      content: 'Market Analysis: Tech stocks show mixed performance this week with some analysts predicting growth while others...',
      prediction: 'Likely Real',
      label: 'real',
      confidence: 22.1,
      realConfidence: 77.9,
      fakeConfidence: 22.1,
      explanation: 'Analysis detected 0 suspicious element(s): none. The content uses neutral language and contains extensive text.',
      detectedKeywords: [],
    },
    {
      id: Date.now() - 300000,
      timestamp: '3/15/2026, 9:35:20 AM',
      content: 'Influencer claims this one weird trick doctors hate will help you lose weight - guaranteed results in days...',
      prediction: 'Fake News',
      label: 'fake',
      confidence: 85.7,
      realConfidence: 14.3,
      fakeConfidence: 85.7,
      explanation: 'Analysis detected 4 suspicious element(s): guarantee, hate, weird, days. The content uses inflammatory language.',
      detectedKeywords: ['guarantee', 'doctors hate', 'weird trick'],
    },
    {
      id: Date.now() - 250000,
      timestamp: '3/15/2026, 8:15:00 AM',
      content: 'Government Reports Record Economic Growth - Official Statistics Show Increase in GDP and Employment Rates...',
      prediction: 'Likely Real',
      label: 'real',
      confidence: 15.8,
      realConfidence: 84.2,
      fakeConfidence: 15.8,
      explanation: 'Analysis detected 0 suspicious element(s): none. The content uses neutral language and contains extensive text.',
      detectedKeywords: [],
    },
    {
      id: Date.now() - 200000,
      timestamp: '3/14/2026, 6:50:30 PM',
      content: 'ALERT: Chemical in your drinking water is causing serious health problems according to anonymous sources...',
      prediction: 'Fake News',
      label: 'fake',
      confidence: 81.9,
      realConfidence: 18.1,
      fakeConfidence: 81.9,
      explanation: 'Analysis detected 3 suspicious element(s): alert, according to sources, anonymous sources. The content uses inflammatory language.',
      detectedKeywords: ['alert', 'anonymous sources'],
    },
    {
      id: Date.now() - 150000,
      timestamp: '3/14/2026, 4:30:45 PM',
      content: 'Technology Review: Latest smartphone features compared across different brands with performance benchmarks...',
      prediction: 'Likely Real',
      label: 'real',
      confidence: 19.5,
      realConfidence: 80.5,
      fakeConfidence: 19.5,
      explanation: 'Analysis detected 0 suspicious element(s): none. The content uses neutral language and contains extensive text.',
      detectedKeywords: [],
    },
    {
      id: Date.now() - 100000,
      timestamp: '3/14/2026, 3:12:20 PM',
      content: 'You won\'t BELIEVE what celebrities are hiding - exclusive exposé reveals unbelievable secrets...',
      prediction: 'Fake News',
      label: 'fake',
      confidence: 89.1,
      realConfidence: 10.9,
      fakeConfidence: 89.1,
      explanation: 'Analysis detected 4 suspicious element(s): believe, exposé, unbelievable, hiding. The content uses inflammatory language.',
      detectedKeywords: ['believe', 'exposé', 'unbelievable'],
    },
    {
      id: Date.now() - 50000,
      timestamp: '3/14/2026, 2:00:15 PM',
      content: 'Climate Study: Researchers analyze global temperature trends over the past century using satellite data...',
      prediction: 'Likely Real',
      label: 'real',
      confidence: 12.3,
      realConfidence: 87.7,
      fakeConfidence: 12.3,
      explanation: 'Analysis detected 0 suspicious element(s): none. The content uses neutral language and contains extensive text.',
      detectedKeywords: [],
    },
  ];

  const existingHistory = JSON.parse(localStorage.getItem('truthlensHistory'));
  if (!existingHistory || existingHistory.length === 0) {
    localStorage.setItem('truthlensHistory', JSON.stringify(dummyResults));
    return dummyResults;
  }
  return existingHistory;
};

let analyzedHistory = initializeDummyData();

// Suspicious keywords and patterns that might indicate misinformation
const suspiciousPatterns = {
  sensational: ['shocking', 'must watch', 'breaking', 'exposé', 'scandal', 'bombshell', 'unbelievable'],
  absoluteLanguage: ['always', 'never', 'all', 'none', 'guarantee', 'proof'],
  emotionalWords: ['devastating', 'horrifying', 'outrageous', 'disgusting', 'incredible'],
  fakeSources: ['reliable sources say', 'insiders claim', 'anonymous sources', 'according to sources'],
};

export const analyzeContent = async (text) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Calculate fake probability based on text analysis
  let fakeScore = 0;
  const detectedKeywords = [];

  // Check for suspicious patterns
  Object.entries(suspiciousPatterns).forEach(([category, keywords]) => {
    keywords.forEach((keyword) => {
      if (text.toLowerCase().includes(keyword)) {
        fakeScore += 0.1;
        if (!detectedKeywords.includes(keyword)) {
          detectedKeywords.push(keyword);
        }
      }
    });
  });

  // Add some randomness for demonstration
  fakeScore = Math.min(fakeScore + Math.random() * 0.3, 0.95);

  // Determine prediction label
  let prediction, label;
  if (fakeScore > 0.65) {
    prediction = 'Fake News';
    label = 'fake';
  } else if (fakeScore > 0.4) {
    prediction = 'Misleading Content';
    label = 'misleading';
  } else {
    prediction = 'Likely Real';
    label = 'real';
  }

  const confidence = (fakeScore * 100).toFixed(2);
  const realConfidence = ((1 - fakeScore) * 100).toFixed(2);

  const explanation = `
    Analysis detected ${detectedKeywords.length} suspicious element(s): ${
    detectedKeywords.length > 0 ? detectedKeywords.join(', ') : 'none'
  }. 
    The content uses ${fakeScore > 0.5 ? 'inflammatory language' : 'neutral language'} and contains 
    ${text.split(' ').length > 200 ? 'extensive text' : 'limited text'} for thorough analysis.
  `;

  const result = {
    id: Date.now(),
    timestamp: new Date().toLocaleString(),
    content: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
    prediction,
    label,
    confidence: parseFloat(confidence),
    realConfidence: parseFloat(realConfidence),
    fakeConfidence: parseFloat(confidence),
    explanation: explanation.trim(),
    detectedKeywords,
  };

  // Store in history
  analyzedHistory.unshift(result);
  localStorage.setItem('truthlensHistory', JSON.stringify(analyzedHistory.slice(0, 50))); // Keep last 50

  return result;
};

export const getHistory = () => {
  return analyzedHistory;
};

export const clearHistory = () => {
  analyzedHistory.length = 0;
  localStorage.removeItem('truthlensHistory');
};
