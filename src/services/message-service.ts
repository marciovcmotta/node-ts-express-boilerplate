import { MessageModel } from "../models/message-model";
import * as MessageRepository from "../repositories/message-respository"
import { StatusCode } from "../utils/status-codes";

export const getAllMessagesService = async () => {
    const data = await MessageRepository.findAllMessages();
    let response: any = [];
    
    if(data){
        response.status = StatusCode.OK;
    }else{
        response.status = StatusCode.NoContent;
    }

    response.body = data;

    return response;
}

export const getMessageByIdService = async (id: number) => {
    const data = await MessageRepository.findMessageById(id);
    let response: any = [];

    if(data){
        response.status = StatusCode.OK;
    }else{
        response.status = StatusCode.NoContent;
    }

    response.body = data;

    return response;
}

export const createMessageService = async (message: MessageModel) => {
    let response: any = [];

    if(Object.keys(message).length !== 0) {
        await MessageRepository.insertMessage(message);
        response.status = StatusCode.Created;
        response.body = { message: "inserted"};
    }else{
        response.status = StatusCode.BadRequest;
        response.body = { message: "bad request"};
    }

    return response;
}

export const deleteMessageByIdService = async (id: number) => {
    const data = await MessageRepository.findMessageById(id);
    let response: any = [];

    if(data){
        await MessageRepository.removeMessageById(id);
        response.status = StatusCode.OK;
        response.body = { message: "removed"};
    }else{
        response.status = StatusCode.NotFound;
        response.body = { message: "not found"};
    }    

    return response;
}

export const updateMessageByIdService = async (id: number, message: MessageModel) => {
    const data = await MessageRepository.findMessageById(id);
    let response: any = [];

    if(data){
        await MessageRepository.modifyMessageById(id, message);
        response.status = StatusCode.OK;
        response.body = { message: "updated"};
    }else{
        response.status = StatusCode.NotFound;
        response.body = { message: "not found"};
    }    

    return response;
}