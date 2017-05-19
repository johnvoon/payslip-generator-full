import React from "react";
import { IndexLink, Link } from "react-router";
import NavLink from "./NavLink";
import { shallow } from "enzyme";

describe("NavLink", () => {
  let renderedComponent;
  const handleClick = jest.fn();

  beforeEach(() => {
    renderedComponent = shallow(
      <NavLink
        router={{}}
        linkText="Payslip Generator"
        slug="payslip-generator"
      >
        NavLink
      </NavLink>
    );
  });

  it("should match snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
