import React from "react";

const Upgrade = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      viewBox="0 0 19.5 19.5"
      {...props}
    >
      <path
        id="Path_1"
        data-name="Path 1"
        d="M12,3,10.088,8.813a2,2,0,0,1-1.275,1.275L3,12l5.813,1.912a2,2,0,0,1,1.275,1.275L12,21l1.912-5.813a2,2,0,0,1,1.275-1.275L21,12l-5.813-1.912a2,2,0,0,1-1.275-1.275ZM5,3V7M19,17v4M3,5H7M17,19h4"
        transform="translate(-2.25 -2.25)"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Upgrade;
