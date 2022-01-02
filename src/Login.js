import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { googleLogin } from "../config";
const Login = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.shop);

  return (
    <div>
      {state.isAuthenticated ? (
        <img class="profile-pic" src={state.currentUser.profile_pic} />
      ) : (
        <button
          className="btn btn-warning"
          onClick={() => {
            props.googleLogin();
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
const mapDispatchToProp = (dispatch) => ({
  googleLogin: () => dispatch(googleLogin()),
});

export default connect(null, mapDispatchToProp)(Login);
