import React from 'react'
import axiosInstance from '../../axios/axios'

function PayButton() {
    const handleCheckout=()=>{
        axiosInstance.post('/create-checkout-session').then((response)=>{
            if(response.data.url){
                window.location.href=response.data.url
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
          <button
              type="button"
              className='loading-btn form-btn mt-2 font-medium rounded'
              onClick={handleCheckout}
          >
              Pay Securely
          </button>
    </>
  )
}

export default PayButton