import React from 'react'
import {posts} from '../../dummyData.js'

function Home() {
  return (
    <div className='home'>
        {
            posts.map((post) => (
                <span>{post.title}</span>))
        }
    </div>
  )
}

export default Home