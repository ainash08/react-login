import React from 'react'
import {posts} from '../../dummyData.js'
import Card from '../../components/card/Card.jsx'
import './home.css'

function Home() {
  return (
    <div className='home'>
        {
            posts.map((post) => (
                <Card card = {post}/>))
        }
    </div>
  )
}

export default Home