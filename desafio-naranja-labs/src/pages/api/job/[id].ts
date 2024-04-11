import type { NextApiRequest, NextApiResponse } from 'next'
import { getJobById } from '@/services/backend';
import secretMiddleware from '@/services/middleware';
import { Job, ResponseData } from '@/types';
 
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
      res.status(400).json({message: 'Invalid id'})
    }
  });
}