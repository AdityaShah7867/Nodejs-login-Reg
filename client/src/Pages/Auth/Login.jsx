import React, { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

  
    const handleLogin = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch(`http://localhost:4000/api/v1/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password
            }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            const { message, Token } = data;
            alert('Login successful!');
            localStorage.setItem('token', Token);
            window.location.href = '/';
          } else {
            alert('Invalid credentials');
          }
        } catch (error) {
          console.error(error);
          alert('An error occurred');
        }
      };
  
      
    
  
    return (
        <div>
    <h1 style={{marginLeft:'50%', marginTop:"20px"}}>LOGIN</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} onSubmit={handleLogin}>
          <input 
            style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} 
            type='email' 
            placeholder='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} 
            type='password' 
            placeholder='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button 
            style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
      </div>
      
    );
  };
  
  export default Login;