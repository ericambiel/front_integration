import { NextApiRequest, NextApiResponse } from 'next';

export type Client = {
  id: number;
  nome: string;
  email: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Client>
) {
  if (req.method === 'GET') return handlerGet(req, res);
  res.status(405).end();
}

function handlerGet(req: NextApiRequest, res: NextApiResponse<Client>) {
  const { id } = req.query;
  res.status(200).json({
    id: +id,
    nome: `Eric ${id}`,
    email: `eric${id}@email.com`,
  });
}
