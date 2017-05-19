import React from "react";
import ErrorAlert from "./ErrorAlert";
import { shallow } from "enzyme";

describe("ErrorAlert", () => {
  const renderedComponent = shallow(<ErrorAlert message="Error" />);

  it("should match snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
