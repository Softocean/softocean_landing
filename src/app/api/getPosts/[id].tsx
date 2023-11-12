import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

// DELETE /api/post/:id
export default async function handle(req: any, res: any) {
  const postId = req.query.id;
  if (req.method === 'DELETE') {
    const post = await prisma.todo.delete({
      where: { id: postId },
    });
    res.json(post);
  } else {
    throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
}
