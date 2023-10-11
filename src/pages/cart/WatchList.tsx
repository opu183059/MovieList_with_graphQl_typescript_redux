import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import WatchListRowCard from "./WatchListRowCard";
import { Link } from "react-router-dom";
import { singleWatchList } from "../../interface/interface";

const WatchList = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const BookMarkedData = useAppSelector(
    (state) => state.bookMarkSlice.episodes
  );

  // console.log(BookMarkedData);
  const wathlistArray = [];
  const watchingArray = [];
  const watchedArray = [];

  BookMarkedData.filter((data) => {
    if (data.status == "watchlist") {
      wathlistArray.push(data);
    }
    if (data.status == "watching") {
      watchingArray.push(data);
    }
    if (data.status == "watched") {
      watchedArray.push(data);
    }
  });

  return (
    <div className="pt-10 min-h-screen px-5">
      <div className="max-w-6xl mx-auto">
        {BookMarkedData.length > 0 ? (
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5">
            <div>
              <p className="text-center bg-purple-800 text-white p-2 rounded">
                Watch List ({wathlistArray.length})
              </p>
              {wathlistArray.map((item) => (
                <WatchListRowCard
                  key={item.id}
                  item={item as singleWatchList}
                ></WatchListRowCard>
              ))}
            </div>
            <div>
              <p className="text-center bg-blue-800 text-white p-2 rounded">
                Watching ({watchingArray.length})
              </p>
              {watchingArray.map((item) => (
                <WatchListRowCard
                  key={item.id}
                  item={item as singleWatchList}
                ></WatchListRowCard>
              ))}
            </div>
            <div>
              <p className="text-center bg-green-800 text-white p-2 rounded">
                Watched ({watchedArray.length})
              </p>
              {watchedArray.map((item) => (
                <WatchListRowCard
                  key={item.id}
                  item={item as singleWatchList}
                ></WatchListRowCard>
              ))}
            </div>
          </div>
        ) : (
          <h1 className="text-center text-red-400 font-semibold text-base md:text-xl mt-28">
            Please Add you Watchlist from
            <Link to={"/"} className="text-blue-500 hover:underline mx-1">
              Home Page
            </Link>
            to view them from here
          </h1>
        )}
      </div>
    </div>
  );
};

export default WatchList;
