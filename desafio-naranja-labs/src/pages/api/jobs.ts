import type { NextApiRequest, NextApiResponse } from 'next'
import { getJobs, getJobsByLevel } from '@/services/backend';
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
  res: NextApiResponse<Job[]>
) {
  secretMiddleware(req, res, () => {
    const level = req.query.level
    let jobs: Job[] = []
    if (level && typeof level === 'string') {
      jobs = getJobsByLevel(level)
    } else {
      jobs = getJobs();
    }
    res.status(200).json(jobs)
  });
}