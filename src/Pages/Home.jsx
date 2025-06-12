import React , {useState, useEffect}from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import MainContents from '../Components/Main/MainContents'
import Nav from '../Components/Header/Nav'
import '../Pages CSS/Home.css'


export default function Home({ profile, loggedIn, setLoggedIn }) {

  return (
    <div>
        <Nav loggedIn={loggedIn}/>
        <div className='All'>
            {loggedIn && profile?
              <div className="container">
                <MainContents />
                <LeftSideBar profile={profile} setLoggedIn={setLoggedIn}/> 
              </div>
              :
              <MainContents />
            }
          
      </div>
    </div>
  )
}
