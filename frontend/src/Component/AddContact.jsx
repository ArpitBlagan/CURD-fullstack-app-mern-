import { useEffect, useState } from "react";
import { useAddContactMutation,useUpdateContactMutation } from "../services/contact";
import { useSelector,useDispatch } from "react-redux";
const AddContact = ({token}) => {
    const dispatch=useDispatch();
    const data=useSelector(state=>{
        return state.state;
    });console.log("Data",data);
    const [name,setN]=useState('');
    const [email,setE]=useState('');
    const [phone,setP]=useState('');
    useEffect(()=>{
        setN(data.name);setE(data.email);setP(data.phone);
    },[data])
    console.log(name,email,phone);
    const [addContact,res]=useAddContactMutation();
    const [updateContact,resp]=useUpdateContactMutation();
  return (<section id='update'>
    <div className="flex justify-center align-middle bg-gray-600 mt-3">
        <div>
            <div className="text-center m-2 font-bold text-lg">
            Add contact
            </div>
            <div className="bg-gray-400 p-6 m-2">
                <form >
                    <div className="m-4">
                        <lable>Name:</lable>
                        <input className='pl-8 text-grey-dark h-10  w-full text-sm font-medium tracking-wide bg-gray-200' 
                            placeholder="Enter Name"
                            onChange={(e)=>{
                                setN(e.target.value)
                            }}
                            value={name}
                        />
                    </div>
                    <div className="m-4">
                    <lable>Email:</lable>
                        <input className='pl-8 text-grey-dark h-10  w-full text-sm font-medium tracking-wide bg-gray-200'
                            placeholder="Enter Email"
                            onChange={(e)=>{
                                setE(e.target.value);
                            }}
                            value={email}
                        />
                    </div>
                    <div className="m-4">
                        <lable>Phone:</lable>
                        <input className='pl-8 text-grey-dark h-10  w-full text-sm font-medium tracking-wide bg-gray-200'
                            placeholder="Enter phone  number"
                            onChange={(e)=>{
                                setP(e.target.value);
                            }}
                            value={phone}
                        />  
                    </div>
                    <div className="m-4 text-center">
                    <button className="rounded bg-blue-500 text-black p-3" 
                        onClick={(e)=>{
                            e.preventDefault();
                            if(!name||!email||!phone){
                                alert("all fields required")
                            }else{
                                console.log('click',data.id);
                        if(data.id){
                            const val={
                                id:data.id,
                        body:{
                            name,
                            email,
                            phone
                        },token:token
                    };
                        updateContact(val).unwrap().then((res)=>{console.log(res)}).then((err)=>{
                            console.log(err);
                        });
                        location.reload();
                        }else{
                            const val={
                        body:{
                            name,
                            email,
                            phone
                        },token:token};
                        addContact(val).unwrap().then((res)=>{
                            console.log(res);
                            setN("");setP("");setE("");
                            location.reload();
                            }).
                        then((err)=>{console.log(err)});
                        }
                        }
                        }}
                     >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div></section>
  )
}

export default AddContact