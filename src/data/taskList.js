import { v4 as uuidv4 } from 'uuid';

const taskList = [
  {
    id: uuidv4(),
    name: 'Task out new US',
    priority: 0,
    created: '"2020-02-24T20:19:09.644Z"',
  },
  {
    id: uuidv4(),
    name: 'Burn down daily task',
    priority: 1,
    created: '"2020-04-30T04:26:17.644Z"',
  },
  {
    id: uuidv4(),
    name: 'Change phone wallpaper',
    priority: 0,
    created: '"2020-06-17T15:38:20.644Z"',
  },
  {
    id: uuidv4(),
    name: 'Prepare for the company trip',
    priority: 2,
    created: '"2020-07-03T21:14:58.644Z"',
  },
  {
    id: uuidv4(),
    name: 'Pay for the internet invoice',
    priority: 1,
    created: '"2020-09-05T07:41:15.644Z"',
  },
  {
    id: uuidv4(),
    name: 'Reply to interview invitation',
    priority: 2,
    created: '"2020-04-10T17:40:09.644Z"',
  },
];

export default taskList;
