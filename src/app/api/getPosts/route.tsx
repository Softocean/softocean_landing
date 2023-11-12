import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.todo.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(error);
  }
}
