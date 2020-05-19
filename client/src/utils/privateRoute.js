import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

const mapState = (state) => ({
  loggedIn: state.userData.loggedIn,
});
class PrivateRoute extends Component {
  render() {
    const { component: Component, loggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          !loggedIn ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    );
  }
}

export default compose(connect(mapState, null))(PrivateRoute);
