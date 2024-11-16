import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Nav.css'

export default function Nav() {
  return (
    <div>
        <nav>
            <div className="nav">
                <div className="logoAndSearch">
                    <h2>ThinkBig</h2>
                    <input type="text"  placeholder='Search for anything..'/>
                </div>
                <div className="publish">
                    <button><FontAwesomeIcon icon="fa-solid fa-pen" style={{paddingRight: "10px"}}/>Publish</button>
                    <div className="notifyAndProfile">
                        <span><FontAwesomeIcon icon="fa-solid fa-bell" /></span>
                        <div className="profileimg">
                            <img src="Public\Images\1647016869605.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
