import express from "express";
import { startConversationController, endConversationController } from "../controllers/conversation.controller.js";

const router = express.Router();


router.post("/start", startConversationController);
router.post("/end", endConversationController);

export default router;