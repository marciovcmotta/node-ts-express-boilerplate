import { findAllMessages } from "../repositories/hello-repository"

export const getHelloService = async () => {
    const data = await findAllMessages();

    return data;
}