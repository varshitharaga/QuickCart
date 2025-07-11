
// app/api/inngest/route.js
import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation,
} from "@/config/inngest";

export const { GET, POST } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserDeletion, syncUserUpdation],
});
