import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Phước Thanh</b> và <b>3 người bạn khác</b> sinh nhật hôm nay.
            </span>
          </div>
            <img src="/assets/ad.png" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {Users.map((u)=>(
                <Online key={u.id} user={u}/>
              ))}                                                           
            </ul>
        </div>
    </div>
  )
}
