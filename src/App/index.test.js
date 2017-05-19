import { mapDispatchToProps } from "./index";
import { toggleSidebar, hideSidebar } from "./actionCreators";

describe("<App />", () => {
  describe("mapDispatchToProps", () => {
    const dispatch = jest.fn();
    const thunk = jest.fn();

    describe("onToggleSidebar", () => {
      it("should be injected", () => {
        const { onToggleSidebar } = mapDispatchToProps(dispatch);

        expect(onToggleSidebar).toBeDefined();
      });

      it("should dispatch toggleSidebar when called", () => {
        mapDispatchToProps(dispatch).onToggleSidebar();

        expect(dispatch).toHaveBeenCalledWith(toggleSidebar());
      });
    });

    describe("onHideSidebar", () => {
      it("should be injected", () => {
        const { onHideSidebar } = mapDispatchToProps(dispatch);

        expect(onHideSidebar).toBeDefined();
      });

      it("should dispatch hideSidebar when called", () => {
        mapDispatchToProps(dispatch).onHideSidebar();

        expect(dispatch).toHaveBeenCalledWith(hideSidebar());
      });
    });
  });
});
