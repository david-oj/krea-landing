const Enhancer = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      viewBox="0 0 19.347 19.571"
      {...props}
    >
      <g id="Group_2" data-name="Group 2" transform="translate(-2.327 -2.327)">
        <path
          id="Path_2"
          data-name="Path 2"
          d="M4.5,13.008a1.6,1.6,0,0,1-1.066,1.067A1.6,1.6,0,0,1,4.5,15.142a1.6,1.6,0,0,1,1.065-1.067A1.6,1.6,0,0,1,4.5,13.008M16.37,5.574A1.6,1.6,0,0,1,15.305,6.64,1.6,1.6,0,0,1,16.37,7.707,1.6,1.6,0,0,1,17.436,6.64,1.6,1.6,0,0,1,16.37,5.574M7.821,18.449h.01M12.813,3.7H12.8"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <rect
          id="Rectangle_2"
          data-name="Rectangle 2"
          width="2.5"
          height="22.02"
          rx="1.25"
          transform="translate(3.388 5.141) rotate(-44.536)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          id="Path_3"
          data-name="Path 3"
          d="M8.4,11.31,11.255,8.5l9.016,9.163a2,2,0,1,1-2.851,2.805Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default Enhancer;
