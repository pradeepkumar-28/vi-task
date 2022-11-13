import React from "react";
import commentUser1 from "../../assest/icons/commentUser1.svg";
import indianFlag from "../../assest/icons/indianFlag.svg";
import dot from "../../assest/icons/dot.svg";
import userReaction from "../../assest/icons/userReaction.svg";
import userReaction1 from "../../assest/icons/userReaction1.svg";
import user3 from "../../assest/icons/user3.svg";

function CommentsLayout() {
  return (
    <>
      <div className="CommentsLayout">
        <img src={commentUser1} className="CommentsLayout_Icon" alt="user" />
        <div className="comments_userInfo_Layout">
          <div className="CommentsLayout_userInfo">
            <img src={indianFlag} className="commentBox_Flag" alt="user" />
            <p className="comment_Author_Name">Esther Howard</p>
            <img src={dot} alt="dot_icon" className="dot" />
            <p className="comment_Author_Work_Place">
              Student at Birmingham City University
            </p>
            <p className="commentTime">6h</p>
          </div>
          <p className="comment_Title">
            Interesting insight. Is the telling implied i.e. as the product is
            used? Or is the user educated? My guess is for B2C, it's the
            indirect approach and more of the educational approach for B2B.
          </p>
          <img src={userReaction} alt="user_Reactions" className="user_Reactions"/>
        </div>
      </div>
      <div className="CommentsLayout">
        <img src={user3} className="CommentsLayout_Icon" alt="user" />
        <div className="comments_userInfo_Layout">
          <div className="CommentsLayout_userInfo">
            <img src={indianFlag} className="commentBox_Flag" alt="flag"/>
            <p className="comment_Author_Name">Marvin McKinney</p>
            <img src={dot} alt="dot_icon" className="dot" />
            <p className="comment_Author_Work_Place">
            Intern at Ampersand Design
            </p>
            <p className="commentTime">6h</p>
          </div>
          <p className="comment_Title">
          My take, Hemang - as the Product is used. The user should feel that the product is built exactly as they need and want it  <span>...see more</span>
          </p>
          <img src={userReaction1} alt="user_Reactions" className="user_Reactions"/>
        </div>
      </div>
    </>
  );
}

export default CommentsLayout;
