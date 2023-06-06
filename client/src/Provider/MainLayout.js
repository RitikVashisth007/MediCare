import React, { Children } from "react";
import { withRouter } from "react-router";
import { instanceOf } from "prop-types";
import Navbar from "../components/Navbar";

const MainLayout = ({ children, user }) => {
  return (
    <div>
      <Navbar user={user} />
      <div className="h-full" user={user}>
        {Children.map(children, (child) => {
          return React.cloneElement(child, {
            user,
          });
        })}
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: instanceOf(Object),
  location: instanceOf(Object),
};

export default withRouter(MainLayout);
