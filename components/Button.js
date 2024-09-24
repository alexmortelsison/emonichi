import { Fugaz_One } from "@next/font/google";
import React from "react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function Button(props) {
  const { text, dark } = props;
  return (
    <button
      className={
        "rounded-full overflow-hidden duration-200 hover:opacity-60 border border-solid border-indigo-600" +
        (dark ? " bg-indigo-600 text-white" : " text-indigo-600")
      }
    >
      <p
        style={{ fontFamily: fugaz.style.fontFamily }}
        className="px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3"
      >
        {text}
      </p>
    </button>
  );
}