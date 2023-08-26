import React from 'react';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import Head from 'next/head';
import { MdArrowForwardIos } from 'react-icons/md';
import { useForm } from 'react-hook-form';

const AddStock = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <Head>
                <title>Add Stock</title>
            </Head>
            <div className='h-screen'>
                <div className='w-[414px] max-ps-[153px] ps-[20%] max-mt-[96px] mt-10'>
                    <h4 className='flex items-center gap-x-2 font-medium text-[#000] font-poppins text-[18px]'>
                        Stock Management
                        <MdArrowForwardIos className='text-[#0046FF]' />
                    </h4>
                    <h2 className='relative text-[#0046FF] font-bold font-montserrat text-5xl pb-[8px]'>
                        Add stock
                        <span className="rounded-lg absolute bottom-0 left-0 w-[106px] h-[3px] bg-[#0046FF]"></span>
                    </h2>
                </div>

                <div>
                    <form action="">
                        <div className="form-control">
                            <label htmlFor="">
                                <span className="font-poppins text-[18px] text-[#0046FF]">Vendor Name</span>
                            </label>
                            <select
                                className="h-[72px] select select-bordered border-[#0046FF] focus:outline-0 text-[18px] text-[#000] placeholder:text-[18px] placeholder:text-[#D1D1D1]"
                                {...register("gender")}
                            >
                                <option className='text-[18px] text-[#D1D1D1]' value="female">
                                    female
                                </option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
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
