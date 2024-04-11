import { NextApiRequest, NextApiResponse } from "next";

export default function secretMiddleware(req: NextApiRequest, res: NextApiResponse, next: Function) {
  const secret = req.headers.secret;
  if (secret !== 'naranja-labs'){
    return res.status(401).json({message: 'Verify secret key'});
  }
  next()
}