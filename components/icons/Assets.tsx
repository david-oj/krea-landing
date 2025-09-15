import React from "react";

const AssetsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height   ?? 24}
      fill="currentColor"
      className={` ${props.className} `}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 5c0-.55.45-1 1-1h5.17c.41 0 .78.21.97.55l.72 1.34c.19.34.56.55.97.55H20c.55 0 1 .45 1 1V11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1z" />
      <rect width="18" height="12" x="3" y="7" rx="1" />
      <path
        d="M3.15 18.5c-.07-.35-.07-.85-.07-1.5h17.84c0 .65 0 1.15-.07 1.5z"
        opacity=".3"
      />
      <path
        d="M5 20h14c.8 0 1.2 0 1.5-.2.2-.1.4-.3.5-.6.05-.1.08-.2.1-.7H2.9c.02.5.05.6.1.7.1.3.3.5.5.6.3.2.7.2 1.5.2"
        opacity=".5"
      />
    </svg>
  );
};

export default AssetsIcon;
