import React, { useState } from 'react';


function Header({
  sidebarOpen,
  setSidebarOpen
}) {

 

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 -mb-px">
        <p class="ml-[5px] text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#A7A7A7]">HOMEPAGE</p>
        <p class="ml-[5px] text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#A7A7A7] ml-[35px]">DASHBOARD</p>
        <p class="ml-[5px] text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#A7A7A7]  ml-[35px]">FEATURED</p>
        <p class="ml-[5px] text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#A7A7A7]  ml-[35px]">PRICING</p>
        <p class="ml-[5px] text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#A7A7A7]  ml-[35px]">CONTACT</p>
        <form class="ml-[85px]">
                    <label class="block">
                       
                        <input type="border-#E4E4E4-500/100 text" class="text-[12px] text-[black] leading-[100%] rounded-[8px] bg-[#F7F7F7;] px-[22px] py-[17px] w-[379px]" placeholder='Search' />
                       
                    </label>
                </form>
                <img src='\Frame0999.svg' alt='alt' class="ml-[20px]"/>
          {/* Header: Left side */}
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

          </div>

          {/* every header component created in header folder and added here using tailwind css layout */}
          <div className="">
       
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;