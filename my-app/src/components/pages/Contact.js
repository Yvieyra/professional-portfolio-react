
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();
    alert("submitted");
    // onSubmit();
    emailjs.sendForm("service_o4g8i0s", "template_cdnlige", form.current, 'n4mpMlKU00RpYVtUE');
    let onSubmit = (values) => alert(JSON.stringify(values, null, 2));
  }

  return (
    <div className="container">
      <form className='contact-form' ref={form} onSubmit={handleSubmit(sendEmail)}>
        <label htmlFor='from_name'> Your Full Name:</label>
        <input type='text' placeholder='Full first name here...' {...register('from_name', { required: true })}></input>
        {errors.from_name && <span>*required field*</span>}
        <br></br>
        <label htmlFor='email_from'> Your Email Address:</label>
        <input
          name="email_from"
          type="text"
          placeholder="Email address here..."
          {...register("email_from", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
        />
        {errors.email && <span>*Invalid email*</span>}
        <br></br>

        <label htmlFor='message'>Your Message To Me:</label>
        <textarea name="message" type='text' placeholder='Type your message here...' rows='10' cols='60'></textarea>

        <input type="submit" />
      </form>
    </div>
  );
}