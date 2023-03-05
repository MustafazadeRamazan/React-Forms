import React from 'react'
import {Link} from 'react-router-dom'
export default function NotFound() {
  return (
    <>
        <div style={{color: "red"}}>404 Page Not Found</div>
        <Link to="/">Redirect to Home</Link>
    </>
  )
}
