import {Request, Response} from "express";
import { StatusCode } from "../utils/status-codes";
import { getHelloService } from "../services/hello-service";

export const helloWorld = async (req: Request, res: Response) => {
    const data = await getHelloService();
    res.status(StatusCode.OK).json(data);
}