import React from "react";
import Card from "../../component/Card";
import group from "../../assest/icons/group.svg";
import online from "../../assest/icons/online.svg";
import offline from "../../assest/icons/offline.svg";
import footer1 from "../../assest/icons/footer1.svg";
import footer2 from "../../assest/icons/footer2.svg";
import footer3 from "../../assest/icons/footer3.svg";
import ukFlag from "../../assest/icons/ukFlag.svg";
import japFlag from "../../assest/icons/japFlag.svg";
import flag3 from "../../assest/icons/flag3.svg";
import onlineUser1 from "../../assest/icons/onlineUser1.svg";
import onlineUser2 from "../../assest/icons/onlineUser2.svg";
import onlineUser3 from "../../assest/icons/onlineUser3.svg";
import onlineChat from "../../assest/icons/onlineChat.svg";
import Button from "../../component/Button";
import { useNavigate } from "react-router";



function UserOnlineCommunity() {
    const naviagte = useNavigate()

  const onContributeHandler=()=>{
    naviagte("/TeamMeet")
  }
  
  const LayoutData = [
    {
      layout: (
        <>
          <div className="rightSide_Layout_btnGroup">
            <Button className="small-Btn" title="Graphic Design" />
            <Button className="small-Btn" title="Advertising" />
          </div>
          <p className="rightSide_Layout_Description_SubTitle">
            Topic:<span>Subliminal messages in advertisement</span>
          </p>
          <div className="footer_data">
            <div className="footer_data_Img">
              <img src={footer1} alt="user1" className="footer_User" />
              <img src={footer2} alt="user2" className="footer_User" />
              <img src={footer3} alt="user3" className="footer_User" />
              <p className="rightSide_Layout_Description_desc">+ 6 more</p>
            </div>
            <p className="rightSide_Layout_time_Count">Ends in 33 mins</p>
          </div>
          <div className="rightSide_Layout_BtnGroup">
            <Button className="large-Btn" title="Contribute" onClick={onContributeHandler}  />
            <Button className="large-Btn" title="View" />
          </div>
          <hr className="rightSide_Layout_hr" />
        </>
      ),
    },
    {
      layout: (
        <>
          <div className="rightSide_Layout_btnGroup">
            <Button className="small-Btn" title="UX" />
          </div>
          <p className="rightSide_Layout_Description_SubTitle">
            Topic:<span>The role of personality in design</span>
          </p>
          <div className="footer_data">
            <div className="footer_data_Img">
              <img src={footer1} alt="user1" className="footer_User" />
              <img src={footer2} alt="user2" className="footer_User" />
              <img src={footer3} alt="user3" className="footer_User" />
              <p className="rightSide_Layout_Description_desc">+ 3 more</p>
            </div>
            <p className="rightSide_Layout_time_Count">Ends in 1 h</p>
          </div>
          <div className="rightSide_Layout_BtnGroup">
            <Button className="large-Btn" title="Contribute" onClick={onContributeHandler} />
            <Button className="large-Btn" title="View" />
          </div>
          <hr className="rightSide_Layout_hr" />
        </>
      ),
    },
    {
      layout: (
        <>
          <div className="rightSide_Layout_btnGroup">
            <Button className="small-Btn small-btn_category" title="Graphic Design" />
          </div>
          <p className="rightSide_Layout_Description_SubTitle">
            Topic:<span>The use of space in design aesthetics</span>
          </p>
          <div className="footer_data">
            <div className="footer_data_Img">
              <p className="rightSide_Layout_Description_desc">
                Starts at 12:30 PM IST
              </p>
            </div>
            <Button
              className="large-Btn rightSide_Layout_time_Count"
              title="Notify Me"
            />
          </div>

          <hr className="rightSide_Layout_hr" />
        </>
      ),
    },
  ];

  const userOnlineData = [
    {
      profile: onlineUser1,
      name: "Cantthink of Aname",
      workPlace: "Intern at Virtual Internships",
      country_Flag: ukFlag,
    },
    {
        profile: onlineUser2,
        name: "Cantthink of Aname",
        workPlace: "Intern at Virtual Internships",
        country_Flag: japFlag,
      },
      {
        profile: onlineUser3,
        name: "Cantthink of Aname",
        workPlace: "Intern at Virtual Internships",
        country_Flag: flag3,
      },
  ];

  return (
    <Card
      className="rightSide_Layout"
      title={
        <div className="rightSide_Layout_Main">
          <div className="rightSide_Layout_Top">
            <img src={group} alt="group" className="group_Icon" />
            <h1 className="rightSide_Layout_Title">Design Community</h1>
          </div>
          <div className="rightSide_Layout_Parent">
            <div className="rightSide_Layout_child_left">
              <img src={online} className="online_Icon" alt="Online" />
              <p className="user_Online">312 Online</p>
            </div>
            <div className="rightSide_Layout_child_Right">
              <img src={offline} className="offline_Icon" alt="offline" />
              <p className="user_Offline">678 Members</p>
            </div>
          </div>
          <hr className="rightSide_Layout_hr" />
        </div>
      }
      description={
        <div className="rightSide_Layout_Description">
          <p className="rightSide_Layout_Description_Title">Thought Bubbles</p>
          {LayoutData.map((Data) => {
            const { layout } = Data;
            return layout;
          })}
          <div className="Online_User_Layout">
            <p className="Online_User_Layout_Title">People Online</p>
            {userOnlineData.map((data) => {
                const {profile, name,workPlace,country_Flag} = data
              return (
                <div className="online_User_Box">
                  <img src={profile} className="online_User_Image" alt="online_User_Image" />
                  <div className="online_User_Data">
                    <div className="online_User_Data_Top">
                    <img src={country_Flag} className="online_User_Flag"alt="online_User_Image" />
                    <p className="online_User_Name">{name}</p>
                    </div>
                   <div className="online_User_Data_Bottom">
                   <p className="online_User_WorkPlace">{workPlace}</p>
                   </div>
                  </div>
                  <div className="online_User_Chat">
                    <img src={onlineChat} className="online_User_ChatIcon" alt="online_User_Image" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
    />
  );
}

export default UserOnlineCommunity