import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: Request, res: Response){
  return NextResponse.json("The API is up!", {status: 200});
}