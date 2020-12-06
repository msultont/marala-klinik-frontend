import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const [cookies] = useCookies();
  return (
    <Route
      {...rest}
      render={props => (
        cookies.MK_accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      )}
    />
  );
};

export default PrivateRouter;

PrivateRouter.defaultProps = {
  location: null
};

PrivateRouter.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};
