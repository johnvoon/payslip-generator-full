import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Headroom from "react-headroom";
import MainNavbar from "components/MainNavbar";
import Sidebar from "components/Sidebar";
import { toggleSidebar, hideSidebar } from "./actionCreators";
import { VelocityTransitionGroup } from "velocity-react";

const mapStateToProps = state => {
  const { app } = state;
  return {
    ...app
  };
};

export const mapDispatchToProps = dispatch => ({
  onToggleSidebar: () => {
    dispatch(toggleSidebar());
  },

  onHideSidebar: () => {
    dispatch(hideSidebar());
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sidebarShowing, onToggleSidebar, onHideSidebar } = this.props;
    const links = [
      ["Home", "/", "index"],
      ["Payslip Generator", "/payslip-generator"]
    ];

    return (
      <div className="root-container">
        <header>
          <Headroom style={{ zIndex: "4" }}>
            <MainNavbar
              links={links}
              handleClick={onToggleSidebar}
              sidebarShowing={sidebarShowing}
            />
          </Headroom>
        </header>
        <VelocityTransitionGroup
          enter={{ animation: "fadeIn" }}
          leave={{ animation: "fadeOut" }}
        >
          {sidebarShowing
            ? <Sidebar links={links} handleHide={onHideSidebar} />
            : null}
        </VelocityTransitionGroup>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  sidebarShowing: PropTypes.bool.isRequired,
  onToggleSidebar: PropTypes.func.isRequired,
  onHideSidebar: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
