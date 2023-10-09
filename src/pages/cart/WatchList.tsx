import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { changeEpisodeStatus } from "../../redux/features/slices/BookMarkSlice";
const WatchList = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const BookMarkedData = useAppSelector(
    (state) => state.bookMarkSlice.episodes
  );
  const dispatch = useAppDispatch();
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
              <div
                key={item.id}
                className="bg-purple-100 my-2 p-2 rounded-md flex justify-between"
              >
                <div>
                  <h1>{item.episode}</h1>
                  <p>Name: {item.name}</p>
                </div>
                <div className="flex gap-1 flex-col justify-center text-xs ">
                  <button className="p-1 border-[1px] border-black rounded flex gap-1 items-center justify-between">
                    Watching <FaArrowRight></FaArrowRight>
                  </button>
                  <button
                    className="p-1 border-[1px] border-black rounded flex gap-1 items-center justify-between hover:bg-green-200"
                    onClick={() =>
                      dispatch(
                        changeEpisodeStatus({
                          id: item.id,
                          status: "watched",
                        })
                      )
                    }
                  >
                    Watched <FaCheck></FaCheck>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <p className="text-center p-2 border-2 border-black rounded">
              Watching
            </p>
            {wathlistArray.map((item) => (
              <div
                key={item.id}
                className="bg-purple-100 my-2 p-2 rounded-md flex justify-between"
              >
                <div>
                  <h1>{item.episode}</h1>
                  <p>Name: {item.name}</p>
                </div>
                <div className="flex gap-1 flex-col justify-center text-xs ">
                  <button className="p-1 border-[1px] border-black rounded flex gap-1 items-center justify-between">
                    Watching <FaArrowRight></FaArrowRight>
                  </button>
                  <button
                    className="p-1 border-[1px] border-black rounded flex gap-1 items-center justify-between hover:bg-green-200"
                    onClick={() =>
                      dispatch(
                        changeEpisodeStatus({
                          id: item.id,
                          status: "watched",
                        })
                      )
                    }
                  >
                    Watched <FaCheck></FaCheck>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <p className="text-center p-2 border-2 border-black rounded">
              Watched
            </p>
            {watchedArray.map((item) => (
              <div
                key={item.id}
                className="bg-purple-100 my-2 p-2 rounded-md flex justify-between"
              >
                <div>
                  <h1>{item.episode}</h1>
                  <p>Name: {item.name}</p>
                </div>
                <div className="flex gap-1 flex-col justify-center text-xs "></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
