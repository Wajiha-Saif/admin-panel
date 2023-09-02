//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

//import react pro sidebar components
import {Menu, MenuItem, SubMenu, Sidebar, useProSidebar } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/home";
import Transactions from "../../pages/Transactions/Transactions";


//import sidebar css from react-pro-sidebar module and our custom css 

import "./header.css";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const { collapseSidebar } = useProSidebar();

  return (
    <>
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
        <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  collapseSidebar();
                }}
              />
            }
          >
            <h2>ADMIN PANEL</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="dashboard" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            Dashboard
          </MenuItem>
          {/* <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem> */}
          {/* <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
          </SubMenu> */}
          {/* <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu> */}
          <MenuItem
            component={<Link to="transactions" className="link" />}
            icon={<MonetizationOnRoundedIcon />}
          >
            Transactions
          </MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </section>
    </div>
    </>
  );
};

export default Header;