import React from "react";

const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      viewBox="0 0 69 37.636"
      {...props}
    >
      <g id="SVGRepo_iconCarrier" transform="translate(0 -116.363)">
        <path
          id="Path_172"
          data-name="Path 172"
          d="M68.081,117.282a3.136,3.136,0,0,0-4.435,0L34.5,146.428,5.354,117.282a3.136,3.136,0,0,0-4.435,4.436l31.364,31.364a3.136,3.136,0,0,0,4.435,0l31.363-31.364A3.136,3.136,0,0,0,68.081,117.282Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default ArrowDown;
