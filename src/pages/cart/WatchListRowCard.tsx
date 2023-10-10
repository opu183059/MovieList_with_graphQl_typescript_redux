import { FaArrowRight, FaCheck } from "react-icons/fa";
import { changeEpisodeStatus } from "../../redux/features/slices/BookMarkSlice";
import { useAppDispatch } from "../../redux/hooks";

const WatchListRowCard = ({ item }) => {
  const dispatch = useAppDispatch();
  console.log(item.status);
  const handleWatch = (episodeID, status) => {
    dispatch(
      changeEpisodeStatus({
        id: episodeID,
        status: status,
      })
    );
  };

  let makeStatus;
  if (item.status == "watchlist") {
    makeStatus = "watching";
  }

  return (
    <div
      className={`${
        item.status == "watchlist"
          ? "bg-purple-100"
          : item.status == "watching"
          ? "bg-yellow-100"
          : "bg-green-100"
      } my-2 p-2 rounded-md flex items-center justify-between h-20`}
    >
      <div>
        <h1>{item.episode}</h1>
        <p>Name: {item.name}</p>
      </div>
      <div className="flex gap-1 flex-col justify-center text-xs ">
        {item.status == "watchlist" ? (
          <button
            className="p-1 border-[1px] border-black rounded flex gap-1 items-center justify-between hover:bg-yellow-100"
            onClick={() => handleWatch(item.id, "watching")}
          >
            Watching <FaArrowRight></FaArrowRight>
          </button>
        ) : (
          ""
        )}
        {item.status == "watched" ? (
          ""
        ) : (
          <button
            className="p-1 border-[1px] border-black rounded flex gap-1 items-center justify-between hover:bg-green-200"
            onClick={() => handleWatch(item.id, "watched")}
          >
            Watched <FaCheck></FaCheck>
          </button>
        )}
      </div>
    </div>
  );
};

export default WatchListRowCard;
