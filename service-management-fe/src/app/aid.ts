import { House } from "./house";
import { Payment } from "./payment";

export class Aid {
      aidId: number;
      name: string;
      startDate: string;
      endDate: string;
      costOfService: number;
      remainingAmount: number;
      payments: Payment[] = [];
      complete: boolean;
      house: House;
}