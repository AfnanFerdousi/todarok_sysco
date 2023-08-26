import React from "react";

export default function Button({ children, type = "primary", width,swidth}) {
    return (
        <button
            className={`h-16 lg:md:w-[${width}] w-[${swidth}] px-[30px] lg:md:text-[24px] text-[20px] rounded-[20px] ${
                type === "primary" ? "bg-primary text-white" : ""
            }`}
        >
            {children}
        </button>
    );
}
