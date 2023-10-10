import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";

import WatchListRowCard from "./WatchListRowCard";
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
    <div className="pt-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-2 grid-cols-3 mt-5">
          <div className="">
            <p className="text-center p-2 border-2 border-black rounded">
              Watch List
            </p>
            {wathlistArray.map((item) => (
              <WatchListRowCard key={item.id} item={item}></WatchListRowCard>
            ))}
          </div>
          <div className="">
            <p className="text-center p-2 border-2 border-black rounded">
              Watching
            </p>
            {watchingArray.map((item) => (
              <WatchListRowCard key={item.id} item={item}></WatchListRowCard>
            ))}
          </div>
          <div className="">
            <p className="text-center p-2 border-2 border-black rounded">
              Watched
            </p>
            {watchedArray.map((item) => (
              <WatchListRowCard key={item.id} item={item}></WatchListRowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
