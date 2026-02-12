import React from 'react';

interface HorizontalDividerProps {
  length?: string | number;
  thickness?: string | number;
  className?: string;
  color?: string;
}

interface VerticalDividerProps {
  length?: string | number;
  thickness?: string | number;
  className?: string;
  color?: string;
}

/**
 * HorizontalDivider - A horizontal line divider
 * @param length - Width as percentage (0-100) or CSS length (e.g., "100%", "500px"). Default: "100%"
 * @param thickness - Height in pixels or CSS units (e.g., 1, "2px", "0.5rem"). Default: 2
 * @param className - Additional Tailwind classes
 */
export const HorizontalDivider: React.FC<HorizontalDividerProps> = ({
  length = '100%',
  thickness = 2,
  className = '',
  color,
}) => {
  const widthStyle = typeof length === 'number' ? `${length}%` : length;
  const heightStyle =
    typeof thickness === 'number' ? `${thickness}px` : thickness;

  return (
    <div
      className={`mx-auto ${className}`}
      style={{
        width: widthStyle,
        height: heightStyle,
        backgroundColor: color,
      }}
      role="separator"
      aria-hidden="true"
    />
  );
};

/**
 * VerticalDivider - A vertical line divider
 * @param length - Height as percentage (0-100) or CSS length (e.g., "100%", "500px"). Default: "100%"
 * @param thickness - Width in pixels or CSS units (e.g., 1, "2px", "0.5rem"). Default: 2
 * @param className - Additional Tailwind classes
 */
export const VerticalDivider: React.FC<VerticalDividerProps> = ({
  length = '100%',
  thickness = 2,
  className = '',
  color,
}) => {
  const heightStyle = typeof length === 'number' ? `${length}%` : length;
  const widthStyle =
    typeof thickness === 'number' ? `${thickness}px` : thickness;

  return (
    <div
      className={`mx-auto ${className}`}
      style={{
        height: heightStyle,
        width: widthStyle,
        backgroundColor: color,
      }}
      role="separator"
      aria-hidden="true"
    />
  );
};

export default { HorizontalDivider, VerticalDivider };
