import React from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import Head from "next/head";
import { MdArrowForwardIos } from "react-icons/md";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";

const AddStock = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className="w-[100vw]">
            <Head>
                <title>Add Stock</title>
            </Head>
            <div className="h-screen pl-[50px]">
                <div className="w-[414px] max-mt-[96px] mt-10">
                    <h4 className="flex items-center gap-x-2 font-medium text-[#000] font-poppins text-[18px]">
                        Stock Management
                        <MdArrowForwardIos className="text-[#0046FF]" />
                    </h4>
                    <h2 className="relative text-[#0046FF] font-bold font-montserrat text-5xl pb-[8px]">
                        Add stock
                        <span className="rounded-lg absolute bottom-0 left-0 w-[106px] h-[3px] bg-[#0046FF]"></span>
                    </h2>
                </div>

                <div className="mt-[3.5%] mb-[50px]">
                    <form action="" className="flex">
                        <div className="form-control mr-[30px]">
                            <label htmlFor="">
                                <span className="font-medium  text-[#0046FF] text-[14px]">
                                    Vendor Name
                                </span>
                            </label>
                            <select className="select focus:outline-0 border-[1.5px] border-primary select-primary w-full max-w-[414px] mt-[10px]">
                                <option
                                    disabled
                                    selected
                                    className="text-[#989898]"
                                >
                                    Ex. Padma Oil Company, Zone-5
                                </option>
                                <option>Rajshahi Steel Company</option>
                                <option>Dhaka Steel Company</option>
                                <option>Sylhet Steel Company</option>
                                <option>Chattogram Steel Company</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-[414px]">
                            <label className="label">
                                <span className="label-text text-primary font-medium">
                                    Vendor Contact No
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Ex. 01xxxxxxxxx"
                                className="input input-bordered w-full max-w-[414px] h-[45px] border-primary border-[1.5px] placeholder:text-[#989898] text-primary"
                            />
                        </div>
                    </form>
                </div>
                <hr className="border-primary max-w-[70vw] border-[1.5px] mb-[50px]" />
                <form action="" className="flex items-center mb-[10%]">
                    <div className="form-control w-full max-w-[249px] mr-[20px]">
                        <label className="label">
                            <span className="label-text text-primary font-medium">
                                Fuel Type
                            </span>
                        </label>
                        <select className="select select-primary w-full max-w-[249px] border-primary border-[1.5px] focus:outline-0 h-[72px] text-[36px] font-medium">
                            <option disabled selected>
                                Fuel Type
                            </option>
                            <option>Gasoline</option>
                            <option>Diesel</option>
                            <option>Biodiesel</option>
                            <option>Natural Gas</option>
                            <option>LPG</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-[249px] mr-[20px]">
                        <label className="label">
                            <span className="label-text text-primary font-medium">
                                Quantity
                            </span>
                        </label>
                        <input
                            type="number"
                            placeholder="Quantity"
                            className="input input-bordered w-full max-w-[414px] h-[72px] border-primary border-[1.5px] placeholder:text-[#989898] text-primary text-[36px] font-medium"
                        />
                    </div>
                    <div className="form-control w-full max-w-[249px] mr-[20px]">
                        <label className="label">
                            <span className="label-text text-primary font-medium">
                                Rate/Unit
                            </span>
                            <span className="label-text text-primary font-medium underline">
                                Edit Rate
                            </span>
                        </label>
                        <input
                            type="number"
                            placeholder="Quantity"
                            className="input input-bordered w-full max-w-[414px] h-[72px] border-primary border-[1.5px] placeholder:text-[#989898] text-primary text-[36px] font-medium"
                        />
                    </div>
                    <div className="form-control w-full max-w-[249px] mr-[20px]">
                        <label className="label">
                            <span className="label-text text-primary font-medium">
                                Subtotal
                            </span>
                        </label>
                        <input
                            type="number"
                            placeholder="Quantity"
                            className="input input-bordered w-full max-w-[414px] h-[72px] border-primary border-[1.5px] placeholder:text-[#989898] text-primary text-[36px] font-medium"
                        />
                    </div>
                    <div className="mt-[30px]">
                        <Button width={72} swidth={72}>
                            +
                        </Button>
                    </div>
                </form>
                <div className="bg-[#F8F8F8] border-t-[1px] border-b-[1px] border-primary h-[30%] max-w-[70vw] px-auto flex">
                    <form
                        action=""
                        className="flex items-center mb-[10%] mx-auto py-auto "
                    >
                        <div className="form-control w-full max-w-[249px] mr-[20px]">
                            <label className="label">
                                <span className="label-text text-primary font-medium">
                                    Bank
                                </span>
                            </label>
                            <select className="select select-primary w-full max-w-[249px] border-primary border-[1.5px] focus:outline-0 h-[72px] text-[36px] font-medium">
                                <option disabled selected>
                                    Bank
                                </option>
                                <option>Gasoline</option>
                                <option>Diesel</option>
                                <option>Biodiesel</option>
                                <option>Natural Gas</option>
                                <option>LPG</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-[249px] mr-[20px]">
                            <label className="label">
                                <span className="label-text text-primary font-medium">
                                    Upload Invoice
                                </span>
                            </label>
                            <input
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered w-full max-w-[414px] h-[72px] border-primary border-[1.5px] placeholder:text-[#989898] text-primary text-[36px] font-medium"
                            />
                        </div>
                        <div className="mt-[30px]">
                            <Button width={72} swidth={72}>
                                Add Stock
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStock;

AddStock.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
