import { FaCode } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

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
              <a className="text-gray-300 hover:text-white hover:bg-gray-700/50">
                Profile
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white hover:bg-gray-700/50">
                Settings
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white hover:bg-gray-700/50">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
