const Lipsync = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      className={`${props.className}`}
      fill="none"
      {...props}
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        d="M23.69 14.625a2.812 2.812 0 1 0 0-5.625 2.812 2.812 0 0 0 0 5.625"
        width={props.width ?? 24}
        height={props.height ?? 24}
      />
      <path
        fill="currentColor"
        d="m19.808 21.57-1.586 15.846a1.44 1.44 0 0 0 2.856.38l1.518-9.122a1.106 1.106 0 0 1 2.185 0l1.519 9.122a1.44 1.44 0 0 0 2.855-.38L27.571 21.57a2.81 2.81 0 0 1 .806-2.258l4.688-6.03a1.492 1.492 0 0 0-2.323-1.87L26.752 16.2a1.3 1.3 0 0 1-.618.44c-.432.14-1.247.33-2.445.33-1.2 0-2.014-.19-2.447-.33a1.3 1.3 0 0 1-.617-.44l-3.988-4.789a1.492 1.492 0 0 0-2.325 1.871L19 19.312c.595.593.893 1.422.808 2.258"
        width={props.width ?? 24}
        height={props.height ?? 24}
      />
    </svg>
  );
};

export default Lipsync;
