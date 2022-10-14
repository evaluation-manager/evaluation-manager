import React, { useState } from 'react'
import {Navigate} from 'react-router-dom';

export default function PrivateRoute({children, handle}){
  const [user,setUser]=useState(true)

  return (
   <>
   {/* user ? children :<Navigate to="/login">{handle}</Navigate> */}
   </>
  )
 
}
