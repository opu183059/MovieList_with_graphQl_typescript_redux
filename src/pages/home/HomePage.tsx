import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../graphQl/queries/Query";
import Banner from "./banner/Banner";
const HomePage = () => {
  const { data } = useQuery(GET_CHARACTER);

  console.log(data);
  return (
    <>
      <Banner></Banner>
    </>
  );
};

export default HomePage;
