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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, phone });

    setName('');
    setEmail('');
    setPhone('');
  };

  const containerStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column', 
    textAlign: 'center', 
    padding: '20px', 
  };

  const rowStyle = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginBottom: '10px', 
  };

  const labelStyle = {
    width: '100px', 
    textAlign: 'right', 
    marginRight: '10px', 
  };

  const inputStyle = {
    width: '300px', 
    padding: '10px',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center' }}>Contact Page</h1> 
      <p style={{ textAlign: 'center' }}>Want to stay in the loop? Drop your contact info below!</p> 
      <form onSubmit={handleSubmit}>
        <div style={rowStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
            style={inputStyle}
          />
        </div>
  
        <div style={rowStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={inputStyle}
          />
        </div>
        <div style={rowStyle}>
          <label htmlFor="phone" style={labelStyle}>Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;


