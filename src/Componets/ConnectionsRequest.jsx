import { useDispatch, useSelector } from "react-redux";
import { connectUser } from "../utlis/ConnectionSlice";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utlis/constant";
import { removeRequest } from "../utlis/ConnectionSlice";

const ConnectionsRequest = () =>{


    const requests = useSelector((store) => store.connect);
    const dispatch = useDispatch();

    const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {}
  };

    const connection = async () =>{
        const response = await axios.get("http://localhost:3000/user/requests/received/",{withCredentials: true})
        console.log("connetcionresposne", response?.data?.data);
        dispatch(connectUser(response?.data?.data));
    }

    useEffect(()=>{

        connection();

    },[]);

   if (!requests) return;

  if (requests.length === 0)
    return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

  return (
    <div className="max-w-full mx-auto">
  <h1 className="font-bold text-white text-3xl">Connection Requests</h1>

  <div className="mt-4 flex flex-row gap-4 overflow-x-auto py-2">
    {requests.map((request) => {
      const { _id, firstName, lastName, photoUrl, age, skills } = request.fromUserId;
      return (
        <div key={_id} className="min-w-[280px] w-72 shrink-0">
          <div className="card bg-gray-800 shadow-xl overflow-hidden h-[500px] flex flex-col">
            {/* Fixed image area */}
            <figure className="relative h-48 w-full flex-shrink-0 overflow-hidden">
              <img
                src={photoUrl}
                alt="User photo"
                className="w-full h-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </figure>

            {/* Body: fixed layout, scrollable if content overflows */}
            <div className="card-body flex flex-col gap-3 p-4 flex-1 min-h-0 overflow-hidden">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-white text-lg truncate">
                  {firstName} <span className="font-light">{lastName}</span>
                </h2>
                <span className="text-sm text-base-content/60">{age}</span>
              </div>

              {/* Skills: limit height so cards stay same size; allow internal scroll */}
              <div className="flex-0">
                <div className="flex flex-wrap gap-2 max-h-16 overflow-auto">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`badge ${["badge-primary", "badge-secondary", "badge-accent", "badge-info"][index % 4]} text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions anchored to bottom */}
              <div className="card-actions mt-2 flex flex-row gap-3 justify-center items-center flex-shrink-0">
                <button className="btn btn-success w-32" onClick={() => reviewRequest("accepted", _id)}>Accept</button>
                <button className="btn btn-outline w-32" onClick={() => reviewRequest("rejected", _id)}>Reject</button>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

  );


}

export default ConnectionsRequest;