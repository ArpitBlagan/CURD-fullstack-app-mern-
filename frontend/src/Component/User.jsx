import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useGetUsersQuery } from "../services/contact";
import Contactss from "./Contactss";
import { Link } from "react-router-dom";
import axios from 'axios';
import AddContact from "./AddContact";
const User = () => {
  const navigate=useNavigate();
  const location=useLocation();
  console.log(location.state.token);
  const {data,isLoading}=useGetUsersQuery(location.state.token);
  if(isLoading){
    return <div className="text-center">Loading...</div>
  }if(data?.message==="TokenExpired"){
    return <div className="flex  flex-col justify-center text-center align-middle h-full shadow p-10">
      <h3>Ooops Login required</h3>
      <Link to="/"><div className="outline font-bold">Login</div></Link>
    </div>
  }
  console.log(data);
  return (
    <div>
      <div className="flex flex-row  justify-between align-text-top text-lg font-medium">
      <div></div>
      <div><h5 className="font-bold">Contacts</h5></div>
        <div className="shadow p-5 mt-4 flex flex-col justify-center">
          Account Information
          <h3>Name: {data?.username}</h3>
          <h4>Email: {data?.email}</h4>
          <button onClick={()=>{navigate("/")}} className=" text-center rounded bg-blue-600 text-lg 
          p-2 font font-semibold">Logout</button>
        </div>
      </div>
      <div className="mb-4">
      <Contactss token={location.state.token}/>
      </div>
      <AddContact token={location.state.token}/>
    </div>
  )
}
export default User