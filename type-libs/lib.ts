import NextAuth, { NextAuthOptions, SessionOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db, prisma } from '@/prismaData/db';
import { compare } from 'bcrypt';

interface CustomSessionOptions extends SessionOptions {
    idleTimeout?: number;
  }

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        idleTimeout: 120,
    },
    pages: {
        signIn: '/Login'
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
          }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "email", type: "text", placeholder: "svelesik@inbox.ru" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if (!credentials?.email || !credentials?.password) {
                return null;
            }

            const existsUser = await db.user.findUnique({
                where: {
                    email: credentials.email
                }
            })
            if (!existsUser) {
                return null
            }

            const passwordMathes = await compare(credentials.password, existsUser.password);

            if (!passwordMathes) {
                return null
            }

            return {
                id: existsUser.id,
                userName: existsUser.userName,
                email: existsUser.email
            }
          }
        })
      ],
      callbacks: {
        async jwt({
            token, user, account, profile
        }) {
            if (user) {
                return {
                    ...token,
                    userName: user.userName
                }
            }
            return token
        },
        async session({
            token, user, session
        }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    userName: token.userName
                }
            }
        }
      }
}


export async function forgotPassword(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  
    if (!user) throw new Error("The User Does Not Exist!");
}