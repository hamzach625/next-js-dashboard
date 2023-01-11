import React from 'react'

const Recent = () => {
    return (
        <>
            <section class='recent mt-[20px] mb-[20px]'>
                <h3 class="ml-[5px] text-[30px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626]">Recent Transaction</h3>


            </section>
            <div class="whitespace-nowrap overflow-x-auto ...">
                <section class="overflow-x-scroll">
                    <table class="w-[100%]">
                        <thead class="bg-[#FFFFFF] p-[26px]">
                            <tr>
                                <th ><input type="checkbox" class="appearance-none indeterminate:bg-gray-300 ... p-[26];" /></th>
                                <th class="text-center p-[26px]"> <p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626] p-[26px];">Date</p></th>
                                <th class="text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626];">Description</p></th>
                                <th class="text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626];">Amount</p></th>
                                <th class="text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626] ;">To/From</p></th>
                                <th class="text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626] ;">Status</p></th>
                                <th class="text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626] ;">Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-[ #F7F7F7] p-[22px]">
                                <td class=" bg-[#F7F7F7] text-center p-[26px]"><input type="checkbox" class="appearance-none indeterminate:bg-gray-300 ..." /></td>
                                <td class="bg-[#F7F7F7] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626];">20/10/22</p></td>
                                <td class=" bg-[#F7F7F7] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626]">E-Money Transfer</p></td>
                                <td class="bg-[#F7F7F7] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626] ;">-250 USD</p></td>
                                <td class="bg-[#F7F7F7] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626] ;">@bayu_Ananda</p></td>
                                <td class="bg-[#F7F7F7] text-center p-[26px]"><button class="'text-[14px] leading-[17px] font-[500] tracking-[0.1px] text-[#FFFFFF] px-[5px] py-[6px] bg-[#FF2142] rounded-[8px]">Rejected</button></td>
                                <td class="bg-[#F7F7F7] text-center p-[26px]">
                                    <div class=" flex items-center">
                                        <img src='public\icon.svg' alt='alt' class="mr-[5px]" />
                                        <img src='public\trash.svg' alt='alt' />
                                        <img src='public\more.svg' class="ml-[5px]" alt='alt' />
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-[ #FFFFFF] p-[22px]">
                                <td class=" bg-[#FFFFFF] text-center p-[26px]"><input type="checkbox" class="appearance-none indeterminate:bg-gray-300 ..." /></td>
                                <td class="bg-[#FFFFFF] text-center p-[26px] "><p class=" ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626];">20/10/22</p></td>
                                <td class=" bg-[#FFFFFF] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626];">E-Money Transfer</p></td>
                                <td class="bg-[#FFFFFF] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626];">-250 USD</p></td>
                                <td class="bg-[#FFFFFF] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626] ;">@bayu_Ananda</p></td>
                                <div class="whitespace-nowrap overflow-x-auto  ...">
                                    <td class="bg-[#FFFFFF] text-center p-[26px]"><button class="'text-[14px] leading-[17px] font-[500] tracking-[0.1px] text-[#FFFFFF] px-[5px] py-[6px] bg-[#FF9F10] rounded-[8px]">On Progress</button></td>
                                </div>
                                <td class="bg-[#FFFFFF] text-center p-[26px]">
                                    <div class=" flex items-center">
                                        <img src='public\icon.svg' alt='alt' class="mr-[5px]" />
                                        <img src='public\trash.svg' alt='alt' />
                                        <img src='public\more.svg' class="ml-[5px]" alt='alt' />
                                    </div>
                                </td>
                            </tr>
                            <tr class="bg-[ #FFFFFF] p-[22px]">
                                <td class=" bg-[#FFFFFF] text-center p-[26px]"><input type="checkbox" class="appearance-none indeterminate:bg-gray-300 ..." /></td>
                                <td class="bg-[#FFFFFF] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626];">20/10/22</p></td>
                                <td class=" bg-[#FFFFFF] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626];">E-Money Transfer</p></td>
                                <td class="bg-[#FFFFFF] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626];">-250 USD</p></td>
                                <td class="bg-[#FFFFFF] text-center p-[26px]"><p class="ml-[] text-[14px] leading-[100%] font-[600] tracking-[0.1px] text-[#262626] ;">@bayu_Ananda</p></td>
                                <td class="bg-[#FFFFFF] text-center p-[26px]"><button class="'text-[14px] leading-[17px] font-[500] tracking-[0.1px] text-[#FFFFFF] px-[5px] py-[6px] bg-[#28E664] rounded-[8px]">Completed</button></td>
                                <td class="bg-[#FFFFFF] text-center p-[26px]">
                                    <div class=" flex items-center">
                                        <img src='public\icon.svg' alt='alt' class="mr-[5px]" />
                                        <img src='public\trash.svg' alt='alt' />
                                        <img src='public\more.svg' class="ml-[5px]" alt='alt' />
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </section>
             
            </div>

        </>
    )
}

export default Recent