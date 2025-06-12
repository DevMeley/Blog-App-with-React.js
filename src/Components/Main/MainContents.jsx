import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Posts from '../Posts/Posts'
import Category from '../Categories/Category'
import './MainContents.css'

export default function MainContents() {
  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchposts = async () => {
        try {
            const res = await fetch('https://my-blog-app-api.onrender.com/api/publish/all');
            const data = await res.json();
            console.log(data.generalposts);
            setPosts(data.generalposts)
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }
     {
      setIsLoading(false);
    }
    fetchposts()
  }, [setPosts])
  return (
    <div className='main'>
      {/* <div className="cats">
        <Link to={"/"}><p>All</p></Link>
            <Category />
      </div> */}
      <div className="post">
        {posts.map((post) => (
          <Posts key={post._id} post={post}/>
        ))}
      </div>
    </div>   
  )
}
