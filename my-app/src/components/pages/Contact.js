import React from 'react';

export default function Contact() {
    return (
        <div className="contact-container">
            <form className='contact-form'>
                <label htmlFor='fname'>Full Name:</label>
                <input type='text' placeholder='Full first name here'></input>
                <label htmlFor='email'>Email Address:</label>
                <input type='text' placeholder='Email address here'></input>
                <label htmlFor='message'>Message:</label>
                <textarea type='text' placeholder='Type your message here...' rows='10' cols='60'></textarea>
                <input type="submit" value="Submit"></input>
            </form>
        </div>    
    )
}