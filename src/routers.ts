import { Router } from "express";
import * as MessageController from "./controllers/message-controller";

const router = Router();

router.get("/messages", MessageController.getMessage);
router.get("/messages/:id", MessageController.getMessageById);

router.post("/messages", MessageController.createMessage);

router.delete("/messages/:id", MessageController.deleteMessageById);

router.patch("/messages/:id", MessageController.updateMessageById);

export default router;