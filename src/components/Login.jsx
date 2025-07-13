import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("elon@tesla.com");
  const [password, setPassword] = useState("Elon@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async() =>{
    
     try {
        const res = await axios.post(BASE_URL+"/auth/login", {
          emailId,
          password,
        },
    {
        withCredentials:true,
    });
        dispatch(addUser(res.data));
        console.log(res.data);
        navigate("/");
     } catch (error) {
        console.log(error);
     }
     
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="justify-center flex font-bold">Login</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              value={emailId}
              className="input"
              placeholder="Email"
              onChange={(e) => setEmailId(e.target.value)}
            />
            <label className="label">Password</label>
            <input
              type="password"
              value={password}
              className="input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
