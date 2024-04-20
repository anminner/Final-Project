import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Stay Connected!</p>
      <form>
        <div>
          <label htmlFor="name" className='form-label'>Name:</label>
          <input type="text" className='form-control' id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email" className='form-label'>Email:</label>
          <input type="email" className='form-control' id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="phone" className='form-label'>Phone:</label>
          <input type="tel" className='form-control' id="phone" value={phone} onChange={handlePhoneChange} />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
