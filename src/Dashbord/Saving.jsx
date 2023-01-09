import React from 'react'

const Saving = () => {
    return (
        <>
            <section className='saving mt-[20px]'>
            <div class='flex items-center justify-between'>
                    <div>
                        <p class='text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#909090] mb-[15px]'>Dashboard / Savings</p>
                        <h6 class='text-[28px] leading-[100%] font-[700] tracking-[0.1px] text-[#262626]'>Savings</h6>
                    </div>
                        <div class='flex items-center p-[10px] bg-[#FFFFFF]'>
                            <img src="\calendar.svg" alt="alt" />
                            <p class="ml-[5px] text-[16px] leading-[100%] font-[500] tracking-[0.1px] text-[#A7A7A7]">1 Dec 2022</p>
                        </div>
                        <img src="\arrow-swap-horizontal.svg" alt="img" />
                        <div class='flex items-center p-[10px] bg-[#FFFFFF]'>
                            <img src="\calendar.svg" alt="alt" />
                            <p class="ml-[5px] text-[16px] leading-[100%] font-[500] tracking-[0.1px] text-[#A7A7A7]">17 Jan 2023</p>
                        </div>
                        <button class='text-[16px] leading-[100%] font-[500] tracking-[0.1px] text-[#FFFFFF] px-[34px] py-[16px] bg-[#106DF9]'>Change Assets</button>
                    </div>
            </section>
        </>
    )
}

export default Saving