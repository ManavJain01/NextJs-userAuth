"use client";

// Importing Next and React Packages
import Link from "next/link"
import React, { useState } from "react"
import {useRouter} from 'next/navigation'
import {axios} from "axios"


export default function LoginPage(){
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const onLogin = async () => {
    console.log("hi");
    
  }

  return(
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Login</h1>
      <hr />
    
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
    

      <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
    
      <Link href="/signup">Visit Signup page</Link>
    </div>
  )
}