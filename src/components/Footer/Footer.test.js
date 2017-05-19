import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("Footer", () => {
  const renderedComponent = shallow(<Footer />);

  it("should match snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
