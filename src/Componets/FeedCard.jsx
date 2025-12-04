import axios from "axios";
import { BASE_URL } from "../utlis/constant";
import { removeUserFromFeed } from "../utlis/FeedSlice";
import { useDispatch } from "react-redux";

const Feedcard =(props) =>{
    const {firstName, lastName, photoUrl, skills, age, _id} = props.user;
    // const skills = ["React", "Node.js", "Tailwind", "UI/UX", "GraphQL"];
    
    
    const dispatch = useDispatch
    const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };

     return(
          <div className="max-w-sm mx-auto">
            <div className="card bg-gray-800 shadow-xl overflow-hidden h-[500px]"> 
              {/* <-- fixed height for all cards */}
              <figure className="relative h-72 overflow-visible">
                <img
                  src={photoUrl}
                  alt="User photo"
                  className="w-full h-full object-contain object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-100/70 via-base-100/10 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                </div>
              </figure>

              <div className="card-body gap-3 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">
                    {firstName} <span className="font-light">{lastName}</span>
                  </h2>
                  <span className="text-sm text-base-content/60">{age}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`badge ${
                        ["badge-primary", "badge-secondary", "badge-accent", "badge-info"][index % 4]
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="card-actions mt-2 justify-between">
                  <button className="btn btn-outline btn-error w-24"  onClick={() => handleSendRequest("ignored", _id)} >Ignore</button>
                  <button className="btn btn-success w-32"  onClick={() => handleSendRequest("interested", _id)}>Interested</button>
                </div>
              </div>
            </div>
          </div>

    );
};

export default Feedcard;