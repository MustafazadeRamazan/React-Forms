import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogNotFound() {
  return (
    <>
        <div style={{color: "red"}}>404 Page Not Found</div>
        <Link to="/blog">Redirect to Blog</Link>
    </>
  )
}
