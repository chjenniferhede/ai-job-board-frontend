import * as React from 'react';
import type { SVGProps } from 'react';

// Jobs Icon (Menu1)
export const JobsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.833}
      d="M19.117 6.417H4.45c-1.012 0-1.833.82-1.833 1.833v9.167c0 1.012.82 1.833 1.833 1.833h14.667c1.012 0 1.833-.82 1.833-1.833V8.25c0-1.013-.82-1.833-1.833-1.833"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.833}
      d="M15.45 19.25V4.583a1.833 1.833 0 0 0-1.833-1.833H9.95a1.833 1.833 0 0 0-1.833 1.833V19.25"
    />
  </svg>
);

// AI Mock Interview Icon (Menu2)
export const AiMockInterviewIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.833}
      clipPath="url(#menu-2_svg__a)"
    >
      <path d="M5.306 14.667H4.39a1.833 1.833 0 0 1-1.833-1.834V3.666A1.833 1.833 0 0 1 4.39 1.833h14.667a1.833 1.833 0 0 1 1.834 1.833v9.167a1.833 1.833 0 0 1-1.834 1.833h-.916" />
      <path d="m11.722 12.833 4.583 5.5H7.138z" />
    </g>
    <defs>
      <clipPath id="menu-2_svg__a">
        <path fill="#fff" d="M0 0h22v20.167H0z" />
      </clipPath>
    </defs>
  </svg>
);

// Resume Icon (Menu4)
export const ResumeIcon = (props: IconProps) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.8334 1.83333H5.50008C5.01385 1.83333 4.54754 2.02648 4.20372 2.3703C3.8599 2.71412 3.66675 3.18043 3.66675 3.66666V18.3333C3.66675 18.8196 3.8599 19.2859 4.20372 19.6297C4.54754 19.9735 5.01385 20.1667 5.50008 20.1667H16.5001C16.9863 20.1667 17.4526 19.9735 17.7964 19.6297C18.1403 19.2859 18.3334 18.8196 18.3334 18.3333V7.33333L12.8334 1.83333Z"
        stroke="currentColor"
        strokeWidth={1.83333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8333 1.83333V7.33333H18.3333"
        stroke="currentColor"
        strokeWidth={1.83333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6666 11.9167H7.33325"
        stroke="currentColor"
        strokeWidth={1.83333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6666 15.5833H7.33325"
        stroke="currentColor"
        strokeWidth={1.83333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16659 8.25H8.24992H7.33325"
        stroke="currentColor"
        strokeWidth={1.83333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#menu-4_svg__a)">
      <g clipPath="url(#menu-4_svg__b)">
        <g clipPath="url(#menu-4_svg__c)">
          <g clipPath="url(#menu-4_svg__d)">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.667}
              d="m20.221 9.208-7.658 7.658a5.003 5.003 0 1 1-7.075-7.074l7.658-7.659a3.335 3.335 0 1 1 4.717 4.717l-7.667 7.658a1.668 1.668 0 0 1-2.358-2.358l7.075-7.067"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="menu-4_svg__a">
        <path fill="#fff" d="M0 0h24.714v20H0z" />
      </clipPath>
      <clipPath id="menu-4_svg__b">
        <path fill="#fff" d="M.786 0h23.143v20H.786z" />
      </clipPath>
      <clipPath id="menu-4_svg__c">
        <path fill="#fff" d="M1.571 0h21.571v20H1.572z" />
      </clipPath>
      <clipPath id="menu-4_svg__d">
        <path fill="#fff" d="M2.357 0h20v20h-20z" />
      </clipPath>
    </defs>
  </svg>
);

// Settings Icon (Menu5)
export const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#menu-5_svg__a)">
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.833}
        clipPath="url(#menu-5_svg__b)"
      >
        <path d="M11.786 13.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5" />
        <path d="M18.57 13.75a1.51 1.51 0 0 0 .302 1.668l.055.055a1.836 1.836 0 0 1-2 2.992 1.8 1.8 0 0 1-.595-.398l-.055-.055a1.51 1.51 0 0 0-1.668-.302 1.51 1.51 0 0 0-.917 1.384v.156a1.834 1.834 0 0 1-3.666 0v-.082a1.51 1.51 0 0 0-.99-1.385 1.51 1.51 0 0 0-1.669.303l-.055.055a1.833 1.833 0 1 1-2.594-2.594l.055-.055a1.51 1.51 0 0 0 .303-1.669 1.51 1.51 0 0 0-1.384-.916h-.156a1.833 1.833 0 0 1 0-3.667h.082a1.51 1.51 0 0 0 1.384-.99A1.51 1.51 0 0 0 4.7 6.582l-.055-.055a1.833 1.833 0 1 1 2.594-2.595l.055.055a1.51 1.51 0 0 0 1.668.303h.074a1.51 1.51 0 0 0 .916-1.384V2.75a1.833 1.833 0 1 1 3.667 0v.082a1.51 1.51 0 0 0 .917 1.385 1.51 1.51 0 0 0 1.668-.303l.055-.055a1.832 1.832 0 0 1 2.992.595 1.83 1.83 0 0 1-.398 2l-.055.054a1.51 1.51 0 0 0-.302 1.669v.073a1.51 1.51 0 0 0 1.384.917h.156a1.833 1.833 0 1 1 0 3.666h-.083a1.51 1.51 0 0 0-1.384.917" />
      </g>
    </g>
    <defs>
      <clipPath id="menu-5_svg__a">
        <path fill="#fff" d="M0 0h23.571v22H0z" />
      </clipPath>
      <clipPath id="menu-5_svg__b">
        <path fill="#fff" d="M.786 0h22v22h-22z" />
      </clipPath>
    </defs>
  </svg>
);

// Subscription Icon (Menu6)
export const SubscriptionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.5 1.5a.75.75 0 0 0-.75.75v19.5a.75.75 0 0 0 1.057.685l7.006-3.137 7.005 3.137a.75.75 0 0 0 1.055-.63l.002-.055V2.25a.75.75 0 0 0-.75-.75zM5.25 3h13.125v17.592l-6.256-2.8a.75.75 0 0 0-.547-.026l-.066.026-6.256 2.8zm7.227 4.153a.75.75 0 0 0-1.329 0l-.91 1.742-1.938.327a.75.75 0 0 0-.45 1.223l.038.041 1.377 1.404-.288 1.944A.75.75 0 0 0 10 14.64l.051-.022 1.76-.876 1.76.875a.75.75 0 0 0 1.083-.725l-.007-.056-.288-1.945 1.377-1.403a.75.75 0 0 0-.355-1.253l-.056-.012-1.939-.327zm-.665 1.967.418.8a.75.75 0 0 0 .54.393l.89.15-.632.644a.75.75 0 0 0-.213.571l.007.063.133.893-.809-.402a.75.75 0 0 0-.604-.028l-.063.028-.808.402.132-.893a.75.75 0 0 0-.164-.587l-.042-.047-.632-.645.89-.15a.75.75 0 0 0 .508-.337l.032-.055z"
    />
  </svg>
);

