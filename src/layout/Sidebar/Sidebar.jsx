import React from "react";
import logo from "../../assest/icons/logo.svg";
import leftArrow from "../../assest/icons/leftArrow.svg";
import { MenuItems } from "./MenuItems";

function Sidebar() {
  return (
    <div className="sidebar_Main">
      <div className="sidebar_Logo">
        <img src={logo} className="logo" alt="logo" />
        <img src={leftArrow} className="leftArrow" alt="leftArrow" />
      </div>
        {
            MenuItems.map((value)=>{
                const {name,append,prepend} = value
                return(
                    <div className="sidebar_MenuItem">
                      
                        <img src={prepend} className="menu_Prepend" />
                        <p className="menu_Title">{name}</p>
                        <img src={append} className="menu_Append" />
                    </div>
                )
            })
        }
    </div>
  );
}

export default Sidebar;
