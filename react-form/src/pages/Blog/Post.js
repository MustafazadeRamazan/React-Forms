import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {
    const { id } = useParams();
  return (
    <div>Post page {id}</div>
  )
}