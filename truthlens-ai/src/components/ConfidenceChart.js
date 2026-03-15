import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import '../styles/ConfidenceChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ConfidenceChart = ({ result, darkMode }) => {
  if (!result) return null;

  // Doughnut chart data
  const doughnutData = {
    labels: ['Likely Real', 'Likely Fake'],
    datasets: [
      {
        label: 'Confidence Distribution',
        data: [result.realConfidence, result.fakeConfidence],
        backgroundColor: ['#22c55e', '#ef4444'],
        borderColor: [darkMode ? '#1f2937' : '#ffffff', darkMode ? '#1f2937' : '#ffffff'],
        borderWidth: 3,
        hoverBorderColor: [darkMode ? '#374151' : '#f3f4f6', darkMode ? '#374151' : '#f3f4f6'],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: darkMode ? '#e5e7eb' : '#374151',
          font: {
            size: 12,
            weight: 'bold',
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label + ': ' + context.parsed + '%';
          },
        },
      },
    },
  };

  // Bar chart for comparison
  const barData = {
    labels: ['Real', 'Fake'],
    datasets: [
      {
        label: 'Confidence %',
        data: [result.realConfidence, result.fakeConfidence],
        backgroundColor: ['#22c55e', '#ef4444'],
        borderRadius: 8,
        hoverBackgroundColor: ['#16a34a', '#dc2626'],
      },
    ],
  };

  const barOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.parsed.x + '%';
          },
        },
      },
    },
    scales: {
      x: {
        max: 100,
        ticks: {
          color: darkMode ? '#e5e7eb' : '#374151',
        },
        grid: {
          color: darkMode ? '#374151' : '#e5e7eb',
        },
      },
      y: {
        ticks: {
          color: darkMode ? '#e5e7eb' : '#374151',
        },
      },
    },
  };

  return (
    <div className={`confidence-chart ${darkMode ? 'dark' : ''}`}>
      <h3 className="chart-title">📊 Analysis Breakdown</h3>

      <div className="charts-container">
        <div className="chart-wrapper doughnut-wrapper">
          <h4>Distribution</h4>
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>

        <div className="chart-wrapper bar-wrapper">
          <h4>Comparison</h4>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color real"></span>
          <span>Real: {result.realConfidence}%</span>
        </div>
        <div className="legend-item">
          <span className="legend-color fake"></span>
          <span>Fake: {result.fakeConfidence}%</span>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceChart;
