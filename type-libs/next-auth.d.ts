import NextAuth from 'next-auth'

declare module 'next-auth' {
    interface User {
        userName:string | undefined
    }
    interface Session {
        user: User & {
            userName: string
        }
        token: {
            userName: string
        }
    }
}