import type { NextApiRequest, NextApiResponse } from 'next'
import { getJobById } from '@/services/backend';
import secretMiddleware from '@/services/middleware';
import { ResponseData, Submission } from '@/types';


 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse< ResponseData>
) {
  secretMiddleware(req, res, () => {
    const submission: Submission = req.body

    if (!submission) {
      res.status(400).json({message: 'Invalid submission'})
    } else if (!submission.name || !submission.age || !submission.phone || !submission.city || !submission.state) {
      res.status(422).json({message: 'Missing fields'})
    } else {
      res.status(200).json({message: `Thank you for your application, ${submission.name}`})
    }
  });
}