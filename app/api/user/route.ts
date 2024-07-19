import { useAppSelector } from "@/helperRedux/helperRedux";
import { db } from "@/prismaData/db";
import { sendVerificationEmail } from "@/type-libs/mail";
import { generateVerificationToken } from "@/type-libs/verificationToket";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, userName, password, lastName, phoneNumber, adress, date } = body

        const userEmail = await db.user.findUnique({
            where: {email: email}
        })
        if (userEmail) {
            return NextResponse.json({user: null, message: 'User with this email already exists'}, {status: 409})
        }


        const existsUserName = await db.user.findUnique({
            where: {userName: userName}
        })
        if (existsUserName) {
            return NextResponse.json({user: null, message: 'User with this username already exists'}, {status: 410})
        }

        const hasPassword = await hash(password, 10)
        const newUser = await db.user.create({
            data: {
                userName,
                lastName,
                phoneNumber,
                email,
                password: hasPassword,
            }
        })

        const verificationToken = await generateVerificationToken(email);
        await sendVerificationEmail(
          verificationToken.email,
          verificationToken.token,
        );
      
        // return { success: "Confirmation email sent!" };
        console.log({success: "Confirmation email sent!"})
        
        const { password: newUserPassword, ...rest} = newUser
        return NextResponse.json({user: rest, message:'User created'}, {status: 201})

    } catch (error) {
        return NextResponse.json({message: 'Something'}, {status: 500})
    }
}
/**
 * import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from '@/prismaData/db';
import { compare } from 'bcrypt';


const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/Login'
    },
    providers: [
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
      ]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}
 */