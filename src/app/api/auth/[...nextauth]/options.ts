import { env } from "@/util/env";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOption = NextAuth({
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENTE_ID,
            clientSecret: env.GOOGLE_SECRET_KEY,

        })
    ]

})