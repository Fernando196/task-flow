import { Priority } from '../modules/task-flow/interfaces/ITask.interface';

export const mockPriorities: Priority[] = [
  {
    id: 1,
    name: 'Low',
    color: 'bg-green-300',
    textColor: 'text-green-700',
  },
  {
    id: 2,
    name: 'Medium',
    color: 'bg-yellow-300',
    textColor: 'text-yellow-700',
  },
  {
    id: 3,
    name: 'High',
    color: 'bg-red-300',
    textColor: 'text-red-700',
  },
];
