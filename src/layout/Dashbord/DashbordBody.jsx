import React from "react";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import Header from "../Header/Header";
import HighLightBox from "./HighLightBox";
import PostComment from "./PostComment";
import filter from "../../assest/icons/filter.svg";
import PostFooter from "./PostFooter";
import UserOnlineCommunity from "./UserOnlineCommunity";

function DashbordBody() {
  return (
    <>
      <div className="Dashbord_Main">
        <Header />
        <div className="dashbordBody_flex">
          <div className="left">
            <PostComment />
            <div className="leftSide_headingBox">
              <h1 className="leftSide_heading">Your Highlights</h1>
              <img src={filter} alt="filter" className="filter_Icon" />
            </div>
            <HighLightBox />
            <PostFooter />
          </div>
          <div className="right">
          <UserOnlineCommunity />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashbordBody;
