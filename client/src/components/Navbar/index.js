import { Avatar, Button, Dropdown, Menu, Tooltip, Typography } from "antd";
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Cookies from "js-cookie";

const { Text } = Typography;
const Navbar = ({ user }) => {
  const history = useHistory();
  const location = useLocation();

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <div className="flex justify-between m-auto px-6 py-2 items-center">
        <div className="flex items-center">
          <img src={Logo} style={{ width: 70 }} alt="Logo" />
          <Text
            className="text-3xl ml-2"
            style={{ color: "rgb(68 172 153)" }}
            strong
          >
            Medicare
          </Text>
        </div>
        <div>
          <Typography.Text
            className={`ml-4 ${isActivePath("/") ? "text-lg" : ""}`}
            strong
          >
            <Link
              style={
                isActivePath("/")
                  ? {
                      color: "black",
                      textDecoration: "underline",
                    }
                  : {}
              }
              to="/"
            >
              Home
            </Link>
          </Typography.Text>
          <Typography.Text
            className={`ml-4 ${isActivePath("/about") ? "text-lg" : ""}`}
            strong
          >
            <Link
              style={
                isActivePath("/about")
                  ? {
                      color: "black",
                      textDecoration: "underline",
                    }
                  : {}
              }
              to="/about"
            >
              About Us
            </Link>
          </Typography.Text>
          <Typography.Text
            className={`ml-4 ${isActivePath("/contact") ? "text-lg" : ""}`}
            strong
          >
            <Link
              style={
                isActivePath("/contact")
                  ? {
                      color: "black",
                      textDecoration: "underline",
                    }
                  : {}
              }
              to="/contact"
            >
              Contact Us
            </Link>
          </Typography.Text>
        </div>
        <div className="flex items-center">
          {user ? (
            <>
              <Button
                onClick={() => history.push("/appointment")}
                style={{ borderRadius: 8 }}
                className="mr-4"
                type="danger"
              >
                View Appointments
              </Button>

              <Dropdown
                overlay={
                  <div>
                    <Menu className="px-5">
                      <Menu.Item
                        onClick={() => {
                          Cookies.remove("token");
                          window.location.href = "/login";
                        }}
                      >
                        Logout
                      </Menu.Item>
                    </Menu>
                  </div>
                }
              >
                <Avatar
                  size="large"
                  src={`https://ui-avatars.com/api/?name=${user.full_name}&format=svg&rounded=true`}
                />
              </Dropdown>
            </>
          ) : (
            <Button style={{ borderRadius: 8 }} className="ml-4" type="danger">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
