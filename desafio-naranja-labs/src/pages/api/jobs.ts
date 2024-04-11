import type { NextApiRequest, NextApiResponse } from 'next'
import { getJobs } from '@/services/backend';

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
  const jobs = getJobs();
  res.status(200).json(jobs)
}