import React from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import MainContents from '../Components/Main/MainContents'
import '../Pages CSS/Home.css'


export default function Home() {

  return (
    <div className='All'>
        <div className="container">
            <MainContents />
            <LeftSideBar />
        </div>
    </div>
  )
}
