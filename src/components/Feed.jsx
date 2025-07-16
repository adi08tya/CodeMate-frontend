import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import Usercard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeed = async (page = 1, limit = 30) => {
    if (feed && feed.length > 0) return;
    try {
      const res = await axios.get(
        BASE_URL + "/user/feed",
        {
          params:{limit,page},
          withCredentials: true,
        }
      );
      console.log("Fetched feed data:", res.data);
      dispatch(addFeed(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-10">
      {feed.length !== 0 &&
        feed.map((user) => (
            <Usercard
            key={user._id}
             user={user}
            />
        ))}
    </div>
  );
};

export default Feed;
