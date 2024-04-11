import type { NextApiRequest, NextApiResponse } from 'next'
import { getJobs, getJobsByLevel } from '@/services/backend';
import secretMiddleware from '@/services/middleware';

type Jobs = {
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
  res: NextApiResponse<Jobs[]>
) {
  secretMiddleware(req, res, () => {
    const level = req.query.level
    let jobs: Jobs[] = []
    if (level && typeof level === 'string') {
      jobs = getJobsByLevel(level)
    } else {
      jobs = getJobs();
    }
    res.status(200).json(jobs)
  });
}