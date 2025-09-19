import React from "react";

const Menu = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? "1em"}
      height={props.height ?? "1em"}
      className={`${props.className}`}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      aria-hidden="true"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fillRule="evenodd"
        stroke="none"
        d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m6 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Menu;
