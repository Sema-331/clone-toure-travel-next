import { authOptions } from '@/type-libs/lib';
import { getServerSession } from 'next-auth';
import React from 'react'

const ServerComponent = async () => {

    const session = await getServerSession(authOptions);

  return (
    <>{session?.user.userName}</>
  )
}

export default ServerComponent