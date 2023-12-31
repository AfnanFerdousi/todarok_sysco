import Button from "@/components/Button";
import React from "react";

const Register = () => {
    return (
        <div className="min-h-screen bg-[#0046ff] flex justify-center items-center h-[100%]">
            <form
                action=""
                className=" bg-white mx-auto sm:h-[70vh] my-auto rounded-[35px] flex justify-center items-center flex-col min-h-[682px] px-[20px] max-h-[866px]"
            >
                <div className="max-w-[414px]">
                    <div className="form-control mb-[3.4%]">
                        <label className="label">
                            <span className="label-text text-primary">
                                Company Names
                            </span>
                        </label>
                        <label className="input-group">
                            <span className="bg-transparent border-primary border-[1.5px] border-r-0">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.3077 8.46154V17.7692C20.3077 17.9936 20.2185 18.2089 20.0599 18.3676C19.9012 18.5262 19.686 18.6154 19.4615 18.6154C19.2371 18.6154 19.0219 18.5262 18.8632 18.3676C18.7045 18.2089 18.6154 17.9936 18.6154 17.7692V14.3846C18.6154 13.7114 18.3479 13.0657 17.8719 12.5897C17.3958 12.1136 16.7502 11.8462 16.0769 11.8462H13.5385V1.69231C13.5385 1.24348 13.3602 0.813035 13.0428 0.495665C12.7254 0.178296 12.295 0 11.8462 0H1.69231C1.24348 0 0.813035 0.178296 0.495665 0.495665C0.178296 0.813035 0 1.24348 0 1.69231V20.3077C0 20.7565 0.178296 21.187 0.495665 21.5043C0.813035 21.8217 1.24348 22 1.69231 22H11.8462C12.295 22 12.7254 21.8217 13.0428 21.5043C13.3602 21.187 13.5385 20.7565 13.5385 20.3077V13.5385H16.0769C16.3013 13.5385 16.5166 13.6276 16.6752 13.7863C16.8339 13.945 16.9231 14.1602 16.9231 14.3846V17.7692C16.9231 18.4425 17.1905 19.0881 17.6666 19.5642C18.1426 20.0402 18.7883 20.3077 19.4615 20.3077C20.1348 20.3077 20.7804 20.0402 21.2565 19.5642C21.7326 19.0881 22 18.4425 22 17.7692V6.76923C22 6.3204 21.8217 5.88996 21.5043 5.57259C21.187 5.25522 20.7565 5.07692 20.3077 5.07692V2.52154C20.3033 2.30007 20.2122 2.08917 20.054 1.93413C19.8957 1.77908 19.6831 1.69226 19.4615 1.69231C19.3437 1.69425 19.2275 1.72031 19.1201 1.76888C19.0127 1.81745 18.9164 1.88749 18.8372 1.9747C18.7579 2.0619 18.6973 2.16442 18.6592 2.27593C18.621 2.38744 18.6061 2.50559 18.6154 2.62308V6.76923C18.6154 7.10394 18.7146 7.43113 18.9006 7.70943C19.0865 7.98773 19.3508 8.20463 19.6601 8.33272C19.9693 8.46081 20.3096 8.49432 20.6378 8.42902C20.9661 8.36372 21.2677 8.20255 21.5043 7.96587C21.741 7.7292 21.9022 7.42766 21.9675 7.09938C22.0328 6.77111 21.9993 6.43084 21.8712 6.12161C21.7431 5.81238 21.5262 5.54808 21.2479 5.36213C20.9696 5.17618 20.6424 5.07692 20.3077 5.07692V8.46154ZM11.8462 9.30769C11.8462 9.53211 11.757 9.74733 11.5983 9.90601C11.4396 10.0647 11.2244 10.1538 11 10.1538H2.53846C2.31405 10.1538 2.09882 10.0647 1.94014 9.90601C1.78146 9.74733 1.69231 9.53211 1.69231 9.30769V4.23077C1.69231 4.00636 1.78146 3.79113 1.94014 3.63245C2.09882 3.47376 2.31405 3.38462 2.53846 3.38462H11C11.2244 3.38462 11.4396 3.47376 11.5983 3.63245C11.757 3.79113 11.8462 4.00636 11.8462 4.23077V9.30769Z"
                                        fill="#0046FF"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input focus:outline-0 input-bordered  border-primary border-[1.5px] border-l-0 text-primary placeholder:text-primary w-[414px]"
                            />
                        </label>
                    </div>
                    <div className="form-control mb-[3.4%]">
                        <label className="label">
                            <span className="label-text text-primary">
                                Domain
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="uftl123"
                                className="input focus:outline-0 text-primary placeholder:text-primary border-primary border-[1.5px] input-bordered w-[364px]"
                            />
                            <span>.todarok.com</span>
                        </label>
                        <label className="label">
                            <span className="label-text-alt text-primary flex">
                                <b className="mr-[5px]">Try: </b>
                                <div className="flex">
                                    <p className="underline mr-[5px]">
                                        ufti321
                                    </p>
                                    <p className="underline mr-[5px]">ufti22</p>
                                    <p className="underline">theufti</p>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="mb-[3.4%]">
                        <label className="label pt-0">
                            <span className="label-text text-primary">
                                Location
                            </span>
                        </label>
                        <div className="flex w-[412px]">
                            <div className="form-control w-[45%]">
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <label
                                        tabIndex={0}
                                        className="border-primary py-[14px] pl-[27px] pr-[25px] rounded-[17px] border-[1.5px] text-[#989898] flex  items-center justify-between"
                                    >
                                        <span className="mr-[20px]">
                                            Division
                                        </span>
                                        <svg
                                            width="14"
                                            height="8"
                                            viewBox="0 0 14 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7 8L0.0717977 0.5L13.9282 0.499999L7 8Z"
                                                fill="#0046FF"
                                            />
                                        </svg>
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-control w-[45%]">
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <label
                                        tabIndex={0}
                                        className="border-primary py-[14px] pl-[27px] pr-[25px] rounded-[17px] border-[1.5px] text-[#989898] flex  items-center justify-between"
                                    >
                                        <span className="mr-[20px]">
                                            District
                                        </span>
                                        <svg
                                            width="14"
                                            height="8"
                                            viewBox="0 0 14 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7 8L0.0717977 0.5L13.9282 0.499999L7 8Z"
                                                fill="#0046FF"
                                            />
                                        </svg>
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mb-[4.4%]">
                        <input
                            type="text"
                            placeholder="Address (Optional)"
                            className="input focus:outline-0 text-primary placeholder:text-[#989898] border-primary border-[1.5px] input-bordered"
                        />
                    </div>
                    <div className="form-control max-w-[414px] mb-[3.4%]">
                        <svg
                            width="414"
                            height="72"
                            viewBox="0 0 414 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="1"
                                y="1"
                                width="412"
                                height="70"
                                rx="19"
                                fill="#F3F3F3"
                                stroke="#989898"
                                stroke-width="2"
                                stroke-dasharray="10 10"
                            />
                            <path
                                d="M151.205 40.808H144.533L143.429 44H139.901L145.925 27.224H149.837L155.861 44H152.309L151.205 40.808ZM150.293 38.12L147.869 31.112L145.445 38.12H150.293ZM157.249 37.304C157.249 35.96 157.513 34.768 158.041 33.728C158.585 32.688 159.321 31.888 160.249 31.328C161.177 30.768 162.209 30.488 163.345 30.488C164.209 30.488 165.033 30.68 165.817 31.064C166.601 31.432 167.225 31.928 167.689 32.552V26.24H171.097V44H167.689V42.032C167.273 42.688 166.689 43.216 165.937 43.616C165.185 44.016 164.313 44.216 163.321 44.216C162.201 44.216 161.177 43.928 160.249 43.352C159.321 42.776 158.585 41.968 158.041 40.928C157.513 39.872 157.249 38.664 157.249 37.304ZM167.713 37.352C167.713 36.536 167.553 35.84 167.233 35.264C166.913 34.672 166.481 34.224 165.937 33.92C165.393 33.6 164.809 33.44 164.185 33.44C163.561 33.44 162.985 33.592 162.457 33.896C161.929 34.2 161.497 34.648 161.161 35.24C160.841 35.816 160.681 36.504 160.681 37.304C160.681 38.104 160.841 38.808 161.161 39.416C161.497 40.008 161.929 40.464 162.457 40.784C163.001 41.104 163.577 41.264 164.185 41.264C164.809 41.264 165.393 41.112 165.937 40.808C166.481 40.488 166.913 40.04 167.233 39.464C167.553 38.872 167.713 38.168 167.713 37.352ZM173.515 37.304C173.515 35.96 173.779 34.768 174.307 33.728C174.851 32.688 175.587 31.888 176.515 31.328C177.443 30.768 178.475 30.488 179.611 30.488C180.475 30.488 181.299 30.68 182.083 31.064C182.867 31.432 183.491 31.928 183.955 32.552V26.24H187.363V44H183.955V42.032C183.539 42.688 182.955 43.216 182.203 43.616C181.451 44.016 180.579 44.216 179.587 44.216C178.467 44.216 177.443 43.928 176.515 43.352C175.587 42.776 174.851 41.968 174.307 40.928C173.779 39.872 173.515 38.664 173.515 37.304ZM183.979 37.352C183.979 36.536 183.819 35.84 183.499 35.264C183.179 34.672 182.747 34.224 182.203 33.92C181.659 33.6 181.075 33.44 180.451 33.44C179.827 33.44 179.251 33.592 178.723 33.896C178.195 34.2 177.763 34.648 177.427 35.24C177.107 35.816 176.947 36.504 176.947 37.304C176.947 38.104 177.107 38.808 177.427 39.416C177.763 40.008 178.195 40.464 178.723 40.784C179.267 41.104 179.843 41.264 180.451 41.264C181.075 41.264 181.659 41.112 182.203 40.808C182.747 40.488 183.179 40.04 183.499 39.464C183.819 38.872 183.979 38.168 183.979 37.352ZM209.083 30.704L200.851 50.288H197.275L200.155 43.664L194.827 30.704H198.595L202.027 39.992L205.507 30.704H209.083ZM216.798 44.216C215.518 44.216 214.366 43.936 213.342 43.376C212.318 42.8 211.51 41.992 210.918 40.952C210.342 39.912 210.054 38.712 210.054 37.352C210.054 35.992 210.35 34.792 210.942 33.752C211.55 32.712 212.374 31.912 213.414 31.352C214.454 30.776 215.614 30.488 216.894 30.488C218.174 30.488 219.334 30.776 220.374 31.352C221.414 31.912 222.23 32.712 222.822 33.752C223.43 34.792 223.734 35.992 223.734 37.352C223.734 38.712 223.422 39.912 222.798 40.952C222.19 41.992 221.358 42.8 220.302 43.376C219.262 43.936 218.094 44.216 216.798 44.216ZM216.798 41.288C217.406 41.288 217.974 41.144 218.502 40.856C219.046 40.552 219.478 40.104 219.798 39.512C220.118 38.92 220.278 38.2 220.278 37.352C220.278 36.088 219.942 35.12 219.27 34.448C218.614 33.76 217.806 33.416 216.846 33.416C215.886 33.416 215.078 33.76 214.422 34.448C213.782 35.12 213.462 36.088 213.462 37.352C213.462 38.616 213.774 39.592 214.398 40.28C215.038 40.952 215.838 41.288 216.798 41.288ZM238.751 30.704V44H235.367V42.32C234.935 42.896 234.367 43.352 233.663 43.688C232.975 44.008 232.223 44.168 231.407 44.168C230.367 44.168 229.447 43.952 228.647 43.52C227.847 43.072 227.215 42.424 226.751 41.576C226.303 40.712 226.079 39.688 226.079 38.504V30.704H229.439V38.024C229.439 39.08 229.703 39.896 230.231 40.472C230.759 41.032 231.479 41.312 232.391 41.312C233.319 41.312 234.047 41.032 234.575 40.472C235.103 39.896 235.367 39.08 235.367 38.024V30.704H238.751ZM245.426 32.768C245.858 32.064 246.418 31.512 247.106 31.112C247.81 30.712 248.61 30.512 249.506 30.512V34.04H248.618C247.562 34.04 246.762 34.288 246.218 34.784C245.69 35.28 245.426 36.144 245.426 37.376V44H242.066V30.704H245.426V32.768ZM260.848 41.336H266.368V44H257.488V27.248H260.848V41.336ZM274.408 44.216C273.128 44.216 271.976 43.936 270.952 43.376C269.928 42.8 269.12 41.992 268.528 40.952C267.952 39.912 267.664 38.712 267.664 37.352C267.664 35.992 267.96 34.792 268.552 33.752C269.16 32.712 269.984 31.912 271.024 31.352C272.064 30.776 273.224 30.488 274.504 30.488C275.784 30.488 276.944 30.776 277.984 31.352C279.024 31.912 279.84 32.712 280.432 33.752C281.04 34.792 281.344 35.992 281.344 37.352C281.344 38.712 281.032 39.912 280.408 40.952C279.8 41.992 278.968 42.8 277.912 43.376C276.872 43.936 275.704 44.216 274.408 44.216ZM274.408 41.288C275.016 41.288 275.584 41.144 276.112 40.856C276.656 40.552 277.088 40.104 277.408 39.512C277.728 38.92 277.888 38.2 277.888 37.352C277.888 36.088 277.552 35.12 276.88 34.448C276.224 33.76 275.416 33.416 274.456 33.416C273.496 33.416 272.688 33.76 272.032 34.448C271.392 35.12 271.072 36.088 271.072 37.352C271.072 38.616 271.384 39.592 272.008 40.28C272.648 40.952 273.448 41.288 274.408 41.288ZM289.016 30.488C290.008 30.488 290.88 30.688 291.632 31.088C292.384 31.472 292.976 31.976 293.408 32.6V30.704H296.792V44.096C296.792 45.328 296.544 46.424 296.048 47.384C295.552 48.36 294.808 49.128 293.816 49.688C292.824 50.264 291.624 50.552 290.216 50.552C288.328 50.552 286.776 50.112 285.56 49.232C284.36 48.352 283.68 47.152 283.52 45.632H286.856C287.032 46.24 287.408 46.72 287.984 47.072C288.576 47.44 289.288 47.624 290.12 47.624C291.096 47.624 291.888 47.328 292.496 46.736C293.104 46.16 293.408 45.28 293.408 44.096V42.032C292.976 42.656 292.376 43.176 291.608 43.592C290.856 44.008 289.992 44.216 289.016 44.216C287.896 44.216 286.872 43.928 285.944 43.352C285.016 42.776 284.28 41.968 283.736 40.928C283.208 39.872 282.944 38.664 282.944 37.304C282.944 35.96 283.208 34.768 283.736 33.728C284.28 32.688 285.008 31.888 285.92 31.328C286.848 30.768 287.88 30.488 289.016 30.488ZM293.408 37.352C293.408 36.536 293.248 35.84 292.928 35.264C292.608 34.672 292.176 34.224 291.632 33.92C291.088 33.6 290.504 33.44 289.88 33.44C289.256 33.44 288.68 33.592 288.152 33.896C287.624 34.2 287.192 34.648 286.856 35.24C286.536 35.816 286.376 36.504 286.376 37.304C286.376 38.104 286.536 38.808 286.856 39.416C287.192 40.008 287.624 40.464 288.152 40.784C288.696 41.104 289.272 41.264 289.88 41.264C290.504 41.264 291.088 41.112 291.632 40.808C292.176 40.488 292.608 40.04 292.928 39.464C293.248 38.872 293.408 38.168 293.408 37.352ZM305.978 44.216C304.698 44.216 303.546 43.936 302.522 43.376C301.498 42.8 300.69 41.992 300.098 40.952C299.522 39.912 299.234 38.712 299.234 37.352C299.234 35.992 299.53 34.792 300.122 33.752C300.73 32.712 301.554 31.912 302.594 31.352C303.634 30.776 304.794 30.488 306.074 30.488C307.354 30.488 308.514 30.776 309.554 31.352C310.594 31.912 311.41 32.712 312.002 33.752C312.61 34.792 312.914 35.992 312.914 37.352C312.914 38.712 312.602 39.912 311.978 40.952C311.37 41.992 310.538 42.8 309.482 43.376C308.442 43.936 307.274 44.216 305.978 44.216ZM305.978 41.288C306.586 41.288 307.154 41.144 307.682 40.856C308.226 40.552 308.658 40.104 308.978 39.512C309.298 38.92 309.458 38.2 309.458 37.352C309.458 36.088 309.122 35.12 308.45 34.448C307.794 33.76 306.986 33.416 306.026 33.416C305.066 33.416 304.258 33.76 303.602 34.448C302.962 35.12 302.642 36.088 302.642 37.352C302.642 38.616 302.954 39.592 303.578 40.28C304.218 40.952 305.018 41.288 305.978 41.288Z"
                                fill="#989898"
                            />
                            <path
                                d="M126.105 28.1579V33.0363C126.105 33.0363 122.858 33.0526 122.842 33.0363V28.1579H117.947C117.947 28.1579 117.964 24.9111 117.947 24.8947H122.842V20H126.105V24.8947H131V28.1579H126.105ZM121.211 34.6842V29.7895H116.316V24.8947H103.263C101.468 24.8947 100 26.3632 100 28.1579V47.7368C100 49.5316 101.468 51 103.263 51H122.842C124.637 51 126.105 49.5316 126.105 47.7368V34.6842H121.211ZM103.263 47.7368L108.158 41.2105L111.421 46.1053L116.316 39.5789L122.842 47.7368H103.263Z"
                                fill="#989898"
                            />
                        </svg>
                    </div>
                    <Button isFullWidth={true}>Let&apos;s Go!</Button>
                </div>
            </form>
        </div>
    );
};

export default Register;
