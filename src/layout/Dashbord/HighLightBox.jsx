import React from "react";
import Card from "../../component/Card";
import user1 from "../../assest/icons/user1.svg";
import user2 from "../../assest/icons/user2.svg";
import ukFlag from "../../assest/icons/ukFlag.svg";
import dot from "../../assest/icons/dot.svg";
import commentIcon from "../../assest/icons/commentIcon.svg";
import comment from "../../assest/icons/comment.svg";
import { EuiButton } from "@elastic/eui";
import AddComment from "./AddComment"


function HighLightBox() {
  return (
    <Card
      className="highlight_Box"
      title={
        <>
          <div className="highlightbox_Top">
            <img src={user1} alt="user" />
            <p className="highlightBox_desc">
              Marvin and 2 others commented in the thread
            </p>
          </div>
          <hr className="hr" />
        </>
      }
      description={
        <>
          <div className="main_Comment">
            <img src={user2} alt="user" className="userImg" />
            <div className="main_Comment_Right">
              <div className="main_Comment_Right_Top">
                <img src={ukFlag} alt="flag" className="commentBox_Flag" />
                <p className="comment_Author_Name">Cantthinkof Aname</p>
                <img src={dot} alt="dot" className="dot" />
                <p className="comment_Author_Work_Place">
                  Intern at Virtual Internships
                </p>
              </div>
              <div className="main_Comment_Right_Bottom">
                <p className="comment_Time">11h</p>
                <img src={dot} alt="dot" className="dot_buttom" />
                <EuiButton className="comment_Category_btn">UX</EuiButton>
                <EuiButton className="comment_Category_btn bnt2">
                  Product Designer
                </EuiButton>
              </div>
            </div>
          </div>
          <div className="comment_Message_Box">
            <p className="comment">
              'Tell Users what to think'
              <br />
              <br />
              Yeah, you heard it right!
              <br />
              <br />
              Steve Krug, the legendary UX expert and bestselling author of
              'Don't Make Me Think' on web usability and human-computer
              interaction is the mind behind this principle
              <span>...see more</span>
            </p>
            <div className="comment_Message_Box_Footer">
            <img src={commentIcon} className="comment_icons" alt="comment react"/>
            <div className="comment_Message_Box_Footer_Right">
                <img src={comment} alt="comment" className="comment_chatIcon"/>
                <p className="comment_count">6</p>
            </div>
            </div>
          </div>
          <hr className="hr"/>
          <AddComment/>
        </>
      }
    />
  );
}


export default HighLightBox