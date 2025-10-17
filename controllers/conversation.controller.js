import { createConversation, endConversation } from "../services/tavus.js";
import { config } from "../config/env.js";

const startConversationController = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await createConversation({
      personaId: config.tavus.personaId,
      replicaId: config.tavus.replicaId,
      name
    });
    res.status(200).json({
      success: true,
      message: "Conversation started",
      data: {
        conversationUrl: data.conversation_url,
        conversationId: data.conversation_id
      }
    });
  } catch (err) {
    next(err);
  }
};

const endConversationController = async (req, res, next) => {
  try {
    const { conversationId } = req.body;
    if (!conversationId)
      return res.status(400).json({ success: false, message: "conversationId required" });

    await endConversation(conversationId);
    res.status(200).json({ success: true, message: "Conversation ended" });
  } catch (err) {
    next(err);
  }
};

export {startConversationController,endConversationController}