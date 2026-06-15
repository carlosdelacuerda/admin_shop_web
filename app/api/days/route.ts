import { prisma } from '@/lib/prisma';

export async function GET(){
  return Response.json(await prisma.dailyRecord.findMany({include:{sales:true}}));
}

export async function POST(req){
  const d = await req.json();
  return Response.json(await prisma.dailyRecord.create({data:d}));
}
