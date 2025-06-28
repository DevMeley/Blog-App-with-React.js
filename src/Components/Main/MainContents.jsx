import React, { useEffect, useState } from 'react'
import Posts from '../Posts/Posts'
import './MainContents.css'
import LoadingState from '../LoadingState'

export default function MainContents({profilePhotoUrl}) {
  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchposts = async () => {
      setIsLoading(true); 
      try {
        const res = await fetch('https://my-blog-app-api.onrender.com/api/publish/all');
        const data = await res.json();
        console.log(data.generalposts)
        setPosts(data.generalposts)
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false); 
      }
    }
    fetchposts()
  }, [])

  return (
    <div className='main'>
      {isLoading ? (
        <img src="assets\spinner.gif" alt="" />
      ) : (
        <div className="post">
          {posts.map((post) => (
            <Posts key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>   
  )
}
