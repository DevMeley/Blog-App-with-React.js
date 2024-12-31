import React, { useState } from 'react'
import "./EditModal.css"
import { useNavigate } from 'react-router-dom'

export default function EditModel({setOpenModal}) {
    const [username, setUsername] = useState("")
    
    
    const editProfile = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('jwtToken');
                if (!token) {
                    console.error("No token found, redirecting to login.");
                }
        try {
            const res = await fetch("/api/user/settings/edit",{
                method: "PUT",
                body: JSON.stringify({username}),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            const data = await res.json()
            console.log(data)
            setOpenModal(false)

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <div className="modelOverlay">
            <div className="modelContainer">
                <h2>Edit Profile Information</h2>
                <form  onSubmit={editProfile}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={(e)=> setUsername(e.target.value)}/>
                    </label>
                    <div className="btns">
                        <button onClick={()=>{setOpenModal(false)}}>Cancel</button>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
