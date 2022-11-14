import React from 'react'
import moderatorImg from "../assest/images/moderatorImg.png"
import meetUser1 from "../assest/images/meetUser1.png"
import meetUser2 from "../assest/images/meetUser2.png"
import meetUser3 from "../assest/images/meetUser3.png"
import Card from "../component/Card"
import Button from "../component/Button"
import unmute from "../assest/icons/unmute.svg"
import video from "../assest/icons/video.svg"
import pencil from "../assest/icons/pencil.svg"
import hand from "../assest/icons/hand.svg"
import ChatSection from '../layout/TeamMeeting/ChatSection'



function TeamMeetingPage() {
  return (
    <div className='TeamMeetingPage'>
     <div className='TeamMeetingPage_Content'>
     <div className='TeamMeetingPage_leftSide'>
        <p className='TeamMeetingPage_Title'>Topic: <span>The role of personality in design</span></p>
        <div className='Image_layout'>
          <div className='moderatorImg'>
            <p className='Moderator'>Moderator</p>
          <img src={moderatorImg}/>
          </div>
          <img src={meetUser1}/>
          <img src={meetUser2}/>
          <img src={meetUser3}/>
        </div>
        <div className='btn_Group'>
          <div className='leftSide_btn'>
            <Button title="Unmute" icon={unmute} className="call_btn"/>
            <Button title="Stop Video" icon={video} className="call_btn"/>
            <Button title="Jump to Whiteboard" icon={pencil} className="call_btn"/>
          </div>
          <div className='rightSide_btn'>
          <Button title="Bye Bubble" icon={hand} className="call_btn call_disconectBtn"/>
          </div>
        </div>
      </div>
      <div className='TeamMeetingPage_rightSide'>
        <Card className="TeamMeetingPage_Card" description={<ChatSection/>}/>
      </div>
     </div>
    </div>
  )
}

export default TeamMeetingPage