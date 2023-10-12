import { FaArrowRight, FaCheck } from "react-icons/fa";
import {
  changeEpisodeStatus,
  removeBookmark,
} from "../../redux/features/slices/ManageWatchSlice";
import { useAppDispatch } from "../../redux/hooks";
import toast from "react-hot-toast";
import { BsFillTrash3Fill } from "react-icons/bs";
import { singleWatchList } from "../../interface/interface";

interface watchListRowCardProps {
  item: singleWatchList;
}

const WatchListRowCard = ({ item }: watchListRowCardProps) => {
  const dispatch = useAppDispatch();

  const handleWatch = (episodeID: number, status: string) => {
    dispatch(
      changeEpisodeStatus({
        id: episodeID,
        status: status,
      })
    );
  };

  const remove = (id: number) => {
    dispatch(removeBookmark(id));
    toast.error("Removed From Watchlist");
  };
  return (
    <div
      className={`${
        item.status == "watchlist"
          ? "bg-purple-100 border-purple-900"
          : item.status == "watching"
          ? "bg-blue-100 border-blue-900"
          : "bg-green-100 border-green-900"
      } my-2 p-4 border-[1px] rounded-md flex items-center justify-between h-24 dark:text-[#351c16]`}
    >
      <div>
        <h1>{item.episode}</h1>
        <p>Name: {item.name}</p>
        <p>Characters: {item.characters.length}</p>
      </div>
      <div className="flex gap-1 flex-col justify-center text-xs ">
        {item.status == "watchlist" ? (
          <button
            className="p-1 border-[1px] border-black rounded flex gap-1 items-center justify-between hover:bg-blue-600 hover:text-white duration-150"
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
            className="p-1 border-[1px] border-black rounded flex gap-1 items-center justify-between hover:bg-green-600 hover:text-white duration-150"
            onClick={() => handleWatch(item.id, "watched")}
          >
            Watched <FaCheck></FaCheck>
          </button>
        )}
        <button
          className="p-1 border-[1px] border-black rounded flex gap-1 items-center justify-between hover:bg-red-600 hover:text-white duration-150"
          onClick={() => remove(item.id)}
        >
          Remove <BsFillTrash3Fill></BsFillTrash3Fill>
        </button>
      </div>
    </div>
  );
};

export default WatchListRowCard;
