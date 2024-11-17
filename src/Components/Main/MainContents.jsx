import React from 'react'
import Posts from '../Posts/Posts'
import Category from '../Categories/Category'
import './MainContents.css'

export default function MainContents() {
  return (
    <div className='main'>
        <Category />
      <div className="post">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
      </div>
    </div>   
  )
}
