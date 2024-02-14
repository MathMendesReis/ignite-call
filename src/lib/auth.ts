import { env } from "@/util/env";
import GoogleProvider from "next-auth/providers/google";
providers: [
    GoogleProvider({
        clientId: env.GOOGLE_CLIENTE_ID,
        clientSecret: env.GOOGLE_SECRET_KEY,
        authorization: {
            params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code"
            }
        }
    })
]