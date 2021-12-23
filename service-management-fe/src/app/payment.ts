import { Aid } from "./aid";

export class Payment {
    paymentId: number;
    amount: number;
    timeStamp: string;
    comment: string;
    aid: Aid;
}