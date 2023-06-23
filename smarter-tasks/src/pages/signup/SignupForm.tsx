import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";



const SignupForm: React.FC = () => {
  const [organisationName, setOrganizationName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
 
  interface Inputs{
    name : string ; 
    user_name : string  ;
    email :string ;  
    password : string;
  }



  const onSubmit = async (data:any) => {

    const {name , user_name,email,password} = data;

    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name , user_name,email,password} ),
      });

      if (!response.ok) {
        throw new Error('Sign-up failed');
      }
      console.log('Sign-up successful');
      
      const data = await response.json();
      console.log(data);
      
      // Dialogue: After successful signin, first we will save the token in localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));
      
      navigate('/account')

    //   localStorage.setItem('authToken', response.data.token);
      
      
      // Dialogue: After successful signup we have to redirect the user to the secured page. We will do that later.
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Organization Name:</label>
        <input 
        type="text" 
        id="organisationName"
        {...register("name",{required:true})}
        className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
        <input type="text"
         id="userName"
         {...register("user_name",{required:true})}
         className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="email" 
        id="userEmail"
        {...register("email",{required:true})}
        className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input 
        type="password"
        id="userPassword" 
        {...register("password",{required:true})}
        className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign up</button>
    </form>
  );
};

export default SignupForm;