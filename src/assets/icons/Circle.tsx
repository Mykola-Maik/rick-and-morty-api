export const Circle = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="250" 
      height="250" 
      viewBox="0 0 250 250" 
      fill="none"
      style={{
        position: "absolute",
        top: -70,
        left: -80,
      }}
    >
      <g filter="url(#filter0_f_108_3185)">
        <circle cx="125" cy="125" r="41" fill="url(#paint0_linear_108_3185)" fill-opacity="0.8"/>
      </g>
      <defs>
        <filter id="filter0_f_108_3185" x="0" y="0" width="250" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="42" result="effect1_foregroundBlur_108_3185"/>
        </filter>
        <linearGradient id="paint0_linear_108_3185" x1="169" y1="84" x2="84" y2="163.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}