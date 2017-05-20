# Payslip Generator
A payslip generator that takes a .csv file as input and outputs a downloadable .csv file. 

## Instructions
- Go to https://payslip-generator-api.herokuapp.com/payslip-generator.
- Upload a .csv file into the file upload field by drag-and-drop or by clicking it to browse the file system. Click "Reset Field" to clear the file upload field.
- Click "Generate Payslip Data".
- Enter an optional file name (defaults to "payslip.csv").
- Click "Download"

## Assumptions
- CSV input will be in the following order and format: first name, last name, annual salary, super rate (%), payment start and end date (year not provided).
- The period between the payment start and end date (both dates inclusive) inputted by the user will be exactly one month and therefore payslip data is generated on a monthly basis.
- Current tax rates are used

## Tech
- Flask routing and Flask-RESTful API
- Front-end development with React, Redux, Bootstrap, Webpack 2, etc.
- JS/JSX code formatting with Prettier-ESLint VS Code extension
- API hosted on Heroku (free tier)
- Static assets hosted on Surge.sh
- Python code testing with pytest
- JavaScript testing with Jest, Enzyme
