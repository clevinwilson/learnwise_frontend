import React from 'react'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import UserFooter from '../../components/UserFooter/UserFooter'
import UserHeader from '../../components/UserHeader/UserHeader'

function OrderSummaryPage() {
  return (
    <React.Fragment>
      <UserHeader />
      <OrderSummary />
      {/* <BottomNavigation/> */}
      <UserFooter/>
    </React.Fragment>
  )
}

export default OrderSummaryPage