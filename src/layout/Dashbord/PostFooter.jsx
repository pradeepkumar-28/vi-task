import React from "react";
import Card from "../../component/Card";
import footer1 from "../../assest/icons/footer1.svg"
import footer2 from "../../assest/icons/footer2.svg"
import footer3 from "../../assest/icons/footer3.svg"

function PostFooter() {
  return (
    <Card
      className="Footer"
      description={
        <>
          <div className="footer_data">
            <img src={footer1} alt="user1" className="footer_User" />
            <img src={footer2} alt="user2" className="footer_User"  />
            <img src={footer3} alt="user3" className="footer_User" />
            <p className="footer_Title">6 people found this post Insightful</p>
          </div>
          <hr className="hr_footer"/>
        </>
      }
    />
  );
}

export default PostFooter;
