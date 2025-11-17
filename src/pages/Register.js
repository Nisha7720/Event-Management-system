import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowconfirmPassword(!showconfirmPassword);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!formData.name || !formData.password || !formData.email) {
      toast.error("Please fill all fields");
      return;
    }

    if (!formData.agree) {
      toast.warn("Please accept Terms & Conditions");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.name === formData.name);
    if (exists) {
      toast.error("Username already exists!");
      return;
    }

    //  Save new user to localStorage
    users.push({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });

    localStorage.setItem("users", JSON.stringify(users));

    dispatch(
      register({
        name: formData.name,
        email: formData.email,
        role: formData.role,
      })
    );

    toast.success("Registration successful!");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-200">
      <div className="bg-gray-100 p-6 rounded shadow-md w-80">
        <h2 className="text-3xl font-bold text-center mb-4">Register</h2>

        <input
          type="text"
          placeholder="Username"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border px-3 py-2 mb-3 rounded"
        />

        <input
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border px-3 py-2 mb-3 rounded"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full border px-3 py-2 mb-3 rounded realative"
        />
        <div
          onClick={handleTogglePassword}
          className="flex justify-end mt-10   absolute top-[38%] left-[58%]   cursor-pointer"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>

        <input
          type={showconfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          className="w-full border px-3 py-2 mb-3 rounded"
        />
        <div
          onClick={handleToggleConfirmPassword}
          className="flex justify-end mt-10   absolute top-[46%] left-[58%] mb-3 mr-2 cursor-pointer"
        >
          {showconfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </div>

        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full border px-3 py-2 mb-3 rounded"
        >
          <option value="customer">As a Customer</option>
          <option value="admin">As an Admin</option>
        </select>

        <label className="flex items-center mb-3 text-sm">
          <input
            type="checkbox"
            checked={formData.agree}
            onChange={(e) =>
              setFormData({ ...formData, agree: e.target.checked })
            }
            className="mr-2"
          />
          I agree to the terms & conditions
        </label>

        <button
          onClick={handleRegister}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Register
        </button>

        <p className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 cursor-pointer underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
