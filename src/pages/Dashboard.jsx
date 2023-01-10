import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Saving from '../Dashbord/Saving';
import Dream from '../Dashbord/Dream';
import Statistic from '../Dashbord/Statistic';
import Recent from '../Dashbord/Recent';
import Savings from '../Components/Savings';
import Damon from '../Dashbord/Damon';
function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div class="grid grid-cols-3 gap-12">
          <div class="col-span-2 ....">
          <main>
          {/* Here main section to add components with tailwind css layout to show Dashboard .... */}
          {/* Mind it every component render here to add in Dashboard Folder .... */}
          <Saving />
          <Dream />
          <Statistic />
          <Recent />
        </main>
          </div>
          <div class=""><Damon/></div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;