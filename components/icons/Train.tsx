import React from "react";
import brain from "@/assets/images/colorful-brain.png";

const Train = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.width ?? 28}
      height={props.height ?? 28}
      className={`${props.className}`}
      viewBox="0 0 28.389 28.395"
    >
      <defs>
        <clipPath id="clip-path">
          <circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="10.167"
            cy="10.167"
            r="10.167"
            fill="none"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient"
          x2="0"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#fff" stop-opacity="0.6" />
          <stop offset="0.75" stop-color="#fff" stop-opacity="0.149" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <pattern
          id="pattern"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 837 982"
        >
          <image width="837" height="982" xlinkHref={brain.src} />
        </pattern>
      </defs>
      <g id="Group_2" data-name="Group 2" transform="translate(-1.992 -2.112)">
        <g
          id="Group_1"
          data-name="Group 1"
          transform="translate(6.02 5.967)"
          clip-path="url(#clip-path)"
        >
          <rect
            id="Rectangle_1"
            data-name="Rectangle 1"
            width="20.335"
            height="20.335"
            fill="none"
          />
        </g>
        <circle
          id="Ellipse_2"
          data-name="Ellipse 2"
          cx="8.715"
          cy="8.715"
          r="8.715"
          transform="translate(7.473 7.42)"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_1"
          data-name="Path 1"
          d="M22.905,27.933A13.436,13.436,0,0,1,6.687,6.8M27.822,9.58A13.436,13.436,0,0,1,25.687,25.8m-9.5-22.936a13.434,13.434,0,0,1,9.5,3.935M9.47,4.662A13.508,13.508,0,0,1,12.709,3.32"
          transform="translate(0 0)"
          fill="none"
          stroke="#afadad"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
      <rect
        id="Picsart_25-09-16_09-16-23-630"
        width="23"
        height="25.324"
        transform="translate(2.692 1.526)"
        fill="url(#pattern)"
      />
    </svg>
  );
};

export default Train;
