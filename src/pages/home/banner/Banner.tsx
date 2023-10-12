const Banner = () => {
  return (
    <section>
      <div className="bg-[url('../../../../public/banner.jpg')] bg-auto md:bg-cover min-h-screen">
        <div className="px-5 min-h-screen mx-auto w-full dark:bg-black/80 backdrop-blur-sm text-center  flex justify-center items-center">
          <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
            <div className="flex flex-col items-center justify-center ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4615/4615731.png"
                alt=""
                className="w-28"
              />
              <p className="mb-1 font-semibold text-[#42221a] dark:text-[#a97c71] uppercase font-kaushan">
                Rick & Morty
              </p>
            </div>
            <div></div>
            <h2 className="max-w-lg mb-6 text-3xl font-semibold font-poppins text-gray-900 dark:text-[#e3d5d0] sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">The</span>
              </span>{" "}
              Rick & Morty Episodes
            </h2>
            <p className="text-base font-poppins text-[#5d2a1d] dark:text-[#a97c71] md:text-lg mb-5">
              All episodes of Rick and Morty animation are listed in this
              website. Add them to your wishlist and never miss any episode.
            </p>
            <a
              href="#episodes"
              className="border-[1px] border-[#5d2a1d] dark:border-[#f3b2a2] dark:text-[#000000] text-[#5d2a1d] hover:bg-[#5d2a1d] dark:hover:bg-transparent dark:bg-[#dc9988] hover:text-[#f5d9d2] dark:hover:text-[#dca092] duration-200 rounded px-3 py-2"
            >
              Explore now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
