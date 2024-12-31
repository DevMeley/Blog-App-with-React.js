import React , {useState, useEffect}from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import MainContents from '../Components/Main/MainContents'
import Nav from '../Components/Header/Nav'
import '../Pages CSS/Home.css'


export default function Home() {
 const [user, setUser] = useState(false)

//  useEffect to validate token
 useEffect(()=>{
  const token = localStorage.getItem('jwtToken');
    if (token) {
      setUser(true); // Assume the presence of a token means logged in
    }
 },[])
  return (
    <div>
        <Nav user={user}/>
        <div className='All'>
            {user?
              <div className="container">
                <MainContents />
                <LeftSideBar /> 
              </div>
              :
              <MainContents />
            }
          
      </div>
    </div>
  )
}
