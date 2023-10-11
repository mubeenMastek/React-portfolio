import { useState } from 'react';
import './contact.scss';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src='assets/contact.jpg' />
      </div>
      <div className="right">        
        <form onSubmit={formSubmit}>
          <h1>Contact</h1>
          <input className='form-control' type='text' />
          <textarea className='form-control' />
          <button className='button'>Submit</button>
          {message && <p className='message'>Thanks will get back to you ASAP.</p>}
        </form>
      </div>
    </div>
  )
}
