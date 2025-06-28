import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useAuth } from "../../AuthContext";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";

export default function Nav({ openMenu, setOpenMenu }) {
  const { token } = useAuth();

  return (
    <div>
      <nav>
        <div className="nav">
          <div className="logoAndSearch">
            <Link className="logoAndSearch" to={"/"}>
              <h2>ThinkBig</h2>
            </Link>
            <form>
              <input
                type="text"
                // value={querySearch}
                onChange={(e) => setQuerySearch(e.target.value)}
              />
            </form>
          </div>
          <div className="publish">
            {token ? (
              <div className="publish">
                <Link to="/publish">
                  <button>
                    <FaPen className="pen" />
                    Post
                  </button>
                </Link>
                <div className="notifyAndProfile">
                  <span>
                    <IoNotifications className="notification" />
                  </span>
                  {openMenu ? (
                    <IoClose
                      className="menu"
                      onClick={() => setOpenMenu(false)}
                      title="Close menu"
                    />
                  ) : (
                    <IoMenu
                      className="menu"
                      onClick={() => setOpenMenu(true)}
                      title="Open menu"
                    />
                  )}
                </div>
              </div>
            ) : (
              <Link to="/auth/register">
                <button>Sign up</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
