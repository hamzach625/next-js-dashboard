import React from 'react'

const Statistic = () => {
    return (
        <>
            <section class='state mt-[30px]'>
                <div class="grid grid-cols-2 gap-4">
                    <div class=''>
                        <div class='image'>
                            <img src='\Frame 6.svg' className='img-fluid' />
                        </div>

                    </div>
                    <div class="head">
                        <h4 class="ml-[5px] text-[20px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626] mb-[20px]">Recent Transaction</h4>
                        <div class=' items-center p-[10px] bg-[#FFFFFF]'>
                            <div class='flex items-center p-[10px]'>
                                <img src="\Group 2495.svg" alt="alt" />
                              <div class="flex flex-col">
                              <div className='right inline-flex'>
                                    <img src='\Ellipse 790.svg' alt='alt' />
                                    <p class="ml-[5px] text-[14px] leading-[100%] font-[500] tracking-[0.1px] text-[ #262626;]">Income</p>
                                </div>
                                <div className='right inline-flex mt-[22px]'>
                                    <img src='\Ellipse 791.svg' alt='alt' />
                                    <p class="ml-[5px] text-[14px] leading-[100%] font-[500] tracking-[0.1px] text-[ #262626;]">Outcome</p>
                                </div>
                                <div className='right inline-flex mt-[22px]'>
                                    <img src='\Ellipse 790.svg' alt='alt' />
                                    <p class="ml-[5px] text-[14px] leading-[100%] font-[500] tracking-[0.1px] text-[ #262626;]">Outcome</p>
                                </div>
                              </div>
                                
                            </div>
                        </div>
                        <div class=' items-center p-[10px] bg-[#FFFFFF] mt-[20px]'>
                            <div class='flex justify-between p-[15px]'>
                                <p class="ml-[5px] text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626]">Saving Target</p>
                                <button class='text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#FFFFFF] px-[11px] py-[4px] bg-[#28E664] rounded-[80px] mb-[38px]'>80%</button>
                            </div>
                            <div className='images'>
                                <img src='\Frame 9122.svg'alt='alt' />
                            </div>
                            <div class='flex justify-between p-[10px] mt-[35px]'>
                                <p class="ml-[5px] text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626]">17,25k USD</p>
                                <p class="ml-[5px] text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626]">25k USD</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Statistic