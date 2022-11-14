import React from 'react'
import user1 from "../../assest/icons/chatUser/user1.svg"
import flag1 from "../../assest/icons/chatUser/flag1.svg"
import user2 from "../../assest/icons/chatUser/user2.svg"
import flag2 from "../../assest/icons/chatUser/flag2.svg"
import postUser from "../../assest/icons/chatUser/postUser.svg"
import { EuiTextArea, EuiButton } from '@elastic/eui'
import btnGroup from "../../assest/icons/btnGroup.svg"
import sendBtn from "../../assest/icons/chatUser/sendBtn.svg"
import chatImg from "../../assest/images/chatImg.png"


function ChatSection() {
  

  return (
    <div className='chat_Section_Main'>
       <div className='chatSection_Btn'>
        <p className='chat'>Chat</p>
        <p className='participants'>Participants (9)</p>
       </div>
       <div className='hr_group'>
        <div className='hr_left'></div>
        <div className='hr_right'></div>
       </div>
       <div className="chatLayout">
        <img className="chatLayout_Icon" src={user1} alt="user" />
        <div className="chat_userInfo">
          <div className="ChatLayout_userInfo">
            <img  className="country_Flag" src={flag1} alt="flag" />
            <p className="chat_Author_Name">Esther Howard</p>
            <p className="chatTime">1:22</p>
          </div>
           <p className="chat_Title">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           <span>sed do eiusmod</span> tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
      <div className="chatLayout">
        <img className="chatLayout_Icon" src={user2} alt="user" />
        <div className="chat_userInfo">
          <div className="ChatLayout_userInfo">
            <img  className="country_Flag" src={flag2} alt="flag" />
            <p className="chat_Author_Name">Ralph Edwards</p>
            <p className="chatTime">1:26</p>
          </div>
           <p className="chat_Title">
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
        </div>
      </div>
      <div className="chatLayout">
        <img className="chatLayout_Icon" src={user2} alt="user" />
        <div className="chat_userInfo">
          <div className="ChatLayout_userInfo">
            <img  className="country_Flag" src={flag2} alt="flag" />
            <p className="chat_Author_Name">Ralph Edwards</p>
            <p className="chatTime">1:26</p>
          </div>
           <p className="chat_Title">
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
        </div>
      </div>
      <div className="chatLayout">
        <img className="chatLayout_Icon" src={user2} alt="user" />
        <div className="chat_userInfo">
          <div className="ChatLayout_userInfo">
            <img  className="country_Flag" src={flag2} alt="flag" />
            <p className="chat_Author_Name">Ralph Edwards</p>
            <p className="chatTime">1:26</p>
          </div>
           <p className="chat_Title">
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="comment_post">
          <div className="post_Box_Left">
            <img src={postUser} alt="user_icon" className="post_img" />
          </div>
          <div className="post_Box_Right">
            <EuiTextArea
              resize="none"
              className="post_textArea"
              placeholder="Share your thoughts..."
            />
            <div className="post_Box_btn">
              <img src={btnGroup} alt="btn_group" className="btn_Group" />
              <img src={sendBtn} className="btn_Group1"/>
            </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default ChatSection