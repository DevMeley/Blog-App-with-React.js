import React from 'react'
import MainContents from '../Components/Main/MainContents'
import LeftSideBar from '../Components/LeftSideBar'

export default function Music({posts}) {
  return (
    <div>
        <div className='All'>
            <div className="container">
                <MainContents posts = {posts} />
                <LeftSideBar />
            </div>
        </div>
    </div>
  )
}
