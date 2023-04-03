import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    const onSubmit = (values) => alert(JSON.stringify(values, null, 2));
  
    return (
        <div className="container">
      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='fname'>Full Name:</label>
        <input type='text' placeholder='Full first name here...'></input>
        <br></br>
        <input
          type="text"
          placeholder="Email address here..."
          {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
        />
         <label htmlFor='message'>Message:</label>
                 <textarea type='text' placeholder='Type your message here...' rows='10' cols='60'></textarea>
        {errors.email && <span>Invalid email</span>}
  
        <input type="submit" />
      </form>
       </div>
    );
  }