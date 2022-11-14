import React from "react";
import {
  EuiPageTemplate,
} from "@elastic/eui";
import Sidebar from "../layout/Sidebar/Sidebar";
import DashbordBody from "../layout/Dashbord/DashbordBody";
// eslint-disable-next-line
export default ({
  content = <DashbordBody/>,
  sidebar = <Sidebar/>,
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
      <EuiPageTemplate.Section>{content}</EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
};
