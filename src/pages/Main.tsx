import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Main;
