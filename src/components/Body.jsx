import axios from "axios"
import Login from "./Login"
import Navbar from "./Navbar"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Body = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const userData = useSelector((store)=>store.user);
  const fetchUser = async() =>{
    try {
      if(userData) return;
      const res = await axios.get(BASE_URL + "/profile/view" ,{withCredentials:true});
      dispatch(addUser(res.data));
    } catch (error) {
      if(error.status === 401)navigate("/login", {viewTransition:true});
      console.log(error);   
    }
  }

   useEffect(()=>{
     if(!userData){
      fetchUser();
     }
   },[userData]);

  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Body
