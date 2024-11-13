import { MessageModel } from "../models/message-model";

const database: MessageModel[] = [
    { id: 1, message: "Hello, World!" },
    { id: 2, message: "Happy coding :)" }
];

export const findAllMessages = async (): Promise<MessageModel[]> => {
    return database;
}

export const findMessageById = async (id: number): Promise<MessageModel | undefined> => {
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