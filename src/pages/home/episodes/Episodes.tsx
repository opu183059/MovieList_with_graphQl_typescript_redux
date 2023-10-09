import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../../graphQl/queries/Query";
import Loading from "../../../components/Loading";
import EpisodeCard from "./EpisodeCard";

const Episodes = () => {
  const { loading, error, data } = useQuery(GET_CHARACTER);
  if (error) {
    return <h1>Data is not available right now</h1>;
  }
  return (
    <section className="pt-20 min-h-screen max-w-6xl mx-auto">
      <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-4xl text-center">
        All the episodes are here
      </h2>
      {loading && (
        <div className="flex items-center justify-center h-80">
          <Loading></Loading>
        </div>
      )}
      {data?.episodes?.results && (
        <div className="grid gap-7 grid-cols-1 md:grid-cols-3">
          {data?.episodes?.results.map((episodeData) => (
            <EpisodeCard
              key={episodeData?.id}
              episodeData={episodeData}
            ></EpisodeCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Episodes;
