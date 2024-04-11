import type { NextApiRequest, NextApiResponse } from 'next'
import { getJobById } from '@/services/backend';
import secretMiddleware from '@/services/middleware';

type Job = {
  id: number,
  job: string,
  level: string,
  status: string
}

type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job | ResponseData>
) {
  secretMiddleware(req, res, () => {
    const id = Number(req.query.id)
    if (id && typeof id === 'number') {
      const data: Job | ResponseData = getJobById(id);
      res.status(200).json(data)
    } else {
      res.status(200).json({message: 'Invalid id'})
    }
  });
}