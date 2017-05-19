import React from "react";
import PropTypes from "prop-types";
import { IndexLink, Link, withRouter } from "react-router";
import classNames from "classnames";

const NavLink = ({ router, linkText, slug, index }) => {
  const isActive = router.isActive(slug, true);

  return (
    <li className={classNames({ active: isActive })}>
      {index
        ? <IndexLink to={slug}>
            {linkText}
          </IndexLink>
        : <Link to={slug}>{linkText}</Link>}
    </li>
  );
};

NavLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  index: PropTypes.bool
};

export default withRouter(NavLink);
