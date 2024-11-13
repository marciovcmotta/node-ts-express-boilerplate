import { MessageModel } from "../models/message-model";
import fs from "fs/promises";

let database: MessageModel[] = [];

export const findAllMessages = async (): Promise<MessageModel[]> => {
    if(database.length === 0){
        const jsonFile = await fs.readFile("./src/data/messages.json", "utf-8");
        database = JSON.parse(jsonFile);
    }
    
    return database;
}

export const findMessageById = async (id: number) => {
    return database.find(message => message.id === id);
}

export const insertMessage = async (message: MessageModel) => {
    database.push(message);
}

export const removeMessageById = async (id: number) => { 
    const index = database.findIndex(message => message.id === id);

    if(index !== -1) {
        database.splice(index, 1);
    }
}

export const modifyMessageById = async (id: number, bodyValue: MessageModel) => { 
    const index = database.findIndex(message => message.id === id);

    if(index !== -1) {
        database[index].message = bodyValue.message;
    }
}