import React from "react";
import Card from "../../component/Card";
import { EuiTextArea, EuiButton } from "@elastic/eui";
import user from "../../assest/icons/user.svg";
import btnGroup from "../../assest/icons/btnGroup.svg";

function PostComment() {
  return (
    <Card
      className="comment_Box"
      description={
        <div className="comment_Box_Inside">
          <div className="comment_Box_Left">
            <img src={user} alt="user_icon" className="comment_Box_img" />
          </div>
          <div className="comment_Box_Right">
            <EuiTextArea
              resize="none"
              className="textArea"
              placeholder="What’s on your mind?"
            />
            <div className="comment_Box_btn">
              <img src={btnGroup} alt="btn_group" className="btn_Group" />
              <EuiButton className="post_btn">Post</EuiButton>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default PostComment;
