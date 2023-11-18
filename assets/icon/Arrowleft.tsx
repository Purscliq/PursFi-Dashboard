import React from "react";
import { Icon } from "./type";

const Arrowleft = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-2.03627e-05 0.942603L5.73697 6.6796L0.46667 6.6796L0.471384 8.01367L8.01385 8.01367L8.01386 0.4712L6.6845 0.471199L6.67978 5.73679L0.942789 -0.000205658L-2.03627e-05 0.942603Z"
        fill="#F9FFFF"
      />
    </svg>
  );
};

export default Arrowleft;
