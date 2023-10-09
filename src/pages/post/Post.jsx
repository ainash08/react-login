import React from 'react'
import {useLocation} from 'react-router-dom'
import {posts} from '../../dummyData.js'
import './post.css'

function Post() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);
  console.log(path);
  return (
    <div className = 'post'>
      <h1>{post.title}</h1>
      <img className='postImg' src = {post.img}></img>
      <p className = 'postp1'>{post.desc}</p>
      <p>{post.longDesc}</p>
    </div>
  )
}

export default Post