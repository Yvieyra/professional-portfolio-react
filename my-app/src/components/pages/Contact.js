import React from 'react';

export default function Contact() {
    return (
        <form>
            <div className='contact-form'>
                <label for='fname'>Full Name:</label>
                <input type='text' placeholder='Full first name here'></input>
                <label for='email'>Email Address:</label>
                <input type='text' placeholder='Email address here'></input>
                <label for='message'>Message:</label>
                <textarea type='text' placeholder='Type your message here...' rows='10' cols='60'></textarea>
                <input type="submit" value="Submit"></input>
            </div>
        </form>
    )
}