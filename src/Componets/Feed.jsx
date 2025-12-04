import axios from "axios";
import { BASE_URL } from "../utlis/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayFeed } from "../utlis/FeedSlice";
import Feedcard from "./FeedCard";

const FeedUI = () =>{
    // const skills = ["React", "Node.js", "Tailwind", "UI/UX", "GraphQL"];

    const feed = useSelector((store) => store.feed)
    console.log("feed",feed)

    const dispatch = useDispatch();
    const userFeed = async () =>{
        const feedinfo = await axios.get(BASE_URL + "/feed", {withCredentials: true})
        console.log("feedinfo:", feedinfo?.data?.data);
        dispatch(displayFeed(feedinfo?.data?.data))
    }

    useEffect(()=>{
        userFeed();
    },[]);

     if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

   return(
    feed&& (<div className="flex flex-wrap justify-start gap-6">
      {
        <Feedcard user={feed[0]} />
      }
    </div>
    )
        
            
    )
}

export default FeedUI;
