const Edit = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      {...props}
      viewBox="0 0 13.269 20.244"
    >
      <g id="Group_2" data-name="Group 2" transform="translate(-5.365 -2.104)">
        <path
          id="Path_3"
          data-name="Path 3"
          d="M12,2.854V5.516"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <circle
          id="Ellipse_1"
          data-name="Ellipse 1"
          cx="2.121"
          cy="2.121"
          r="2.121"
          transform="translate(9.879 6.057)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M10.487,10.1,7.46,21.43"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          id="Path_5"
          data-name="Path 5"
          d="M17.265,21.237a.75.75,0,1,1-1.45.387ZM14.238,9.907l3.027,11.33-1.45.387-3.026-11.33Z"
          fill="currentColor"
          stroke="none"
        />
        <path
          id="Path_6"
          data-name="Path 6"
          d="M6.422,16.112S7.912,17.36,12,17.36s5.578-1.25,5.578-1.25"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

export default Edit;
