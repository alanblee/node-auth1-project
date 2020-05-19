import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/actions/authActions";
import "./userList.scss";

const UserList = ({ getUsers, usersList }) => {
  useEffect(() => {
    getUsers();
  });
  return <div className="list-container"></div>;
};
const mapState = (state) => ({
  usersList: state.userData.userList,
});
const actions = {
  getUsers,
};
export default connect(mapState, actions)(UserList);
