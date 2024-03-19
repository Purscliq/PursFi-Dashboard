import React from "react";

const Cliq = ({ ...props }: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_2164_42531)">
        <path
          d="M21.5 7.28V5C21.5 3.9 20.6 3 19.5 3H5.5C4.39 3 3.5 3.9 3.5 5V19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V16.72C22.09 16.37 22.5 15.74 22.5 15V9C22.5 8.26 22.09 7.63 21.5 7.28ZM20.5 9V15H13.5V9H20.5ZM5.5 19V5H19.5V7H13.5C12.4 7 11.5 7.9 11.5 9V15C11.5 16.1 12.4 17 13.5 17H19.5V19H5.5Z"
          fill="black"
        />
        <path
          d="M16.5 13.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_2164_42531">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Cliq;
