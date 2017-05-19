import payslipGeneratorReducer from "./reducer";
import {
  generateCSVStarted,
  generateCSVSuccess,
  resetState
} from "./actionCreators";

describe("payslipGeneratorReducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      csv: null,
      requestSubmitted: false
    };
  });

  it("should return initial state if no state passed", () => {
    const stateAfter = initialState;
    expect(payslipGeneratorReducer(undefined, {})).toEqual(stateAfter);
  });

  it("should handle the GENERATE_CSV_SUCCESS action correctly", () => {
    const csv = `Full Name,Payment Period,Gross Income,Income Tax,Net Income,Super
    David Rudd,01 March - 31 March,5004,922,4082,450
    Ryan Chen,01 March - 31 March,10000,2696,7304,1000`;
    const stateAfter = {
      csv,
      requestSubmitted: false
    };
    expect(
      payslipGeneratorReducer(initialState, generateCSVSuccess(csv))
    ).toEqual(stateAfter);
  });

  it("should handle the GENERATE_CSV_STARTED action correctly", () => {
    const stateAfter = {
      csv: null,
      requestSubmitted: true
    };
    expect(payslipGeneratorReducer(initialState, generateCSVStarted())).toEqual(
      stateAfter
    );
  });

  it("should handle the RESET_STATE action correctly", () => {
    const stateAfter = {
      csv: null,
      requestSubmitted: false
    };
    expect(payslipGeneratorReducer(initialState, resetState())).toEqual(
      stateAfter
    );
  });
});
