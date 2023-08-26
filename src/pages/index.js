import Head from 'next/head';
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    const [value, setValue] = useState();
    const [country, setCountry] = useState('BD'); // Initial country

    const handleCountryChange = (newCountry) => {
        setCountry(newCountry);
    };

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <div className='flex lg:md:justify-around items-center h-screen lg:md:px-0 px-4'>
                <div>
                    <h3 className='lg:md:text-3xl text-2xl font-medium text-[#000]'>Control your</h3>
                    <h1 className='lg:md:text-5xl text-4xl lg:md:font-bold font-semibold text-[#0046FF]'>Station at a place</h1>

                    <div className="lg:md:mt-[52px] my-10 form-control mb-[18px] lg:md:w-[400px] w-[300px]">
                        <label className="input-group h-16 rounded-[17px]">
                            <span
                                style={{
                                    borderTopLeftRadius: "17px",
                                    borderBottomLeftRadius: "17px",
                                    borderRight: 0,
                                }}
                                className="bg-[#fff] border-[2px] border-primary text-[18px] font-medium text-[#989898] border-r-none"
                            >
                                <svg
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22 13.4444C22 14.0928 21.7425 14.7145 21.284 15.1729C20.8256 15.6313 20.2039 15.8889 19.5556 15.8889H2.44444C1.79614 15.8889 1.17438 15.6313 0.715961 15.1729C0.257539 14.7145 0 14.0928 0 13.4444V2.44444C0 1.79614 0.257539 1.17438 0.715961 0.715961C1.17438 0.257539 1.79614 0 2.44444 0H19.5556C20.2039 0 20.8256 0.257539 21.284 0.715961C21.7425 1.17438 22 1.79614 22 2.44444V13.4444Z"
                                        fill="#006A4D"
                                    />
                                    <path
                                        d="M10.9999 12.2221C13.3625 12.2221 15.2777 10.3068 15.2777 7.94428C15.2777 5.58173 13.3625 3.6665 10.9999 3.6665C8.63739 3.6665 6.72217 5.58173 6.72217 7.94428C6.72217 10.3068 8.63739 12.2221 10.9999 12.2221Z"
                                        fill="#F42A41"
                                    />
                                </svg>
                                <span className="mr-[5px] bg-[#fff]">+88</span>
                                <hr className="border border-[#989898] h-[38px]" />
                            </span>
                            <input
                                style={{
                                    borderTopRightRadius: "17px",
                                    borderBottomRightRadius: "17px",
                                    borderLeft: 0,
                                }}
                                type="text"
                                placeholder="Phone Number"
                                className="input border-primary border-[2px] focus:outline-0 input-bordered h-16 lg:md:w-[400px] w-[300px]"
                            />
                        </label>
                    </div>
                    <div className="flex items-center">
                        <Button type="primary" width={'245px'} swidth={'200px'}>
                            Register
                        </Button>
                        <p className="lg:md:text-[18px] text-[16px] ml-[18px] lg:md:font-medium w-[150px]">
                            Already have an account?{" "}
                            <Link href="/login" className="text-[#0046FF] underline lg:md:font-bold font-semibold">Login</Link>
                        </p>
                    </div>
                </div>
                <div className='lg:md:block hidden'>
                    <Image
                        src="bro.svg"
                        alt="image"
                        width={825}
                        height={427}
                    >

                    </Image>
                </div>
            </div>
        </div>
    );
};

export default Home;
