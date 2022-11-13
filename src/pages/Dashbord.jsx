import React from "react";
import {
  EuiPageTemplate,
} from "@elastic/eui";
import Sidebar from "../layout/Sidebar/Sidebar";
import DashbordBody from "../layout/Dashbord/DashbordBody";

export default ({
  button = <></>,
  content = <DashbordBody/>,
  sidebar = <Sidebar/>,
  // header = <Header/>,
  panelled,
  bottomBorder = false,
  sidebarSticky,
  offset,
  grow,
}) => {
  return (
    <EuiPageTemplate
      panelled={panelled}
      bottomBorder={bottomBorder}
      grow={grow}
      offset={offset}
    >
      <EuiPageTemplate.Sidebar sticky={sidebarSticky} minWidth='260px' paddingSize ="none">
        {sidebar}
      </EuiPageTemplate.Sidebar>
      {/* <EuiPageTemplate.Header  rightSideItems={[button]} paddingSize="none" className="EuiPageTemplate_Header">
        {header}
      </EuiPageTemplate.Header> */}
      {/* <EuiPageTemplate.Section
        grow={false}
        bottomBorder={bottomBorder}
      ></EuiPageTemplate.Section> */}
      <EuiPageTemplate.Section>{content}</EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
};
