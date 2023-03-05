import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <ul>
      <li><Link to="/blog/post/1">Post 1</Link></li>
      <li><Link to="/blog/post/2">Post 2</Link></li>
    </ul>
    
  )
}
