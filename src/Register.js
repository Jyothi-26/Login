import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateAll = (e) => {
    e.preventDefault();

    if (username === '' || password === '' || confirmPassword === '' || email === '') {
      setErrorMessage('Fill in all the required fields.');
      return;
    }
    if (password.length < 8) {
        setErrorMessage('Password must be at least 8 characters.');
        return;
      }
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords does not match.');
      return;
    }
    setErrorMessage('');
    setSuccessMessage('Register Successful! Redirecting...');
    
    setTimeout(() => {
      window.location.href = 'https://meesho.com';
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Registeration Form</h1>
      <form onSubmit={validateAll}>
        <label >Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label >Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label >Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label >Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br></br><br></br>

        <button type="submit">Submit</button><br></br><br></br>
      </form>

      {successMessage && <div className="message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Register;
