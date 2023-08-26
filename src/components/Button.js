import React from "react";

export default function Button({ children, type = "primary", width }) {
    return (
        <button
            className={`h-[72px] px-[30px] text-[24px] font-bold rounded-[20px] ${
                type === "primary" ? "bg-primary text-white" : ""
            }`}
        >
            {children}
        </button>
    );
}
