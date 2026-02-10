import React from 'react';

interface MatchDoughnutProps {
  percent: number;
  size?: number; // px
  strokeWidth?: number; // px
  className?: string;
}

const MatchDoughnut: React.FC<MatchDoughnutProps> = ({
  percent,
  size = 112,
  strokeWidth = 10,
  className = '',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference * (1 - Math.max(0, Math.min(100, percent)) / 100);

  // Color mapping (match -> color)
  const getColor = (p: number) => {
    if (p >= 80) return '#B9FD33'; // green
    if (p >= 60) return '#FFD035'; // orange
    return '#FFD035';
  };

  const progressColor = getColor(percent);
  const bgColor = '#E5E7EB'; // tailwind gray-200

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      role="img"
      aria-label={`Match ${percent} percent`}
    >
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        <circle
          r={radius}
          fill="transparent"
          stroke={bgColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        <circle
          r={radius}
          fill="transparent"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-320)"
        />
      </g>
    </svg>
  );
};

export default MatchDoughnut;
