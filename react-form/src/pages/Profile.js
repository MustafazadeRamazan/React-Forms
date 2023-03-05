import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Profile() {
  const { setUser } = useAuth();
  const LogoutHandle = () => {
    setUser(false);
  }

  return (
    <div>
      Profile page
      <br/>
      <button onClick={LogoutHandle}>Logout</button>

    </div>
  )
}
