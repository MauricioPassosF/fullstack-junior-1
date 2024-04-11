import fs from 'fs';
import path from 'path';
import vm from 'vm';

type Job = {
  id: number,
  job: string,
  level: string,
  status: string
}

const jobsPath = path.resolve(__dirname, '../../../../../jobs.ts');
const jobsCode = fs.readFileSync(jobsPath, 'utf-8');
const script = new vm.Script(`${jobsCode.replace(/const|;/g, '')}`);
const context = vm.createContext();
script.runInContext(context);

const {jobs} = context;

export const getJobs = (): Job[] => {
  return jobs;
}