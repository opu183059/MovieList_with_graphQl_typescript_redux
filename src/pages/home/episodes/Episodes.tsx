import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../../graphQl/queries/Query";

const Episodes = () => {
  const { data } = useQuery(GET_CHARACTER);
  console.log(data);
  return <section></section>;
};

export default Episodes;
