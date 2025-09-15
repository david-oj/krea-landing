import React from "react";

const Gallery = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      viewBox="0 0 20.414 20.414"
      {...props}
    >
      <g id="Group_11" data-name="Group 11" transform="translate(-2 -2)">
        <rect
          id="Rectangle_2"
          data-name="Rectangle 2"
          width="18"
          height="18"
          rx="2"
          transform="translate(3 3)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <circle
          id="Ellipse_9"
          data-name="Ellipse 9"
          cx="2"
          cy="2"
          r="2"
          transform="translate(7 7)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_11"
          data-name="Path 11"
          d="M21,15l-3.086-3.086a2,2,0,0,0-2.828,0L6,21"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default Gallery;
