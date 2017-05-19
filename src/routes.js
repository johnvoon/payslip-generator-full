import App from "App/index";

function errorLoading(err) {
  console.error("Dynamic page loading failed", err); // eslint-disable-line no-console
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

const routes = {
  path: "/",
  component: App,
  indexRoute: {
    getComponent(location, cb) {
      System.import("HomePage/index").then(loadRoute(cb)).catch(errorLoading);
    }
  },
  childRoutes: [
    {
      path: "payslip-generator",
      getComponent(location, cb) {
        System.import("PayslipGenerator/index")
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]
};

export default routes;
