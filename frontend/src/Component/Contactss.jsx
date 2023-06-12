import { useGetContactsQuery,useDelContactMutation} from "../services/contact"
import { useState } from "react";
import { change } from "../services/stateSlice";
import { useDispatch } from "react-redux";
const Contactss = ({token}) => {
  const dispatch=useDispatch();
    const [delContact,res]=useDelContactMutation();
    const {data,isFetching}=useGetContactsQuery(token);
    if(isFetching){
        return <div className="text-center">Loading....</div>
    }
    console.log(data?.data);
  return (
    <div className="grid grid-cols-3 gap-4 m-4">
    {
      data?.data.map((ele,index)=>{
        return <div className="flex flex-col bg-gray-100" key={index}>
        <div className="text-center font-bold">{index+1}</div>
        <div className="flex justify-between shadowp p-10">
            <div> Name: {ele.name}</div>
            <div>Email: {ele.email}</div>
        </div>
        <div className="flex justify-between ml-2 mr-2">
          <button className="rounded p-3 bg-blue-500"
            onClick={(e)=>{
              console.log("click");
              const val={
                id:ele._id,
                name:ele.name,
                email:ele.email,
                phone:ele.phone
              }
              dispatch(change(val));
            }}
          >Update</button>
          <button 
          className="rounded p-3 bg-blue-500"
          onClick={
            ()=>{
            console.log(ele._id,token);
            delContact({id:ele._id,token:token}).unwrap().then((res)=>{
              console.log(res);
              location.reload();
            }).then((err)=>{
              console.log(err);
            });}
          }
          >Delete</button>
        </div>
        </div>
      })
    }
    </div>
  )
}
export default Contactss