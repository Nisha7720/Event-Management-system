import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role : "user",
    terms: false
  });

  const navigate = useNavigate();


  const ChangeHandler = (e) => {
    const {name, value, type, checked} = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,

    });

  };

 /* const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    console.log("Logging in with", formData);

    navigate('/login');
  };  */

  const changeHandlerRegister = () => {
    const {name , email, password, confirmpassword} = formData;

    try {
      if (name && email && password && confirmpassword) {
        toast.success("successfully register !");
        navigate("/");
      }
    } catch (error) {
      toast.error("first  you have to register !");
    }

  }

  return (
  <div className="w-full h-full lg:flex lg:justify-around lg:items-center ">
    {/* this div for form  */}
   <div className="lg:w-[600px] md:w-[300px] md:h-[250px] lg:h-[600px] mx-auto center px-3 mx-3 py-3 my-3 border border-gray-300 rounded-lg text-left bg-gray-100 shadow-lg mt-3 text-center mx-auto">

      <h2 className="text-3xl font-bold text-gray-800 mt-3 mb-3"> Registration Page</h2>

      <form >
        <input
        className=" border-gray-400 rounded-lg px-2 py-1 w-[340px] mt-2  shadow-md "
          type="text"
          name="name"
          placeholder="enter name"
          value={formData.name}
          onChange={ChangeHandler}
          autoComplete="off" required
        />
        <br />
        <br />

        <input
        className="shadow-md border-gray-400 rounded-lg px-2 py-1 w-[340px] mt-2"
          type="text"
          name="email"
          placeholder="enter your email"
          value={formData.email}
          onChange={ChangeHandler}
          autoComplete="off" required
        />
        <br />
        <br />

        <input
          className="shadow-md border-gray-400 rounded-lg px-2 py-1 w-[340px] mt-2"
          type='text'
          name='password'
          placeholder='enter your password'
          value={formData.password}
          onChange={ChangeHandler}
          autoComplete="off"  required
        />
        <br />
        <br />

        <input
          className="shadow-md border-gray-400 rounded-lg px-2 py-1 w-[340px] mt-2"
          type='text'
          name='confirmpassword'
          placeholder='confirm password'
          value={formData.confirmpassword}
          onChange={ChangeHandler}
          autoComplete="off"  required
        />
        <br />
        <br />

        <input
          className="space-x-2 mr-3 text-left"
          type='checkbox'
          name='terms'
          id='terms'
          checked={formData.terms}
          onChange={ChangeHandler}
        />
        <label htmlFor='terms'
           className="text-gray-500 font-normal text-md">I agree to the terms and conditions</label>

        <br />
        <br />

             <select
             className="shadow-md border-gray-400 rounded-lg px-2 py-1 w-[340px] mt-2"
             name="role"
             value={formData.role}
             onChange={ChangeHandler}>
             <option value= "admin">As a Admin</option>
              <option value="customer">As a customer</option>
            </select>
        <br />
        <br />

        <button
          className="bg-blue-500 text-white px-3 py-2 rounded-md mt-3   hover:bg-blue-600 cursor-pointer font-normal w-[350px]"
          onClick= {changeHandlerRegister}>Register as User</button>
        <br />
        <br />

        <p
         className="text-center text-gray-500 text-md mt-6"
          onClick={() => navigate("/")}>Don't have an account?
         <span className='text-blue-500 cursor-pointer'>Login Now</span></p>
      </form>
   </div>

{/* this div for image  */}
     <div className="lg:w-[600px] md:w-[300px] lg:h-[500px] lg:block md:hidden sm:hidden mx-auto center px-3 mx-3 py-3 my-3  rounded-lg text-left bg-gray-100 shadow-lg mt-3 text-center mx-auto flex justify-center items-center ">
       <h1 className="text-3xl font-bold text-black">Beautiful Registration page </h1>
</div>


</div>
  )
}

export default Register;
