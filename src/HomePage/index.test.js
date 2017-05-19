import React from "react";
import HomePage from "./index";
import { shallow } from "enzyme";

describe("HomePage", () => {
  const renderedComponent = shallow(<HomePage />);

  it("should match snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
