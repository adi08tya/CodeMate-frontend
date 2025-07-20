import axios from "axios";
import Navbar from "./Navbar";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useCallback, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const fetchUser = useCallback(async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if (error.response?.status === 401)
        navigate("/login", { viewTransition: true });
      console.log(error.response || error);
    }
  }, [userData, dispatch, navigate]);

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, [userData, fetchUser]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
