import { prisma } from '@/lib/prisma';

export async function POST(req){
  const s = await req.json();
  return Response.json(await prisma.sale.create({data:s}));
}
