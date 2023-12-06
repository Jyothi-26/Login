import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const db={"username":"jyothi","password" :"Paapu@00"};
  
  const validateAll = () => {
    if (username === '' || password === '') {
      window.alert('Fill the required fields.');
      return;
    }
    else if ((username == db.username)& (password==db.password)){
      window.alert('Login Successful! Redirecting...');
    }
    else{
      window.alert("Invalid Credentials");
    }
    setTimeout(() => {
      window.location.href = 'https://meesho.com';
    }, 2000);
  };
  
  return (
    <div className="container">
      <h1>Login </h1>
      <form>
        <label >Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>

        <label >Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/><br/>

        <button onClick={()=>validateAll()}>Submit</button><br/><br/>
      </form>
      </div>
  );
};
export default LoginForm;
