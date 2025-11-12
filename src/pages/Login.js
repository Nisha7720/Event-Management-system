import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
//import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const ChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

/*  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    navigate('/admin');
    // handle login logic here
    console.log("Logging in with", formData);
  };    */

  const changeHandlerAdmin =() => {
    //const {email , password} = formData;

   // console.log(email,password);

    //console.log(formData);

    if(formData.email && formData.password ) {
      alert("user admin successfully !");
      navigate("/admin");
    }
    else
    {
     alert("You have Login as admin first!");
    }
  }

  const changeHandlerCustomer = () => {
   // const {email, password} = formData;
   // console.log(email,password);
   // console.log(formData);

    if(formData.email && formData.password) {
      alert("customer login successfully !")
      navigate("/dashboard");
    }
    else{
      alert("First You have Login as a customer !");
    }
  }

  return (
  <div className='container  lg:w-[600px] md:w-[300px] md:h-[250px] lg:h-[500px] mx-auto center px-3 mx-3 py-3 my-3 border border-gray-300 rounded-lg text-left bg-gray-100 shadow-lg '>

      <h2 className='text-blue-600 lg:text-3xl md:text-2xl font-bold px-3 text-center'>Login Page</h2>

      <form >
        <div className='my-3 px-3 py-3 text-left'>

          <label className='text-gray-500 font-normal text-sm text-left'>Username:</label>
          <input
            className='shadow-md border-gray-400 rounded-lg px-2 py-1 md:w-[340px] mt-2 ml-3 sm:w-[200px]'
            type="text"
            name="username"
            placeholder="enter username"
            value={formData.username}
            onChange={ChangeHandler}
            autoComplete='off' required
          />
        </div>

        <div className='my-3 px-3 py-3 text-left'>
          <label className='text-gray-500 font-normal text-sm '>Password:</label>
       <input
            className='shadow-md border-gray-400 rounded-lg px-2 py-1 md:w-[340px] mt-2 ml-3 sm:w-[200px]'
            type="text"
            name="password"
            placeholder="enter password"
            value={formData.password}
            onChange={ChangeHandler}
            autoComplete='off' required
          />
          </div>

          <div className='mt-7 flex justify-center space-x-4 items-center'>
          <button onClick={changeHandlerAdmin}
             className='bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600 cursor-pointer font-normal '>
           Login as Admin
          </button>
          <button onClick={changeHandlerCustomer}
            className='bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600 cursor-pointer font-normal  '>
           Login as Customer
          </button>
        </div>

         <p
          className = 'text-center text-gray-500 text-md mt-6'
         onClick={() => navigate("/register")}>Don't have an account ?   <span className='text-blue-500 cursor-pointer'>Register</span></p>

      </form>

    </div>
  );
}

export default Login;
