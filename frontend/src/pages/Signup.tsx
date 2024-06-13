import Quote from "../components/Quote";
import Auth from "./Auth";

const Signup = () => {
  return (
    <div className="sm:grid grid-cols-2">
      <div>
        <Auth type={"signup"} />
      </div>

      <div className="hidden sm:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
