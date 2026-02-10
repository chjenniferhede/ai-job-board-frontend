import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEclipse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={290}
    height={557}
    fill="none"
    {...props}
  >
    <g filter="url(#eclipse_svg__a)">
      <circle
        cx={310.5}
        cy={159.5}
        r={197.5}
        fill="url(#eclipse_svg__b)"
        fillOpacity={0.76}
      />
    </g>
    <defs>
      <linearGradient
        id="eclipse_svg__b"
        x1={310.5}
        x2={310.5}
        y1={-38}
        y2={357}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00C2FF" stopOpacity={0} />
        <stop offset={1} stopColor="#FF94E4" />
      </linearGradient>
      <filter
        id="eclipse_svg__a"
        width={795}
        height={795}
        x={-87}
        y={-238}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_604_2159"
          stdDeviation={100}
        />
      </filter>
    </defs>
  </svg>
);
export default SvgEclipse;
