import { EuiTextArea } from "@elastic/eui";
import React from "react";
import commentUser from "../../assest/icons/commentUser.svg";
import polygyn from "../../assest/icons/polygyn.svg";
import CommentsLayout from "./CommentsLayout";

function addCommentLayout() {
  return (
    <>
      <div className="addCommentLayout_Box">
        <img src={commentUser} alt="commentUser" />
        <EuiTextArea
          placeholder="Share your thoughts..."
          resize="none"
          className="comment_TextArea"
        />
      </div>
      <div className="addCommentLayout_Box_Filter">
        <p className="addCommentLayout_Box_FilterBtn">Most relevant</p>
        <img src={polygyn} alt="arrow-down" className="polygynIcon" />
      </div>
      <CommentsLayout/>
    </>
  );
}

export default addCommentLayout;
