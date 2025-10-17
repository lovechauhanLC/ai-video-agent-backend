import "dotenv/config";

export const config = {
  port: process.env.PORT || 3000,
  tavus: {
    apiKey: process.env.TAVUS_API_KEY,
    personaId: process.env.TAVUS_PERSONA_ID,
    replicaId: process.env.TAVUS_REPLICA_ID
  }
};