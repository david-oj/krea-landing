const Video = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      viewBox="0 0 21.669 15"
      {...props}
    >
      <g id="Group_1" data-name="Group 1" transform="translate(-1 -5.112)">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M22.263,7.174a1.8,1.8,0,0,0-2.52-.249l-1.226,1a1.034,1.034,0,0,0-.36.866q0,.058,0,.116v6.4q0,.062,0,.122a1.032,1.032,0,0,0,.358.865l1.214,1a1.794,1.794,0,0,0,2.928-1.385l.012-7.6a1.8,1.8,0,0,0-.406-1.14M12.644,5.112H5.682a4.216,4.216,0,0,0-4.35,4.55v5.4a4.216,4.216,0,0,0,4.35,4.55h6.961A4.217,4.217,0,0,0,17,15.062v-5.4a4.217,4.217,0,0,0-4.352-4.55"
          fillRule="evenodd"
          fill="currentColor"
          stroke="currentColor"
        />
        {/* <rect
          id="Rectangle_1"
          data-name="Rectangle 1"
          width="16"
          height="15"
          rx="4"
          transform="translate(1 5.112)"
        /> */}
      </g>
    </svg>
  );
};

export default Video;
