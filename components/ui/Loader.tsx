import { anonymousMessageLogic } from "@/utils/logics/anonymousMessageLogic";
import React from "react";

function Loader({ label = "Loading..." }: { label?: string }) {
    const { messages } = anonymousMessageLogic()

    return (
        <section className="w-full h-[90vh] z-0 flex flex-col items-center justify-center  ">
            {/* Logo + Spinner */}
            <div className="relative flex items-center justify-center">
                {/* Outer rotating ring */}
                <div className="absolute w-20 h-20 rounded-full border-2 border-[#1B7339]/30 animate-spin" />

                {/* Inner pulse ring */}
                <div className="absolute w-14 h-14 rounded-full border border-[#1B7339]/40 animate-ping" />

                {/* Logo container */}
                <div className="relative z-10 w-12 h-12 rounded-full border-2 border-[#1B7339] bg-white flex items-center justify-center shadow-md">
                    <img
                        src="/logo.png"
                        alt="SUG Hub"
                        className="w-12 h-12 object-contain"
                    />
                </div>
            </div>

            {/* Text */}
            <p className="mt-4 text-sm font-semibold tracking-wide text-[#1B7339]">
                {/* {messages.length <= 0 ? "No messages yet" : label} */}
                {label}
            </p>
        </section>
    );
}

export default Loader;
