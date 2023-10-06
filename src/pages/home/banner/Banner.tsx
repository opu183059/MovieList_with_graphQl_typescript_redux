"../../../../public/banner.jpg";
const Banner = () => {
  return (
    <section className="mb-16">
      <div className="bg-[url('../../../../public/banner.jpg')] bg-auto md:bg-cover">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36 backdrop-blur-sm">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-1 font-semibold tracking-wider text-[#a05f4f] uppercase rounded-full bg-teal-accent-400">
                Rick & Morty
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
            <p className="text-base text-[#5d2a1d] md:text-lg">
              All episodes of Rick and Morty animation are listed in this
              website. Add them to your wishlist and never miss any episode.
            </p>
          </div>
          <div className="flex gap-3 items-center sm:justify-center">
            <a
              href="#"
              className="bg-transparent hover:bg-[#a05f4f] text-[#a05f4f] hover:text-[#f7eeec] shadow hover:shadow-lg border border-[#a05f4f] hover:border-transparent px-3 py-2 rounded-md duration-300"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
