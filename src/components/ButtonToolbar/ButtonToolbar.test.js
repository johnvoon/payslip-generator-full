import React from "react";
import ButtonToolbar from "./ButtonToolbar";
import { shallow } from "enzyme";

describe("ButtonToolbar", () => {
  const reset = jest.fn();
  const handleSubmit = jest.fn();

  const renderedComponent = shallow(
    <ButtonToolbar
      pristine={false}
      submitting={false}
      reset={reset}
      handleSubmit={handleSubmit}
    />
  );

  it("should match snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
