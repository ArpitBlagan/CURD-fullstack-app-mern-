import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import { useUserRegisterMutation } from "../services/login";
const Register = () => {
  const navigate=useNavigate();
  const [name,setN]=useState("");
  const [email,setE]=useState("");
  const [password,setP]=useState("");
  const [userRegister,response]=useUserRegisterMutation();
  return (
    <div className='flex flex-col justify-center  align-middle 
     text-lg bg-gray-200 shadow-md rounded h-screen'>
      <div className='bg-white flex flex-col justify-center'>
       <div className='text-center mb-7 text-xl '><h4>Register</h4></div>
       <div className='flex flex-col justify-center align-middle font-thin'>
       <div>
          <h6>Name</h6>
          <input className='pl-8 text-grey-dark h-10 border-slate-400  w-full text-sm font-medium tracking-wide' 
          onChange={(e)=>{setN(e.target.value);}}
          value={name}
          type="text" placeholder='Enter you name'/>
        </div>
        <div>
          <h6>Email</h6>
          <input className='pl-8 text-grey-dark h-10 border-slate-400  w-full text-sm font-medium tracking-wide' 
          onChange={(e)=>{setE(e.target.value);}}
          value={email}
          type="text" placeholder='Enter you Email'/>
        </div>
        <div className='mb-7 mt-4'>
          <h6>Password</h6>
          <input className='pl-8 text-grey-dark h-10  w-full text-sm font-medium tracking-wide'
          onChange={(e)=>{setP(e.target.value);}}
          value={password}
           type="text" placeholder='Enter you Password'/>
        </div>
       </div>
       <div className='flex justify-center'>
       <button 
       onClick={(e)=>{
        e.preventDefault();
        if(!name||!email||!password){
          alert("all field require");
        }else{
          const val={
            username:name,
            email:email,
            password:password
          };
          userRegister(val).unwrap().then((res)=>{console.log(res)}); 
          navigate("/");
        }
        }}
       className='bg-blue-400 rounded pt-3 pb-3 w-60 font-bold'>Register</button>
       <div></div>
       </div>
       <div className='flex justify-center'>
        <Link to="/">SingIn</Link>
       </div>
       </div>
    </div>
  )
}

export default Register