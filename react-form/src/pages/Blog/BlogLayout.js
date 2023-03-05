import React from 'react'
import { Outlet } from 'react-router-dom'
export default function BlogLayout() {
  return (
        <>
            <p>Blog Page</p>
            <Outlet/>
        </>
  )
}
