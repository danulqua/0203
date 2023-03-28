import avatar from '@/assets/img/avatar.jpg';
import type { UserService } from '@/data/types';

export const bio = {
  fullName: 'Eva Jonson',
  position: 'Sales Manager',
  desciription: `I will find the best offers for you.
My services are absolutely free.`,
  avatar
};

export const userServices: UserService[] = [
  {
    id: 1,
    title: 'Manual tour booking',
    count: 11
  },
  {
    id: 2,
    title: 'Package tours',
    count: 3
  },
  {
    id: 3,
    title: 'Hotels',
    count: 1
  }
];
