import React from 'react'
import '../Pages CSS/Publish.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Publish() {
  return (
    <div>
        <div className="publishContainer">
          <form action="">
            <input type="text"  placeholder='Title'/>
            <textarea name="" id="" placeholder='Body...'></textarea>
            <label htmlFor="file" className='custom-file-upload'>
              <FontAwesomeIcon icon="fa-solid fa-image" /> 
            </label>
            <input type="file" id='file'/>
          </form>
        </div>
    </div>
  )
}
