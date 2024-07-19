import HeroBlock from '@/components/Account/Content/HeroBlock'
import PaymentCard from '@/components/Account/PaymentMethodCarts/PaymentCard'
import React from 'react'
import './../../../styles/Account/card.scss'
import './../../../styles/Account/create.scss'

const PaymentMethodCarts = () => {
  return (
    <>
        <HeroBlock />
        <PaymentCard />
    </>
  )
}

export default PaymentMethodCarts