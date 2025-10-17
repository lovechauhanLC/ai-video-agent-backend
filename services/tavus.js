import axios from "axios";
import { config } from "../config/env.js";

const BASE_URL = "https://tavusapi.com/v2";

async function createConversation({ personaId, replicaId, name }) {
  const res = await axios.post(
    `${BASE_URL}/conversations`,
    {
      persona_id: personaId,
      replica_id: replicaId,
      conversation_name: name
    },
    {
      headers: {
        "x-api-key": config.tavus.apiKey,
        "Content-Type": "application/json"
      }
    }
  );
  return res.data;
}

async function endConversation(conversationId) {
  const res = await axios.post(
    `${BASE_URL}/conversations/${conversationId}/end`,
    {},
    { headers: { "x-api-key": config.tavus.apiKey } }
  );
  return res.data;
}

export {
  createConversation,
  endConversation
}