import React from 'react';
import { useField ,ErrorMessage } from 'formik';

function TextField({label,...props}) {
    const[field,meta]=useField(props);
  return (
      <div className="relative mb-6" data-te-input-wrapper-init>
          <input
              type="text"
              className="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-box-border"
              id="exampleFormControlInput2"
              {...field} {...props}
              placeholder="First Name" />
          <label
              for="exampleFormControlInput2"
              htmlFor={field.name}
              className="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
          >{label}
          </label>
          <ErrorMessage name={field.name}/> 
      </div>
  )
}

export default TextField