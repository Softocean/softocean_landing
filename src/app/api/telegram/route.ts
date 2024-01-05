import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const chat_id = process.env.BOT_CHAT_ID;
  const textMessage = `Появилась заявка на сайте от компании ${body.name}. 
Они оставили почту ${body.email} и рабочий телефон ${body.telephone}.`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.BOT_API}/sendMessage?chat_id=${chat_id}&text=${textMessage}`
    );
    return response.json();
  } catch (err) {
    /*res.status(err.statusCode).send({ error: "failed to delete data" });*/
  }
  return NextResponse.json({ message: 'Отправлено в бот телеграмма' }, body);
}
