import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req: Request) {
  try {
    const title = await req.json();

    const post = await prisma.todo.create({
      data: title,
    });

    return new NextResponse(JSON.stringify(post), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
