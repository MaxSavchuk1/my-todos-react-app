import * as yup from 'yup';

export const TASK_SCHEMA = yup.object({
  task: yup
    .string()
    .max(100, 'Too big task :)')
    .matches(/^\S+.*/, 'No spaces in start')
    .required('Enter task'),
});
