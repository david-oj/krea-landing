const Image = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      fill="none"
      className={`${props.className}`}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.476 9.85a1.739 1.739 0 1 1 0-.001z"
        clipRule="evenodd"
      />
      <rect
        width="18.5"
        height="16.5"
        x="2.75"
        y="3.862"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="3.25"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.758 13.112c1.77 0 3.396 1.582 4.242 2.365v3.635H4s1.3-2.066 2.659-3.077c1.36-1.011 2.908.567 4.608.567 1.702 0 2.723-3.49 4.491-3.49"
      />
    </svg>
  );
};

export default Image;
