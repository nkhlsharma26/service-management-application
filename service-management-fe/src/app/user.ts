import { House } from "./house";

export class User {
      userId: number;
      username: string;
      password: string;
      email: string;
      houses: House[] = [];
}