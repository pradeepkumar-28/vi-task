import React from "react";
import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiAvatar,
  EuiHeaderLinks,
} from "@elastic/eui";
import SearchBox from "../../component/SearchBox";
import langauge from "../../assest/icons/langauge.svg";
import chatIcon from "../../assest/icons/chatIcon.svg";
import bookmark from "../../assest/icons/bookmark.svg";
import notification from "../../assest/icons/notification.svg";
import user from "../../assest/icons/user.svg";

const Header = () => {
  return (
    <EuiHeader className="Header">
      <EuiHeaderSectionItem border="right">
        <SearchBox />
      </EuiHeaderSectionItem>
      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiAvatar
            size="l"
            color="plain"
            name="Plain color"
            iconType={langauge}
            className="langauge_Icon"
          />
          <EuiAvatar
            size="l"
            color="plain"
            name="Plain color"
            iconType={chatIcon}
            className="chat_Icon"
          />
          <EuiAvatar
            size="l"
            color="plain"
            name="Plain color"
            iconType={bookmark}
            className="bookmark_Icon"
          />
          <EuiAvatar
            size="l"
            color="plain"
            name="Plain color"
            iconType={notification}
            className="notification_icon"
          />
          <img src={user} className="user_icon" alt="user_icon"/>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};

export default Header
