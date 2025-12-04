import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utlis/constant";
import { removeUser } from "../utlis/userSlice";

const Navbar =() => {

  const user = useSelector((store) => store.user);
  console.log("User in Navbar:", user);

  const disptach = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {

    await axios.post(BASE_URL +"/logout", {}, {withCredentials: true})
    disptach(removeUser());
    navigate("/login");
  }
  
    return(
    <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to ="/" className="btn btn-ghost text-xl"> MatchStack</Link>
  </div>
  <div className="flex gap-2 items-center">
    {user && (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="flex items-center gap-2">
          <div className="text-lg font-semibold text-primary">Welcome, {user.firstName} </div>
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src={user.photoUrl}
              />
            </div>
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to = "/Profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><Link to="/connectionRequest">ConnectionRequest</Link></li>
          <li><Link to="/Myconnections">MyConnection</Link></li>
          <li><a onClick={() => logout()}>Logout</a></li>
        </ul>
      </div>
    )}
  </div>
</div>
    )
}

export default Navbar;