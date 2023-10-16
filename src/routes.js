import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";
import EDC from "views/admin/edc15";
import Med9 from "views/admin/med9";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import Porsche992 from "views/admin/porsche992";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "EDC 15",
    layout: "/admin",
    path: "edc15",
    icon: <MdHome className="h-6 w-6" />,
    component: <EDC />,
  },
  {
    name: "MED 9.1",
    layout: "/admin",
    path: "med9.1",
    icon: <MdHome className="h-6 w-6" />,
    component: <Med9 />,
  },
  {
    name: "Porsche 992",
    layout: "/admin",
    path: "porsche",
    icon: <MdHome className="h-6 w-6" />,
    component: <Porsche992 />,
  }
];
export default routes;
