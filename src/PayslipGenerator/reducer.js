import {
  GENERATE_CSV_STARTED,
  GENERATE_CSV_SUCCESS,
  RESET_STATE
} from "./actionTypes";

const initialState = {
  csv: null,
  requestSubmitted: false
};

export default function payslipGeneratorReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_CSV_STARTED:
      return generateCSVStarted(state, action);
    case GENERATE_CSV_SUCCESS:
      return generateCSVSuccess(state, action);
    case RESET_STATE:
      return resetState(state, action);
  }

  return state;
}

// eslint-disable-next-line no-unused-vars
function generateCSVStarted(state, actions) {
  return {
    ...state,
    requestSubmitted: true
  };
}

function generateCSVSuccess(state, actions) {
  const { csv } = actions;

  return {
    ...state,
    csv
  };
}

// eslint-disable-next-line no-unused-vars
function resetState(state, actions) {
  return {
    ...state,
    csv: null,
    requestSubmitted: false
  };
}
