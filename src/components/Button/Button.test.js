import React from "react";
import Button from "components/Button";
import { shallow } from "enzyme";

describe("Button", () => {
  let renderedComponent;
  const handleClick = jest.fn();

  beforeEach(() => {
    renderedComponent = shallow(
      <Button
        customClassNames="btn-primary"
        type="button"
        disabled={true}
        handleClick={handleClick}
      >
        Button
      </Button>
    );
  });

  it("should call handleClick when clicked", () => {
    renderedComponent.find("button").simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should match snapshot", () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it("should by default have disabled prop set to false if not supplied", () => {
    renderedComponent = shallow(
      <Button
        customClassNames="btn-primary"
        type="button"
        handleClick={handleClick}
      >
        Button
      </Button>
    );
    expect(renderedComponent.prop("disabled")).toBe(false);
  });
});
