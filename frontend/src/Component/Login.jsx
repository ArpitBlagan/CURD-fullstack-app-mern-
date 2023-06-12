import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../services/login";
const Login = () => {
  const [userLogin,response]=useUserLoginMutation();
  const navigate=useNavigate();
  const [email,setE]=useState("");
  const [password,setP]=useState("");
  return (
    <div className='flex flex-col justify-center  align-middle 
     text-lg bg-gray-200 shadow-md rounded h-screen'>
      <div className='bg-white flex flex-col justify-center'>
       <div className='text-center mb-7 text-xl '><h4>Sign In</h4></div>
       <div className='flex flex-col justify-center align-middle font-thin'>
        <div>
          <h6>Email</h6>
          <input 
          className='pl-8 text-grey-dark h-10 border-slate-400  w-full text-sm font-medium tracking-wide' 
          onChange={(e)=>{setE(e.target.value)}}
          value={email}
          type="text" placeholder='Enter you Email'/>
        </div>
        <div className='mb-7 mt-4'>
          <h6>Password</h6>
          <input className='pl-8 text-grey-dark h-10  w-full text-sm font-medium tracking-wide' 
          onChange={(e)=>{setP(e.target.value)}}
          value={password}
          type="text" placeholder='Enter you Password'/>
        </div>
       </div>
       <div className='flex justify-center'>
       <button 
       onClick={(e)=>{
        e.preventDefault();
        if(!email||!password){
          alert("all fields are required");
        }else{
        const val={email,password}
        const ff=userLogin(val).unwrap().then((res)=>{
          console.log(res);
          navigate("/app",{state:{token:res.accessToken,id:res.id}});
          });
        }
       }}
       className='bg-blue-400 rounded pt-3 pb-3 w-60 font-bold'>SignIn</button>
       <div></div>
       </div>
       <div className='flex justify-center'>
        <Link to="/register">Register</Link>
       </div>
       </div>
    </div>
  )
}

export default Login