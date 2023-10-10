import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Navbar = () => {
  const BookMarkedData = useAppSelector(
    (state) => state.bookMarkSlice.episodes
  );
  return (
    <nav className="w-full shadow-sm py-1 backdrop-blur-md bg-white/40 fixed z-50">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <Link to={"/"} className="flex items-center gap-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4615/4615731.png"
            alt=""
            className="w-8"
          />
          <img src="../../public/RM_logo.png" alt="" className="w-10 mt-1" />
        </Link>
        <div className="uppercase font-semibold">
          <Link to={"/"} className="px-2 mx-1 hover:text-[#472c26]">
            Home
          </Link>
          <Link to={"/about"} className="px-2 mx-1 hover:text-[#472c26]">
            About
          </Link>
          <Link
            to={"/watchlist"}
            className="relative px-2 mx-1 hover:text-[#472c26]"
          >
            Watchlist
            {BookMarkedData && BookMarkedData?.length > 0 && (
              <span className="absolute text-xs bg-red-600 text-white font-thin px-1 rounded-full">
                {BookMarkedData.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
