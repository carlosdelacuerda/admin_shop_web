'use client';
import { useState } from 'react';

export default function Login(){
  const [u,setU]=useState('');
  const [p,setP]=useState('');

  async function login(){
    const r = await fetch('/api/auth/login',{
      method:'POST',
      body:JSON.stringify({username:u,password:p})
    });

    if(r.ok) location.href='/dashboard';
    else alert('error');
  }

  return (
    <div style={{padding:20}}>
      <h1>Login</h1>
      <input placeholder="user" onChange={e=>setU(e.target.value)} />
      <input placeholder="pass" type="password" onChange={e=>setP(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
