import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

  const sendEmail = (e) => {
    e.preventDefault();
    alert("submitted");
    emailjs.sendForm("service_gw56ujl", "template_1atz8br", e.target, 'flKK_27oTKr0cb8jg')
  }

  return (
    <div className="container">
      <form className='contact-form' onSubmit={handleSubmit(onSubmit) && (sendEmail)}>
        <label htmlFor='fname'>Full Name:</label>
        <input type='text' placeholder='Full first name here...' {...register('fname', { required: true, minlength: 2 })}></input>
        {errors.fname && <span>*required field*</span>}
        <br></br>
        <label htmlFor='email'>Email Address:</label>
        <input
          name="email_from"
          type="text"
          placeholder="Email address here..."
          {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
        />
        {errors.email && <span>*Invalid email*</span>}
        <br></br>

        <label htmlFor='message'>Message:</label>
        <textarea name="message" type='text' placeholder='Type your message here...' rows='10' cols='60'></textarea>

        <input type="submit" />
      </form>
    </div>
  );
}