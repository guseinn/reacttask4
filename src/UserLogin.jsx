import React, { useState } from 'react';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (!value.endsWith('.ru')) {
      setEmailError('Yalnız .ru domenlərinə icazə verilir.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError('Ən azı 8 simvol olmalıdır.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      window.location.reload();
    } else {
      console.log('Login failed. Please fix the errors.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p>{passwordError}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
