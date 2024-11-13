import { HelloModel } from "../models/hello-model";

const database: HelloModel[] = [
    { id: 1, message: "Hello, World!" },
    { id: 2, message: "Happy coding :)" }
] 

export const findAllMessages = async (): Promise<HelloModel[]> => {
    return database;
}

export const findMessageById = async (id: number): Promise<HelloModel | undefined> => {
    return database.find(message => message.id === id);
}