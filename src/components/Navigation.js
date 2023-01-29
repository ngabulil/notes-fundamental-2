import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {LocaleConsumer} from '../context/LocaleContext'
import { MdLogout } from "react-icons/md";


function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
    {
      ({ locale, toggleLocale}) => {
        return (
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/arsip">
                  Arsip
                </Link>
              </li>
              <li>
                <Link to="/add">
                  Tambah
                </Link>
              </li>
              <li>
                <button onClick={logout} className="button-logout">
                  {name} <MdLogout />
                </button>
              </li>
            </ul>
          </nav>
           )
          }
        }
      </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
