import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../utlis/userSlice";

const Editprofile = (props) =>{

    const user = props.user;
    const dispatch = useDispatch();

    const [firstName, setFirstname] = useState(user.firstName);
    const [lastName, setLastname] = useState(user.lastName);
    const [password, setPassword] = useState(user.password);
    const [age, setAge] = useState(user.age);
    const [skills, setSkills] = useState([]);

    const updateuser = async () => {
         const response = await axios.patch('http://localhost:3000/profile/edit', { test: 123 }, { withCredentials: true });
        dispatch(setUser(response.data));
        console.log("dtatais",response.data);
    }

    return(

        <div className="min-h-screen bg-base-200 flex items-center justify-center">
    <div className="card w-full max-w-md shadow-xl bg-base-100">
    <div className="card-body">
      <h2 className="text-2xl font-bold text-center">Edit Profile</h2>
      <p className="text-sm text-center text-base-content/70 mb-4">
        Update your account information
      </p>

      <form className="space-y-4" onSubmit={(event) => { event.preventDefault() }}>
        <div>
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="John"
            className="input input-bordered w-full"
            value={firstName}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Doe"
            className="input input-bordered w-full"
            value={lastName}
            onChange={(event) => setLastname(event.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="********"
            className="input input-bordered w-full"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="number"
            placeholder="25"
            className="input input-bordered w-full"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Skills</span>
          </label>
          <input
            type="text"
            placeholder="React, Node.js, Design"
            className="input input-bordered w-full"
            value={skills.join(", ")}
            onChange={(event) => setSkills(event.target.value.split(",").map(s => s.trim()))}
          />
        </div>

        <p className="text-red-500"></p>
        <button className="btn btn-primary w-full" onClick={updateuser}>
          Save Changes
        </button>
      </form>

      <div className="divider"></div>

      <p className="text-sm text-center mt-4">
        Want to go back?{' '}
        <a className="link link-hover text-primary">Dashboard</a>
      </p>
    </div>
  </div>
</div>

    );
};

export default Editprofile;