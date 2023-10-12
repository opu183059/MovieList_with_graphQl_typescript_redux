import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const BookMarkedData = useAppSelector(
    (state) => state.bookMarkSlice.episodes
  );

  const [darkMood, setDarkMood] = useState(false);

  if (darkMood) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <nav className="w-full shadow-sm py-1 backdrop-blur-md bg-white/40 dark:bg-black/20 fixed z-50">
      <div className="max-w-6xl mx-auto px-5 py-1 flex justify-between items-center">
        <Link to={"/"} className="flex items-center gap-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4615/4615731.png"
            alt=""
            className="w-8"
          />
          <h1 className="font-kaushan font-extrabold text-2xl text-[#773e30] dark:text-[#d9a79a]">
            RM
          </h1>
          {/* <img src="../../public/RM_logo.png" alt="" className="w-10 mt-1" /> */}
        </Link>
        <div className="uppercase font-semibold hidden sm:block md:flex items-center gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "py-1 rounded text-[#6b3121] dark:text-[#b57e6f] underline"
                : "py-1 rounded hover:text-[#6b3121] dark:hover:text-[#b57e6f]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "py-1 rounded text-[#6b3121] dark:text-[#b57e6f] underline"
                : "py-1 rounded hover:text-[#6b3121] dark:hover:text-[#b57e6f]"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/watchlist"}
            className={({ isActive }) =>
              isActive
                ? "py-1 rounded text-[#6b3121] dark:text-[#b57e6f] underline"
                : "py-1 rounded hover:text-[#6b3121] dark:hover:text-[#b57e6f]"
            }
          >
            Watchlist
            {BookMarkedData && BookMarkedData?.length > 0 && (
              <span className="absolute text-xs bg-red-600 text-white font-thin px-1 rounded-full">
                {BookMarkedData.length}
              </span>
            )}
          </NavLink>
          <label className="inline-flex ms-1 items-center cursor-pointer text-gray-900 dark:text-white">
            <span className="relative rounded-md p-1">
              <input
                onClick={() => {
                  setDarkMood(!darkMood);
                }}
                id="Toggle1"
                type="checkbox"
                className="hidden"
              />
              {!darkMood ? (
                <BsFillMoonFill size={20}></BsFillMoonFill>
              ) : (
                <BsFillSunFill size={20}></BsFillSunFill>
              )}
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
