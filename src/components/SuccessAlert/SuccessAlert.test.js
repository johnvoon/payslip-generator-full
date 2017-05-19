import React from "react";
import SuccessAlert from "./SuccessAlert";
import { shallow } from "enzyme";

describe("SuccessAlert", () => {
  const renderedComponent = shallow(<SuccessAlert message="Success" />);

  it("should match snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
