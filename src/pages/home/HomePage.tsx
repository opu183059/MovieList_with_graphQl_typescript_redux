import { useEffect } from "react";
import Banner from "./banner/Banner";
import Episodes from "./episodes/Episodes";
const HomePage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner></Banner>
      <Episodes></Episodes>
    </>
  );
};

export default HomePage;