// Extra Credits Icon (Menu7)
export const ExtraCreditsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#menu-7_svg__a)">
      <g fill="currentColor" clipPath="url(#menu-7_svg__b)">
        <path d="M11.33 18.112c.663 0 1.206-.537 1.206-1.194v-4.18h4.22c.663 0 1.205-.538 1.205-1.195 0-.656-.542-1.194-1.205-1.194h-4.22V6.17c0-.657-.543-1.195-1.206-1.195s-1.206.538-1.206 1.195v4.18h-4.22c-.663 0-1.206.537-1.206 1.194s.543 1.195 1.206 1.195h4.22v4.18c0 .657.543 1.194 1.206 1.194M22.5 8.689l-.096-.048a2.1 2.1 0 0 1-.91-.902l-.048-.095a.528.528 0 0 0-.935 0l-.048.095a2.1 2.1 0 0 1-.91.902l-.097.048a.518.518 0 0 0 0 .926l.097.047c.392.197.705.514.91.902l.048.096a.528.528 0 0 0 .935 0l.048-.096c.199-.388.518-.699.91-.902l.097-.047a.518.518 0 0 0 0-.926M13.892 6.139l.193.096a3.16 3.16 0 0 1 1.392 1.379l.097.191a1.93 1.93 0 0 0 1.73 1.045c.736 0 1.393-.4 1.73-1.045l.097-.191a3.16 3.16 0 0 1 1.392-1.38l.193-.095a1.91 1.91 0 0 0 1.055-1.714c0-.728-.404-1.38-1.055-1.714l-.193-.095a3.16 3.16 0 0 1-1.392-1.38l-.097-.19A1.93 1.93 0 0 0 17.31 0c-.73 0-1.392.4-1.73 1.045l-.097.191a3.16 3.16 0 0 1-1.392 1.38l-.193.095a1.91 1.91 0 0 0-1.055 1.708c0 .723.404 1.38 1.055 1.714zm.82-1.827.193-.096a4.94 4.94 0 0 0 2.182-2.162l.096-.19s.037-.072.115-.072.109.047.115.071l.096.191a4.94 4.94 0 0 0 2.182 2.162l.193.096s.073.035.073.113a.115.115 0 0 1-.073.114l-.193.095a4.94 4.94 0 0 0-2.182 2.162l-.096.191s-.037.072-.115.072-.108-.054-.114-.072l-.097-.191a4.94 4.94 0 0 0-2.182-2.162l-.193-.095s-.072-.036-.072-.114.054-.107.072-.113" />
        <path d="M21.012 11.848a.9.9 0 0 0-1.007.776c-.543 4.318-4.274 7.579-8.675 7.579-4.823 0-8.742-3.882-8.742-8.66 0-4.777 3.919-8.659 8.742-8.659.18 0 .367 0 .548.018a.897.897 0 0 0 .959-.836.9.9 0 0 0-.844-.95c-.217-.011-.44-.017-.657-.017-5.818 0-10.55 4.688-10.55 10.45C.786 17.312 5.518 22 11.336 22c5.311 0 9.814-3.93 10.466-9.143a.896.896 0 0 0-.784-.997z" />
      </g>
    </g>
    <defs>
      <clipPath id="menu-7_svg__a">
        <path fill="#fff" d="M0 0h23.571v22H0z" />
      </clipPath>
      <clipPath id="menu-7_svg__b">
        <path fill="#fff" d="M.786 0h22v22h-22z" />
      </clipPath>
    </defs>
  </svg>
);
