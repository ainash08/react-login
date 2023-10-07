import React from 'react'
import {useLocation} from 'react-router-dom'

function Post() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div>Post</div>
  )
}

export default Post