import React from 'react'
import moderatorImg from "../assest/images/moderatorImg.png"
import meetUser1 from "../assest/images/meetUser1.png"
import meetUser2 from "../assest/images/meetUser2.png"
import meetUser3 from "../assest/images/meetUser3.png"
import Card from "../component/Card"
import Button from "../component/Button"


function TeamMeetingPage() {
  return (
    <div className='TeamMeetingPage'>
     <div className='TeamMeetingPage_Content'>
     <div className='TeamMeetingPage_leftSide'>
        <p className='TeamMeetingPage_Title'>Topic: <span>The role of personality in design</span></p>
        <div className='Image_layout'>
          <img src={moderatorImg}/>
          <img src={meetUser1}/>
          <img src={meetUser2}/>
          <img src={meetUser3}/>
        </div>
        <div className='btn_Group'>
          <div className='leftSide_btn'>
            <Button title="Unmute"/>
            <Button title="Stop Video"/>
            <Button title="Jump to Whiteboard"/>
          </div>
          <div className='rightSide_btn'>
          <Button title="Bye Bubble"/>
          </div>
        </div>
      </div>
      <div className='TeamMeetingPage_rightSide'>
        <Card className="TeamMeetingPage_Card" title="hello"/>
      </div>
     </div>
    </div>
  )
}

export default TeamMeetingPage