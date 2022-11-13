import React from "react";
import {
  EuiPageTemplate,
} from "@elastic/eui";
import Sidebar from "../layout/Sidebar/Sidebar";

export default ({
  button = <></>,
  content = <></>,
  sidebar = <Sidebar/>,
  header,
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
      <EuiPageTemplate.Header {...header} rightSideItems={[button]} paddingSize="none"/>
      <EuiPageTemplate.Section
        grow={false}
        bottomBorder={bottomBorder}
      ></EuiPageTemplate.Section>
      <EuiPageTemplate.Section>{content}</EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
};
