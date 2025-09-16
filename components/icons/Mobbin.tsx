import React from "react";

const Mobbin = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? "139"}
      height={props.height ?? "64"}
      fill="currentCOlor"
      className={`${props.className}`}
      viewBox="0 0 139 64"
      {...props}
    >
      <path
        id="Path_3"
        data-name="Path 3"
        d="M84.35,64H48.17V47.315L32.569,64,0,63.984V29.951L28.31,0H67.444V15.921L82.688,0h33.9V26.187H139V64H99.116V48.208Z"
      />
    </svg>
  );
};

export default Mobbin;
