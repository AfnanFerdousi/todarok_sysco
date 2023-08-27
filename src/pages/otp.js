import React from "react";
import Image from "next/image";
import otpImg from "/public/otpImage.png";
import Button from "@/components/Button";

export default function Otp() {
    const handleInput = (e) => {
        const target = e.target;
        const val = target.value;

        if (isNaN(val)) {
            target.value = "";
            return;
        }

        if (val !== "") {
            const next = target.nextElementSibling;
            if (next) {
                next.focus();
            }
        }
    };

    const handleKeyUp = (e) => {
        const target = e.target;
        const key = e.key.toLowerCase();

        if (key === "backspace" || key === "delete") {
            target.value = "";
            const prev = target.previousElementSibling;
            if (prev) {
                prev.focus();
            }
            return;
        }
    };

    return (
        <div className="flex">
            <div className="lg:w-[50%] w-[100%] flex justify-center items-center">
                <div>
                    <h6 className="text-[18px] font-medium text-[#989898]">
                        Enter OTP
                    </h6>
                    <form action="" className="mt-[10px] flex-row">
                        <div>
                            {[0, 1, 2, 3].map((index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="border text-[36px] font-medium text-center border-primary border-[1.5px] w-[88px] h-[84px] rounded-[18px] mr-[20px]"
                                    maxLength={1}
                                    onInput={handleInput}
                                    onKeyUp={handleKeyUp}
                                />
                            ))}
                        </div>
                        <div className="mt-[24px] w-[100%]">
                            <Button width="100%" swidth="100%">
                                Submit
                            </Button>
                            <p className="mt-[25px] text-center text-[18px] font-medium">
                                Resend OTP in{" "}
                                <span className="underline text-primary">
                                    00:29
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="lg:w-[50%] bg-primary min-h-screen h-[100%]">
                <Image src={otpImg} alt="otp-image" style={{ width: "100%" }} />
                <div className="ml-[10%] mt-[5%]">
                    <h2 className="text-[36px] font-semibold text-white mx-auto">
                        Access from anywhere
                    </h2>
                    <p className="text-[18px] text-white">
                        You can access to your account from anywhere in the
                        world. An admin of todaroko can handle the fuel station
                        even he is not in the station. He can track the sales,
                        employee info etc.
                    </p>
                    <p className="font-bold text-[18px] flex items-center text-white mt-[30px]">
                        Next &gt;
                        <svg
                            className="ml-[30px]"
                            width="108"
                            height="8"
                            viewBox="0 0 108 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M52 4L62 4"
                                stroke="#6790F8"
                                stroke-width="7"
                                stroke-linecap="round"
                            />
                            <path
                                d="M73 4L83 4"
                                stroke="#6790F8"
                                stroke-width="7"
                                stroke-linecap="round"
                            />
                            <path
                                d="M94 4L104 4"
                                stroke="#6790F8"
                                stroke-width="7"
                                stroke-linecap="round"
                            />
                            <path
                                d="M4 4H41"
                                stroke="white"
                                stroke-width="7"
                                stroke-linecap="round"
                            />
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    );
}
