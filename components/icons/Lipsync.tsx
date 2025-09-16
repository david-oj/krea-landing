const Lipsync = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
         width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      fill="none"
      {...props}
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2s-2.775-3.369-1.5-4.5"
      />
      <path
        fill="currentColor"
        d="M10.165 8.404a6.01 6.01 0 0 0 4.623 4.474l-7.958 5.89a1.19 1.19 0 0 1-1.534-.1l-.954-.925a1.107 1.107 0 0 1-.117-1.47z"
      />
      <circle cx="16.5" cy="6.5" r="5.5" fill="currentColor" />
    </svg>
  );
};

export default Lipsync;
