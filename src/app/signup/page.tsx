"use client";

// Importing Next and React Packages
import Link from "next/link"
import React, { useEffect, useState } from "react"
import {useRouter} from 'next/navigation'
import axios from "axios"
import { toast } from "react-hot-toast";


export default function SignupPage(){
  const router = useRouter();
  

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSignup = async () => {
    try {
      setLoading(true)
      const response: any = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
      

    } catch (error:any) {
      console.log("Signup failed", error.message);
      
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
    
  }

  useEffect(()=>{
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setButtonDisabled(false)
    }else {
      setButtonDisabled(true)
    }
  },[user])

  return(
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        type="text"
        id="username"
        placeholder="username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" />
    
      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" />

      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" />
    

      <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No Signup" : "Signup"}</button>
    
      <Link href="/login">Visit login page</Link>
    </div>
  )
}