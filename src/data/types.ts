export interface UserService {
  id: number;
  title: string;
  count: number;
}

export interface Review {
  id: number;
  user: string;
  date: Date;
  text: string;
}
