import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'DELETE') {
    // delete a todo.
    const { id } = req.query;
    const post = await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    return res.json(post);
  }
}
