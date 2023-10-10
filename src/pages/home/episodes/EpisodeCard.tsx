import toast from "react-hot-toast";
import {
  addBookmark,
  removeBookmark,
} from "../../../redux/features/slices/BookMarkSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { useEffect, useState } from "react";

const EpisodeCard = ({ episodeData }) => {
  const dispatch = useAppDispatch();
  const [bookMark, setBookMark] = useState<boolean>(true);
  const { id, name, air_date, episode, characters } = episodeData;
  const image = characters[8]?.image;
  // const image =
  //   characters[Math.round(Math.random() * (characters.length - 1))]?.image;
  const EpisodeInformation = {
    id,
    name,
    air_date,
    episode,
    status: "watchlist",
  };
  let storedWatchlist = {};
  storedWatchlist = JSON.parse(localStorage.getItem("Watchlist"));
  const available = storedWatchlist?.find(
    (episodeData) => episodeData.id == id
  );
  useEffect(() => {
    setBookMark(available ? false : true);
  }, [bookMark]);

  const add = () => {
    if (!available) {
      dispatch(addBookmark(EpisodeInformation));
      toast.success("Added in the Watchlist");
      setBookMark(false);
    } else {
      dispatch(removeBookmark(id));
      toast.error("Removed From Watchlist");
      setBookMark(true);
    }
    setBookMark(!bookMark);
  };
  return (
    <div className="group h-96 [perspective:1000px] hover:-translate-y-2 duration-300">
      <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/20"
            src={image}
            alt={name + "image"}
          />
          <h3 className="absolute bottom-0 rounded-b-xl group-hover:hidden w-full bg-white/80 text-xl font-bold text-center px-10 duration-300">
            {episode}
          </h3>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-xl font-bold opacity-30 mb-1">{episode}</h1>
            <p className="text-2xl mb-4 font-semibold ">{name}</p>
            <p>Released: {air_date}</p>
            <p>Characters: {characters.length}</p>
            <div>
              <button
                onClick={() => {
                  add();
                }}
                className={`p-2 border-[1px] rounded-lg text-sm mt-2 ${
                  bookMark
                    ? "hover:bg-green-800 hover:border-green-800"
                    : "hover:bg-red-800 hover:border-red-800"
                } duration-200`}
              >
                {bookMark ? "Add to Watchlist" : "Remove from list"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;

{
  /* <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"> */
}
