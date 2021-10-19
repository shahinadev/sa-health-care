import React from "react";
import Banner from "../../Shared/Banner/Banner";
import useAuth from "./../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <Banner></Banner>
      <div className="my-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h1 className="card-title">Your Profile Info.</h1>
                </div>
                {user?.photoURL !== null && (
                  <img
                    src={user?.photoURL}
                    className="img-fluid card-img-top w-25 rounded-circle"
                  />
                )}
                <div className="card-body">
                  <div className="my-3">
                    <h3>Username</h3>
                    <input
                      type="text"
                      className="form-control"
                      disabled
                      value={user?.displayName}
                    />
                  </div>
                  <div className="my-3">
                    <h3>Email</h3>
                    <input
                      type="text"
                      className="form-control"
                      disabled
                      value={user?.email}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
