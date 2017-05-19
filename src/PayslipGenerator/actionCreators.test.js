import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  uploadCSV,
  generateCSVStarted,
  resetState,
  generateCSVSuccess
} from "./actionCreators";
import {
  GENERATE_CSV_STARTED,
  RESET_STATE,
  GENERATE_CSV_SUCCESS
} from "./actionTypes";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("PayslipGenerator action creators", () => {
  const mock_employee_data = `David,Rudd,60050,9%,01 March - 31 March
  Ryan,Chen,120000,10%,01 March - 31 March`;
  const csv = `Full Name,Payment Period,Gross Income,Income Tax,Net Income,Super
  David Rudd,01 March - 31 March,5004,922,4082,450
  Ryan Chen,01 March - 31 March,10000,2696,7304,1000`;

  describe("uploadCSV", () => {
    it("dispatches GENERATE_CSV_SUCCESS action if UPLOAD_CSV successful", () => {
      const mock = new MockAdapter(axios);
      mock
        .onPost(`${API_URL}/api/generate_payslip_csv`, mock_employee_data)
        .reply(200, csv);

      const store = configureStore([thunk])({});

      return store.dispatch(uploadCSV(mock_employee_data)).then(() => {
        expect(store.getActions()[0]).toEqual(generateCSVStarted());
        expect(store.getActions()[1]).toEqual(generateCSVSuccess(csv));
      });
    });
  });

  describe("generateCSVStarted", () => {
    it("should return correct type", () => {
      const expectedResult = {
        type: GENERATE_CSV_STARTED
      };

      expect(generateCSVStarted()).toEqual(expectedResult);
    });
  });

  describe("generateCSVSuccess", () => {
    it("should return correct type and paylod", () => {
      const expectedResult = {
        type: GENERATE_CSV_SUCCESS,
        csv
      };

      expect(generateCSVSuccess(csv)).toEqual(expectedResult);
    });
  });

  describe("resetState", () => {
    it("should return correct type", () => {
      const expectedResult = {
        type: RESET_STATE
      };

      expect(resetState()).toEqual(expectedResult);
    });
  });
});
