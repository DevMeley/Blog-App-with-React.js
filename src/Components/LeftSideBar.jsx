import React, { useEffect, useState } from 'react'
import './LeftSideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'



export default function LeftSideBar() {
    const [profile, setProfile] = useState("")

    useEffect(()=>{
        const fetchprofile = async () => {
            const token = localStorage.getItem('jwtToken');
                if (!token) {
                    console.error("No token found, redirecting to login.");
                }
            try {
                const res = await fetch("/api/user/settings/account", {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })
                const data = await res.json()
                console.log(data)
                setProfile(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchprofile()
    },[setProfile])

  return (
    <div className='leftProfile'>
        <div className="profile">
            <div className="profileImage">
                <img src="Public\Images\1647016869605.JPG" alt="" />
            </div>
            <div className="profileInfo">
                    <h3>{profile.username}</h3>
                    <a href={profile.email}>{profile.email}</a>
                </div>
            <div className="others">
                <Link className='Link' to="/account/settings"><p><FontAwesomeIcon icon="fa-solid fa-gear" />Profile</p></Link>
                <p> <FontAwesomeIcon icon="fa-solid fa-book" />My writeup</p>
                <p> <FontAwesomeIcon icon="fa-solid fa-bookmark" />Bookmark </p>
                <p><FontAwesomeIcon icon="fa-solid fa-chart-simple" />Stat </p>
            </div>
  
        </div>
    </div>
  )
}
