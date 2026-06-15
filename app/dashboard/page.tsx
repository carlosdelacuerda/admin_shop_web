'use client';
import { useState } from 'react';

export default function Dashboard(){

  const [foreignVisitors,setFV]=useState(0);
  const [localVisitors,setLV]=useState(0);
  const [foreignBuyers,setFB]=useState(0);
  const [localBuyers,setLB]=useState(0);

  function add(setter,val){ setter(v=>v+val); }

  return (
    <div style={{padding:20}}>
      <h1>Daily Entry</h1>

      <h3>Foreign Visitors</h3>
      <button onClick={()=>add(setFV,-1)}>-</button>{foreignVisitors}<button onClick={()=>add(setFV,1)}>+</button>

      <h3>Local Visitors</h3>
      <button onClick={()=>add(setLV,-1)}>-</button>{localVisitors}<button onClick={()=>add(setLV,1)}>+</button>

      <h3>Foreign Buyers</h3>
      <button onClick={()=>add(setFB,-1)}>-</button>{foreignBuyers}<button onClick={()=>add(setFB,1)}>+</button>

      <h3>Local Buyers</h3>
      <button onClick={()=>add(setLB,-1)}>-</button>{localBuyers}<button onClick={()=>add(setLB,1)}>+</button>

      <h3>Notes</h3>
      <textarea />

    </div>
  );
}
