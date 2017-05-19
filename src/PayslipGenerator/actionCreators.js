import axios from "axios";
import {
  GENERATE_CSV_STARTED,
  GENERATE_CSV_SUCCESS,
  RESET_STATE
} from "./actionTypes";

export function uploadCSV(content) {
  return dispatch => {
    dispatch(generateCSVStarted());

    return axios
      .post(`${API_URL}/api/generate_payslip_csv`, content)
      .then(response => {
        dispatch(generateCSVSuccess(response.data));
      });
  };
}

export function generateCSVStarted() {
  return {
    type: GENERATE_CSV_STARTED
  };
}

export function generateCSVSuccess(csv) {
  return {
    type: GENERATE_CSV_SUCCESS,
    csv
  };
}

export function resetState() {
  return {
    type: RESET_STATE
  };
}
