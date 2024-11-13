import {Request, Response} from "express";
import * as MessageService from "../services/message-service";

export const getMessage = async (req: Request, res: Response) => {
    const httpResponse = await MessageService.getAllMessagesService();
    res.status(httpResponse.status).json(httpResponse.body);
}

export const getMessageById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await MessageService.getMessageByIdService(id);
    res.status(httpResponse.status).json(httpResponse.body);
}

export const createMessage = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await MessageService.createMessageService(bodyValue);
    res.status(httpResponse.status).json(httpResponse.body);
}

export const deleteMessageById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await MessageService.deleteMessageByIdService(id);
    res.status(httpResponse.status).json(httpResponse.body);
}

export const updateMessageById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue = req.body;
    const httpResponse = await MessageService.updateMessageByIdService(id, bodyValue);
    res.status(httpResponse.status).json(httpResponse.body);
}