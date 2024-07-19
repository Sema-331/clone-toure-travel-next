import { authOptions } from '@/type-libs/lib';
import { getServerSession } from 'next-auth';
import React from 'react'

const ServerComponentEmail = async () => {

    const session = await getServerSession(authOptions);

  return (
    <>{session?.user.email}</>
  )
}

export default ServerComponentEmail