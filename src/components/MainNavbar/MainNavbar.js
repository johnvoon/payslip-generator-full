import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import classNames from "classnames";
import NavLink from "components/NavLink";

export default class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkText: ""
    };
  }

  renderLinks() {
    const { links } = this.props;

    return links.map((link, idx) => {
      if (link) {
        const linkText = link[0];
        const slug = link[1];

        return (
          <NavLink
            key={idx}
            linkText={linkText}
            slug={slug}
            index={slug === "/"}
          />
        );
      } else {
        return null;
      }
    });
  }

  render() {
    const { handleClick, sidebarShowing } = this.props;

    return (
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img
                className="logo"
                src="https://payslip-generator.surge.sh/images/payslip-generator-logo.png"
                title="Payslip Generator"
                alt="Payslip Generator"
              />
            </Link>
            <button
              className={classNames(
                "navbar-toggle",
                "collapsed",
                "hamburger",
                "hamburger--elastic",
                { "is-active": sidebarShowing }
              )}
              type="button"
              onClick={handleClick}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

MainNavbar.propTypes = {
  links: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  sidebarShowing: PropTypes.bool.isRequired
};
