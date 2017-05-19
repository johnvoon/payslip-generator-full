import React from "react";
import Sidebar from "./Sidebar";
import { shallow } from "enzyme";

describe("Sidebar", () => {
  const links = [
    ["Home", "/", "index"],
    ["Payslip Generator", "/payslip-generator"]
  ];
  const handleHide = jest.fn();
  const renderedComponent = shallow(
    <Sidebar links={links} handleHide={handleHide} />
  );

  it("should match snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
