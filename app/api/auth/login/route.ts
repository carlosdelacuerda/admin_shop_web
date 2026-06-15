import { NextResponse } from 'next/server';
import { validate } from '@/lib/auth';

export async function POST(req){
  const b = await req.json();

  if(!validate(b.username,b.password)){
    return NextResponse.json({error:true},{status:401});
  }

  const res = NextResponse.json({ok:true});
  res.cookies.set('session','admin',{httpOnly:true,maxAge:60*60*24*30});
  return res;
}
