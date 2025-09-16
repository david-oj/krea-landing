const MotionTransfer = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 28}
      height={props.height ?? 43.41}
      className={`${props.className}`}
      fill="none"
      viewBox="0 0 28 43.41"
      {...props}
    >
      <g id="Group_1" data-name="Group 1" transform="translate(-13.982 -9)">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M23.69,14.625a2.812,2.812,0,1,0-2.812-2.812,2.812,2.812,0,0,0,2.813,2.813"
          transform="translate(4.321)"
          fill="currentColor"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M22.4,26.649,20.108,50.007A2.116,2.116,0,0,0,21.9,52.392a2.089,2.089,0,0,0,2.338-1.825l2.193-13.446a1.593,1.593,0,0,1,3.157,0l2.195,13.446a2.089,2.089,0,0,0,2.337,1.824A2.115,2.115,0,0,0,35.9,50.007L33.615,26.649a4.192,4.192,0,0,1,1.164-3.328l6.773-8.888a2.23,2.23,0,0,0-.374-3.031,2.126,2.126,0,0,0-2.982.275l-5.765,7.058a1.88,1.88,0,0,1-.893.649,11.4,11.4,0,0,1-3.532.486,11.412,11.412,0,0,1-3.535-.486,1.88,1.88,0,0,1-.891-.649l-5.762-7.059a2.127,2.127,0,0,0-3.031-.335,2.23,2.23,0,0,0-.328,3.092l6.773,8.888A4.162,4.162,0,0,1,22.4,26.649"
          transform="translate(0 0)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MotionTransfer;
