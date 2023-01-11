import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-[#FFFFFF] bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#FFFFFF] p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <svg width="167" height="43" viewBox="0 0 167 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.000325978 31.9107L0.000329261 11.2102L10.3506 16.9604V26.2181L18.6308 30.8757L26.911 26.2181V16.9604L37.2613 11.2102V31.9107L18.6308 42.261L0.000325978 31.9107Z" fill="url(#paint0_linear_1_138)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.17514 14.0852L0 11.2101L18.6305 0.859863L37.261 11.2101L32.0858 14.0852V29.323L18.6305 37.0858L5.17513 29.323L5.17514 14.0852ZM31.5252 14.3967L26.9107 16.9603V16.9028L18.6305 12.2451L10.3502 16.9028V16.9603L5.73577 14.3967V29.0046L18.6305 36.4439L31.5252 29.0046V14.3967Z" fill="url(#paint1_linear_1_138)" />
              <path d="M51.1223 20.6419H59.7711V24.0535H51.1223V20.6419ZM51.4312 30.7455H47.2612V12.3754H60.878V15.787H51.4312V30.7455Z" fill="#125EF7" />
              <path d="M63.701 30.7455V12.3754H67.8709V30.7455H63.701Z" fill="#125EF7" />
              <path d="M72.1471 30.7455V12.3754H75.5963L86.2272 25.6019H84.554V12.3754H88.6725V30.7455H85.249L74.5925 17.519H76.2656V30.7455H72.1471Z" fill="#125EF7" />
              <path d="M90.5675 30.7455L98.5985 12.3754H102.717L110.774 30.7455H106.398L99.8083 14.5273H101.456L94.8404 30.7455H90.5675ZM94.583 26.8091L95.6899 23.5812H104.956L106.089 26.8091H94.583Z" fill="#125EF7" />
              <path d="M112.643 30.7455V12.3754H116.092L126.723 25.6019H125.05V12.3754H129.169V30.7455H125.745L115.089 17.519H116.762V30.7455H112.643Z" fill="#125EF7" />
              <path d="M142.055 31.0604C140.665 31.0604 139.369 30.833 138.168 30.3781C136.984 29.9057 135.954 29.2409 135.079 28.3836C134.204 27.5264 133.518 26.5204 133.02 25.3657C132.539 24.211 132.299 22.9426 132.299 21.5604C132.299 20.1783 132.539 18.9099 133.02 17.7552C133.518 16.6005 134.204 15.5945 135.079 14.7372C135.971 13.88 137.01 13.2239 138.194 12.769C139.378 12.2966 140.673 12.0604 142.081 12.0604C143.642 12.0604 145.049 12.3404 146.302 12.9002C147.572 13.4426 148.636 14.2474 149.494 15.3146L146.817 17.8339C146.199 17.1166 145.513 16.583 144.758 16.2331C144.003 15.8657 143.179 15.682 142.286 15.682C141.446 15.682 140.673 15.822 139.97 16.1019C139.266 16.3818 138.657 16.7842 138.142 17.3091C137.627 17.8339 137.224 18.455 136.932 19.1723C136.658 19.8896 136.521 20.6857 136.521 21.5604C136.521 22.4352 136.658 23.2312 136.932 23.9486C137.224 24.6659 137.627 25.287 138.142 25.8118C138.657 26.3367 139.266 26.7391 139.97 27.019C140.673 27.2989 141.446 27.4389 142.286 27.4389C143.179 27.4389 144.003 27.2639 144.758 26.914C145.513 26.5466 146.199 25.9955 146.817 25.2607L149.494 27.7801C148.636 28.8473 147.572 29.6608 146.302 30.2207C145.049 30.7805 143.634 31.0604 142.055 31.0604Z" fill="#125EF7" />
              <path d="M156.145 19.7759H164.82V23.0825H156.145V19.7759ZM156.454 27.3339H166.261V30.7455H152.31V12.3754H165.927V15.787H156.454V27.3339Z" fill="#125EF7" />
              <defs>
                <linearGradient id="paint0_linear_1_138" x1="6.95519" y1="14.3399" x2="34.6576" y2="56.4302" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2F66EE" />
                  <stop offset="1" stop-color="#012377" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_138" x1="6.95487" y1="4.51119" x2="40.9505" y2="48.7843" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2F66EE" />
                  <stop offset="1" stop-color="#012377" />
                </linearGradient>
              </defs>
            </svg>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block"></span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('dashboard')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 hover:text-white truncate transition duration-150 ${(pathname === '/' || pathname.includes('dashboard')) && 'hover:text-slate-200'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 7.6C3.8 5.50132 5.50132 3.8 7.6 3.8C9.69868 3.8 11.4 5.50132 11.4 7.6C11.4 9.69868 9.69868 11.4 7.6 11.4C5.50132 11.4 3.8 9.69868 3.8 7.6Z" fill="white" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 16.4C12.6 14.3013 14.3013 12.6 16.4 12.6C18.4987 12.6 20.2 14.3013 20.2 16.4C20.2 18.4987 18.4987 20.2 16.4 20.2C14.3013 20.2 12.6 18.4987 12.6 16.4Z" fill="white" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2 7.6C20.2 5.50132 18.4987 3.8 16.4 3.8C14.3013 3.8 12.6 5.50132 12.6 7.6C12.6 9.69868 14.3013 11.4 16.4 11.4C18.4987 11.4 20.2 9.69868 20.2 7.6Z" fill="white" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4 16.4C11.4 14.3013 9.69868 12.6 7.6 12.6C5.50132 12.6 3.8 14.3013 3.8 16.4C3.8 18.4987 5.50132 20.2 7.6 20.2C9.69868 20.2 11.4 18.4987 11.4 16.4Z" fill="white" />
                            </svg>

                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Dashboard
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      {/* <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/"
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' + (isActive ? '!text-indigo-500' : '')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Main
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/"
                              className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Analytics
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/"
                              className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Fintech
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Messages */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('messages') && 'bg-[#FFFFFF]'}`}>
                <NavLink
                  end
                  to="/"
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('messages') && 'hover:text-slate-200'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center mt-[29px] mb-[29px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.85 3.95V7.75H13.35V3.95C13.35 3.68 13.11 3.55 12.95 3.55C12.9 3.55 12.85 3.56 12.8 3.58L4.87 6.57C4.34 6.77 4 7.27 4 7.84V8.51C3.09 9.19 2.5 10.28 2.5 11.51V7.84C2.5 6.65 3.23 5.59 4.34 5.17L12.28 2.17C12.5 2.09 12.73 2.05 12.95 2.05C13.95 2.05 14.85 2.86 14.85 3.95Z" fill="#A5A9B4" />
                        <path d="M21.5 14.5V15.5C21.5 15.77 21.29 15.99 21.01 16H19.55C19.02 16 18.54 15.61 18.5 15.09C18.47 14.78 18.59 14.49 18.79 14.29C18.97 14.1 19.22 14 19.49 14H21C21.29 14.01 21.5 14.23 21.5 14.5Z" fill="#A5A9B4" />
                        <path d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill="#A5A9B4" />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Wallet
                      </span>
                    </div>
                    {/* Badge */}
                    {/* <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center mt-[29px] mb-[29px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.69 14.05C17.65 14.14 17.6 14.22 17.53 14.29L14.58 17.24C14.43 17.39 14.24 17.46 14.05 17.46C13.86 17.46 13.67 17.39 13.52 17.24C13.23 16.95 13.23 16.47 13.52 16.18L15.19 14.51H7C6.59 14.51 6.25 14.17 6.25 13.76C6.25 13.35 6.59 13.01 7 13.01H17C17.1 13.01 17.19 13.03 17.29 13.07C17.47 13.15 17.62 13.29 17.7 13.48C17.77 13.66 17.77 13.86 17.69 14.05ZM17 10.99H7C6.9 10.99 6.81 10.97 6.71 10.93C6.53 10.85 6.38 10.71 6.3 10.52C6.22 10.34 6.22 10.13 6.3 9.95C6.35 9.86 6.4 9.78 6.47 9.71L9.42 6.76C9.71 6.47 10.19 6.47 10.48 6.76C10.77 7.05 10.77 7.53 10.48 7.82L8.81 9.49H17C17.41 9.49 17.75 9.83 17.75 10.24C17.75 10.65 17.41 10.99 17 10.99Z" fill="#A5A9B4" />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Exchange
                      </span>
                    </div>
                    {/* Badge */}
                    {/* <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center mt-[29px] mb-[29px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.85 3.95V7.75H13.35V3.95C13.35 3.68 13.11 3.55 12.95 3.55C12.9 3.55 12.85 3.56 12.8 3.58L4.87 6.57C4.34 6.77 4 7.27 4 7.84V8.51C3.09 9.19 2.5 10.28 2.5 11.51V7.84C2.5 6.65 3.23 5.59 4.34 5.17L12.28 2.17C12.5 2.09 12.73 2.05 12.95 2.05C13.95 2.05 14.85 2.86 14.85 3.95Z" fill="#A5A9B4" />
                        <path d="M21.5 14.5V15.5C21.5 15.77 21.29 15.99 21.01 16H19.55C19.02 16 18.54 15.61 18.5 15.09C18.47 14.78 18.59 14.49 18.79 14.29C18.97 14.1 19.22 14 19.49 14H21C21.29 14.01 21.5 14.23 21.5 14.5Z" fill="#A5A9B4" />
                        <path d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill="#A5A9B4" />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Wallet
                      </span>
                    </div>
                    {/* Badge */}
                    {/* <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center mt-[29px] mb-[29px]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z" fill="#A5A9B4" />
                        <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.88 21.11C9.56 20.81 9.32 20.41 9.18 20C9.31 20.02 9.44 20.03 9.58 20.05C9.81 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="#A5A9B4" />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Notifications
                      </span>
                    </div>
                    {/* Badge */}
                    {/* <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center mt-[29px] mb-[29px]">
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current text-slate-600 ${pathname.includes('messages') && 'text-indigo-500'}`}
                          d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${pathname.includes('messages') && 'text-indigo-300'}`}
                          d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Messages
                      </span>
                    </div>
                    {/* Badge */}
                    {/* <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div> */}
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className=" text-left w-6" aria-hidden="true">
                <h3 class="text-[18px] leading-[100%] font-[600] tracking-[0.1px] text-[#125EF7] mt-[100px]">Account</h3>
              </span>
              {/* <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span> */}
            </h3>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="grow flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z" fill="#A5A9B4" />
                <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.88 21.11C9.56 20.81 9.32 20.41 9.18 20C9.31 20.02 9.44 20.03 9.58 20.05C9.81 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="#A5A9B4" />
              </svg>

              <span className="text-sm font-medium  text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#A5A9B4]  ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                Help
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="grow flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z" fill="#A5A9B4" />
                <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.88 21.11C9.56 20.81 9.32 20.41 9.18 20C9.31 20.02 9.44 20.03 9.58 20.05C9.81 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="#A5A9B4" />
              </svg>

              <span className="text-sm font-medium  text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#A5A9B4]  ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              Setting
              </span>
            </div>
          </div>
          <div class="">

          <button class="flex text-[16px] leading-[100%] font-[600] tracking-[0.1px] text-[#FF2142] px-[12px] py-[15px] bg-[pink] rounded-[8px] w-[100%]"><img src='\login.svg' alt='alt' class="mr-[8px]"/>  Rejected</button>
          </div>
         
        </div>
        

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;