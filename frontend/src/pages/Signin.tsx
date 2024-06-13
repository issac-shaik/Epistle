import Quote from "../components/Quote";
import Auth from "./Auth";

const Signin = () => {
  return (
    <div className="sm:grid grid-cols-2">
      <div>
        <Auth type={"signin"} />
      </div>
      <div className="hidden sm:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
