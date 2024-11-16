import React from 'react'
import './LeftSideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function LeftSideBar() {

  return (
    <div className='leftProfile'>
        <div className="profile">
            <div className="profileImage">
                <img src="Public\Images\1647016869605.JPG" alt="" />
            </div>
            <div className="profileInfo">
                <h3>Ayantola Monsurat</h3>
                <a href="ayantolamonsurat@gmail.com">ayantolamonsurat@gmail.com</a>
                <button>Edit Profile</button>
            </div>
            <div className="others">
                <p> <FontAwesomeIcon icon="fa-solid fa-book" />My writeup</p>
                <p> <FontAwesomeIcon icon="fa-solid fa-bookmark" />Bookmark </p>
                <p><FontAwesomeIcon icon="fa-solid fa-chart-simple" />Stat </p>
                <p> <FontAwesomeIcon icon="fa-solid fa-gear" />Settings</p>
            </div>
  
        </div>
    </div>
  )
}
