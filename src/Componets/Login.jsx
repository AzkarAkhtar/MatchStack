import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../utlis/userSlice.js";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utlis/constant.js";

const LoginPage = ()=> {

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginuser = async ()=> {
    try{
      const loginUserinfo = await axios.post(BASE_URL + "login",
      {
        emailId,
        password
     }, 
    {
      withCredentials: true
    },
    );

    dispatch(setUser(loginUserinfo.data));
    return navigate("/") ;


  }
  
     catch (error){
      console.error("Login failed", error);
    }
    
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <p className="text-sm text-center text-base-content/70 mb-4">
            Sign in to continue
          </p>

          <form className="space-y-4" onSubmit={(event) => { event.preventDefault()}}>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                value ={emailId}
                onChange ={(event)=> setEmailId(event.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                // type="password"
                placeholder="********"
                className="input input-bordered w-full"
                value ={password}
                onChange ={(event)=> setPassword(event.target.value)}
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span>Remember me</span>
              </label>
              <a className="link link-hover text-primary">Forgot password?</a>
            </div>

            <button className="btn btn-primary w-full" onClick={() =>{loginuser()}}>Login</button>
          </form>

          <div className="divider">OR</div>

          <p className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <a className="link link-hover text-primary">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
