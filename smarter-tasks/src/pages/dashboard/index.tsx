import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const userData = localStorage.getItem('userData');
    const parsedUserData = userData ? JSON.parse(userData) : "";

    console.log(parsedUserData.name);
    console.log(parsedUserData.email);
    

    const handleLogout: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        navigate('/signin');
    };

    

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <h3>{parsedUserData.name}</h3>
      <h3>{parsedUserData.email}</h3>
      <br />
        <button id='logout-link' onClick={handleLogout}>Log out</button>
    </div>
    
  );
}

export default Dashboard;