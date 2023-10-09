const EpisodeCard = ({ episodeData }) => {
  const { id, name, air_date, episode, characters } = episodeData;

  return (
    <div className="group h-96 [perspective:1000px] hover:-translate-y-3 duration-300">
      <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/20"
            src={
              characters[Math.round(Math.random() * (characters.length - 1))]
                ?.image
            }
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
