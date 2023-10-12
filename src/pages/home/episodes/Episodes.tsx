import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../../graphQl/queries/Query";
import Loading from "../../../components/Loading";
import EpisodeCard from "./EpisodeCard";
import {
  Episode,
  GetEpisodesQuery,
} from "../../../graphQl/__generated__/graphql";

const Episodes = () => {
  const { loading, error, data } = useQuery<GetEpisodesQuery>(GET_CHARACTER);
  if (error) {
    return <h1>Data is not available right now</h1>;
  }
  return (
    <section
      id="episodes"
      className="pt-20 min-h-screen max-w-6xl mx-auto px-5"
    >
      <h2 className="mb-8 font-poppins font-semibold text-[#5d2a1d] dark:text-[#a97c71] text-xl md:text-2xl text-center">
        All the episodes are here
      </h2>
      {loading && (
        <div className="flex items-center justify-center h-80">
          <Loading></Loading>
        </div>
      )}
      {data?.episodes?.results && (
        <div className="grid gap-7 grid-cols-1 md:grid-cols-4">
          {data?.episodes?.results.map((episodeData) => (
            <EpisodeCard
              key={episodeData?.id}
              episodeData={episodeData as Episode}
            ></EpisodeCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Episodes;
