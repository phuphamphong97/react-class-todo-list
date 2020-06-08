import taskPriority from './taskPriority';

const taskData = [
  {
    id: 1,
    name: 'Task out new US',
    priority: taskPriority.low,
  },
  {
    id: 2,
    name: 'Burn down daily task',
    priority: taskPriority.medium,
  },
  {
    id: 3,
    name: 'Change phone wallpaper',
    priority: taskPriority.low,
  },
  {
    id: 4,
    name: 'Prepare for the company trip',
    priority: taskPriority.high,
  },
  {
    id: 5,
    name: 'Pay for the internet invoice',
    priority: taskPriority.high,
  },
];

export default taskData;
