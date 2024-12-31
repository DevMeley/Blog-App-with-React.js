import React from 'react'
import { useState, useEffect } from 'react'
import EditModal from './Modal/EditModal'

export default function ProfileComp() {
    const [profile, setProfile] = useState("")
    const [openModal, setOpenModal] = useState(false)

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
    <div>
        <div className='bodyContainer'>
          <div className="profileInfo">
            <h1>{profile.username}</h1>
            <a href={profile.email}>{profile.email}</a>
          </div>
          <button className='editModalBtn' onClick={()=> {setOpenModal(true)}}>Edit Profile</button>
        </div>
        {openModal && <EditModal setOpenModal={setOpenModal} />}
    </div>
  )
}
