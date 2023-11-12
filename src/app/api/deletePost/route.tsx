import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  try {
    const postId = req.query.id;
    const post = await prisma.todo.delete({
      where: { id: Number(postId) },
    });

    if (!post) throw new Error(`error`);

    return res.json(post);
  } catch (err) {
    /*res.status(err.statusCode).send({ error: "failed to delete data" });*/
  }
}
