import React from 'react'
import OrderSuccess from '../../components/OrderSuccess/OrderSuccess'
import UserFooter from '../../components/UserFooter/UserFooter'
import UserHeader from '../../components/UserHeader/UserHeader'

function OrderSuccessPage() {
  return (
    <React.Fragment>
        <OrderSuccess/>
        <UserFooter/>
    </React.Fragment>
  )
}

export default OrderSuccessPage