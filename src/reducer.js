import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import appReducer from "App/reducer";
import payslipGeneratorReducer from "PayslipGenerator/reducer";

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer,
  payslipGenerator: payslipGeneratorReducer
});

export default rootReducer;
