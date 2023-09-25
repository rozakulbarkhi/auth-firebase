import propTypes from "prop-types";

const User = ({ user }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="border flex flex-col justify-center items-center p-8 rounded-md shadow-md space-y-2">
        <img
          src={user.photoURL}
          alt="profile user"
          className="h-32 rounded-full object-cover"
        />
        <h3>
          Welcome, <span className="italic">{user.displayName}</span>
        </h3>
      </div>
    </div>
  );
};

User.propTypes = {
  user: propTypes.object.isRequired,
};

export default User;
