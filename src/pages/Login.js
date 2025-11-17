import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [role, setRole] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!formData.name || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }
    if (!role) {
      toast.warn("Select Admin or Customer");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.name === formData.name &&
        u.password === formData.password &&
        u.role === role
    );

    if (!user) {
      toast.error("Invalid Detailed ");
      return;
    }

    dispatch(login(user));
    toast.success(`Welcome ${user.name}!`);
    navigate(user.role === "admin" ? "/admin" : "/dashboard");
  };

  //used for toggle password show and hide
  const togglePassword = () => {
    setShowpassword(!showpassword);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen   space-y-4 bg-indigo-200">
      <div className="bg-gray-100 p-6 rounded shadow-md w-90 h-100 md:w-80">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border px-3 py-2 mb-3 rounded"
        />
        <input
          type={showpassword ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full border px-3 py-2 mb-3 rounded relative"
        />
        <div
          className="flex justify-end mt-10 mb-3 mr-2 cursor-pointer  absolute top-[40%] left-[58%]"
          onClick={togglePassword}
        >
          {showpassword ? <FaEyeSlash /> : <FaEye />}
        </div>

        <div className="flex justify-between mb-5">
          <button
            onClick={() => setRole("admin")}
            className={`w-[48%] py-2 rounded ${
              role === "admin"
                ? "bg-blue-400 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => setRole("customer")}
            className={`w-[48%] py-2 rounded ${
              role === "customer"
                ? "bg-blue-400 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            Customer
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

/*
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

//first we have access(get) the data in local storage

useEffect(() => {
const savename = localStorage.getItem("name");
if (savename) {
  setFormData((prevData) => ({
    ...prevData,
    username: savename
  }));
}
const savepassword = localStorage.getItem("password");
if (savepassword) {
  setFormData((prevData) => ({
    ...prevData,
    password: savepassword
  }));
}
}, []);

// store (set) data in local storage
useEffect(() => {
    localStorage.setItem("name", formData.username);
    localStorage.setItem("password", formData.password);

}, [formData.username, formData.password]);



/*  const handleSubmit = (e) => {
  e.preventDefault();
  navigate('/dashboard');
  navigate('/admin');
  // handle login logic here
  console.log("Logging in with", formData);
};    */

//const changeHandlerAdmin =() => {
//const {email , password} = formData;

// console.log(email,password);

//console.log(formData);

/* if(formData.email && formData.password ) {
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
}      */

/*return (
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

*/
