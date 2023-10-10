import { Link } from "react-router-dom";
import errorImage from "../../../public/errorpageGIF.gif";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-amber-700 text-center font-semibold">
        The page you are looking for <br /> is not available
      </h1>
      <img src={errorImage} alt="" />
      <Link
        to={"/"}
        className="px-2 py-1 text-sm bg-orange-700 text-white rounded-md"
      >
        Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
