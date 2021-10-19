import React from "react";
import useAuth from "./../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="my-5 text-center">
      <h1>Profile Page</h1>
      <h2>Your Username: {user?.displayName}</h2>
      <h2>Email Address: {user?.email}</h2>
    </div>
  );
};

export default Profile;
