import { FaCode } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout=async()=>{
    try {
      await axios.post(BASE_URL+"/auth/logout",{},{withCredentials:true})
      dispatch(removeUser());
      navigate("/login",{viewTransition:true})
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className="navbar bg-gray-900/90 backdrop-blur-sm border-b border-gray-700/50 shadow-lg">
      <div className="flex-1">
        <p className="text-xl text-gray-100 flex items-center">
          <FaCode className="text-blue-400 mr-2" />
          CodeMate
        </p>
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end mx-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50"
          >
            <div className="w-10 rounded-full">
              {user && (
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-lg z-50 mt-3 w-52 p-2 shadow-xl border border-gray-700/50"
          >
            <li>
              <Link to="/profile" className="text-gray-300 hover:text-white hover:bg-gray-700/50">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-gray-300 hover:text-white hover:bg-gray-700/50">
                Settings
              </Link>
            </li>
            <li>
              <Link onClick={handleLogout} className="text-gray-300 hover:text-white hover:bg-gray-700/50">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
