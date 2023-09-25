import { signInWithPopup } from "firebase/auth";
import propTypes from "prop-types";
import { auth, provider } from "../utils/config";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Navbar = ({ user, setUser, setError }) => {
  useEffect(() => {
    const accessToken = Cookies.get("access-token");

    if (accessToken) {
      const user = JSON.parse(Cookies.get("user"));
      setUser(user);
    }
  }, [setUser]);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const { user } = result;
      setUser(user);

      console.log(user);

      Cookies.set(
        "user",
        JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );
      Cookies.set("access-token", user.accessToken);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleLogout = () => {
    Cookies.remove("access-token");
    setUser(null);
  };

  return (
    <nav className="flex justify-between mx-auto w-full shadow-md py-6 md:px-12 px-6">
      <h1 className="text-xl tracking-widest font-semibold">Authless App</h1>

      {user ? (
        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white capitalize"
          onClick={handleLogout}
        >
          logout
        </button>
      ) : (
        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-white capitalize"
          onClick={handleSignIn}
        >
          login
        </button>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  user: propTypes.object.isRequired,
  setUser: propTypes.func.isRequired,
  setError: propTypes.func.isRequired,
};

export default Navbar;
