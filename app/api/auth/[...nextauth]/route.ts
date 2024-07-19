import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from '@/prismaData/db';
import { compare } from 'bcrypt';
import { authOptions } from '@/type-libs/lib';

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}