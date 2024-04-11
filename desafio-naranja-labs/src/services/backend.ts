import { Job, ResponseData } from '@/types';
import fs from 'fs';
import path from 'path';
import vm from 'vm';

const jobsPath = path.join(process.cwd(), '../jobs.ts');
const jobsCode = fs.readFileSync(jobsPath, 'utf-8');
const script = new vm.Script(`${jobsCode.replace(/const|;/g, '')}`);
const context = vm.createContext();
script.runInContext(context);

const {jobs} = context;

export const getJobs = (): Job[] => {
  return jobs;
}

export const getJobsByLevel = (level: string): Job[] => {
  return jobs.filter((job: Job) => job.level === level)
}

export const getJobById = (id: number): Job | ResponseData  => {  
  const job = jobs.find((job: Job) => job.id === id)
  if (!job) {
    return {message: 'Id not found'}
  }
  return job
}