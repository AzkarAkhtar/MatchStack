import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../utlis/userSlice.js'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../utlis/constant.js'

const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((store) => store.user);

  const fetchUserData = async () => {
    try {
      if(userData) return;

      const response = await axios.get(BASE_URL + "/profile/view", {withCredentials: true});
      dispatch(setUser(response.data));
      }
      catch (error) {
        if(error.status === 401){
          navigate("/login");
        }
        console.error('Error fetching user data:', error);
      }
    }

      useEffect(() => {
        fetchUserData();
      }, []);

    return(
        <div>
      <Navbar />
      <Outlet />
      <Footer />
      </div>
    )
}

export default Body;