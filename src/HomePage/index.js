import React from "react";
import { Link } from "react-router";
import Helmet from "react-helmet";
import Footer from "components/Footer";

// eslint-disable-next-line no-unused-vars
const HomePage = props => {
  return (
    <div>
      <main>
        <Helmet
          title="Payslip Generator"
          meta={[
            {
              name: "description",
              content: "An application to generate CSV payslip data from CSV files."
            }
          ]}
        />
        <div
          className="jumbotron"
          style={{
            backgroundImage: "url(https://payslip-generator.surge.sh/images/calculator.jpg)"
          }}
        >
          <div className="container text-center">
            <Link to="/payslip-generator" className="btn btn-home">
              Go to Payslip Generator
            </Link>
          </div>
        </div>
        <div className="home-content container-fluid">
          <div className="lg-margin-top">
            <h1 className="text-center">Instructions</h1>
            <ol>
              <li>
                Go to {" "}
                <Link to="/payslip-generator">
                  Payslip Generator
                </Link>
              </li>
              <li>
                Upload a .csv file into the file upload field by drag-and-drop or by clicking it to browse your file system. Click "Reset Field" to clear the file upload field.
              </li>
              <li>
                Click "Generate Payslip Data".
              </li>
              <li>
                Enter an optional file name (defaults to "payslip.csv").
              </li>
              <li>
                Click "Download".
              </li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
