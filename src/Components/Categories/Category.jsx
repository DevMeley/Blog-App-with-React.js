import React, { useEffect, useState } from 'react'
import "./Categories.css"

export default function Category({cats}) {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category/all")
        const data = await res.json()
        setCategories(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategories()
  },[setCategories])

  return (
    <div>
        <div className="categories">
          {categories.map((cats) =>(
            <p key={cats._id}>{cats.name}</p>
          ))}
        </div>
    </div>
  )
}
