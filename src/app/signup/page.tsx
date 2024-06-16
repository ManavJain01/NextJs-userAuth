"use client";

// Importing Next and React Packages
import Link from "next/link"
import React, { useState } from "react"
import {useRouter} from 'next/navigation'
import {axios} from "axios"


export default function SignupPage(){
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })

  const onSignup = async () => {
    console.log("hi");
    
  }

  return(
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        placeholder="username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" />
    
      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" />

      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" />
    

      <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup here</button>
    
      <Link href="/login">Visit login page</Link>
    </div>
  )
}