import { MessageModel } from "./message-model";

export interface HttpContentModel {
    status: number;
    body: MessageModel;
}