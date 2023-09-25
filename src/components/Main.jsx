import propTypes from "prop-types";
import UserDetail from "./UserDetail";

const Main = ({ user, error }) => {
  return (
    <main className="flex justify-center items-center h-full my-12">
      {user && <UserDetail user={user} />}

      {error && (
        <div className="bg-red-600 text-white px-4 py-2 rounded">{error}</div>
      )}
    </main>
  );
};

Main.propTypes = {
  user: propTypes.object,
  error: propTypes.string,
};

export default Main;
