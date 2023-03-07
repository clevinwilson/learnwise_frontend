import React, { useEffect, useRef, useState } from 'react'

function Otp() {

    const inputRef = useRef({});

    const [otp, setOtp] = useState({
        digitOne: "",
        digitTwo: "",
        digitThree: "",
        digitFour: ""
    })

    useEffect(()=>{
        inputRef.current[0].focus();
    },[])

    function handleChange(event, index) {
        const { name, value } = event.target;

        if(/[a-z]/gi.test(value)) return
        

        setOtp((prev) => ({
            ...prev,
            [name]: value
        }))

        if(value && index <3){
            inputRef.current[index + 1].focus()
        }
    }

    function handleBack(event,index){
        if(event.key==="Backspace"){
            if (index > 0) {
                inputRef.current[index - 1].focus();
            }
        }
    }

    function renderInput(keys) {
        return Object.keys(otp).map((keys, index) => (
            <input
               key={index}
                type="text"
                maxLength={1}
                ref={(element) => (inputRef.current[index] = element)}
                name={keys}
                value={otp[keys]}
                className='w-16 h-12 rounded text-center text-xl input-box-border otp-input-box mr-3'
                onChange={(event) => { handleChange(event, index) }} 
                onKeyUp={(event)=>{handleBack(event,index)}}
                />

        ))
    }

    return (
        <section className='section-box'>
            <form action="">
                <div className='grid-cols-1  form-box p-7'>
                    <h2 className='text-center text-2xl font-medium pb-8'>OTP</h2>

                    <div className='text-center flext justify-center'>
                        {renderInput()}
                    </div>

                </div>
            </form>
        </section >
    )
}

export default Otp