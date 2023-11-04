import React, { useState } from 'react';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import AddCourses from './Pages/AddCourses';


const App = () => {
  const [route, setRoute] = useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(path);
  };

  window.onpopstate = () => {
    setRoute(window.location.pathname);
  };

  return (
    <div>
      <nav>
        <button style={{marginLeft:"25px"}} onClick={() => navigate('/')}>Home</button>
        <button style={{marginLeft:"25px"}} onClick={() => navigate('/login')}>Login</button>
        <button style={{marginLeft:"25px"}} onClick={() => navigate('/register')}>Register</button>
        <button style={{marginLeft:"25px"}} onClick={() => navigate('/addcourses')}>Add Courses</button>
        
      </nav>
      
      {route === '/' && <Home />}
      {route === '/login' && <Login />}
      {route === '/register' && <Register />}
      {route === '/addcourses' && <AddCourses />}
    </div>
  );
};

export default App;
