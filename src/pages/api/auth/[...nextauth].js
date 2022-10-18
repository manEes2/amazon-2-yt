import NextAuth from "next-auth/next";
import Providers from "next-auth/providers"

export default NextAuth({
    //Configure one or mor authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],

    
})