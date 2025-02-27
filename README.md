# Fillr Test - A

_These two tasks are separate, they do not depend on each other in any way other than referencing the same web forms. I.e. Task #2 does not depend on completing Task #1 at all and vice versa._

Prerequisites

- node.js V4 or greater with npm
- git
- internet connection
- linux OS

To run the solution validation tests: `run/tests`

## Task #1 - Form Mapping

Find all the input controls in the ‘RFC3106 ECLM eCommerce fields’ and ‘Amazon commerce fields’ forms in the web page `assets/autofill.mozdev.org.autofilltest.html`.

Find the HTML autocomplete spec.  This WHATWG Living Spec describes the ‘autocomplete’ attribute of html inputs/controls.

The output of this task is a JSON hash containing:
- the key of each element in the hash will be the ‘name’ attribute of the control.
- the corresponding value for each control name key will be an ‘autofill detail token’ describing your best guess at the most suitable section (optional), address type (optional) and autofill field name for the control as per the WHATWG autofill spec.

Save the complete JSON hash (formatted and indented) to the file named mapping.json
You can implement a script that outputs mapping.json, or you can write out the output manually.

## Task #2 - Regular Expressions

Let the ‘metadata’ for a form control be a string joining the control label and name attribute of the control with a single space character.

For example in the `assets/autofill.mozdev.org.autofilltest.html` forms;

- the "Full Name" control metadata would be "Full Name name".
- the "card number" control metadata would be "card number Ecom_Payment_Card_Number".

And so on for each control with the metadata string format being "<label> <name>".

### Extract Metadata

Write a function that uses the DOM to extract the ’metadata’ for each control in the Amazon and eCommerce Forms in the page `assets/autofill.mozdev.org.autofilltest.html`.

The metadata should be returned from the function in a hash object with the control label as key, and the metadata as the value for each element.

Your function should be authored in the extract.js #extract function, and pass the test Metadata#extract.

## Task #3 - Match Credit Card Controls

Write a function that loops through the metadata hash and returns the metadata values for the 'credit card date fields'.  The function should use regular expressions to match against the control metadata.

Your function should be authored in the match.js #match function, and pass the Regular Expression#match test.

## Submission

Please create a new public repo named ‘fillr-test-a’ in your github account and commit your solutions to the repo.

Please show your working! The more commits in progress the better (this allows us to verify that the work submitted is yours and also shows us your thought processes).
# Fillr Test Solution

## Steps to Follow
- have developed on windows 10 OS
- node version v18.15
- installed the following libraries: express, got, jsdom, chai, mocha and body-parser using npm install
- to run the server use command >npm run test or (in the test folder)>node server.js 

## Assumption and approach
- I tried to serve the static html file using express.js on port 8080
- have used 'got' library to call the endpoint (http://localhost:8080/) and accessed the DOM elememt
- navigate to test folder in command prompt and run > node server.js or npm run test, user can view the "mozdev.org" page on their browser

### For Form Mapping Solution
- added 'autocomplete' attribute in the form input controls and tried to provid more accurate values/autofill detail tokens as per the WHATWG Living Spec in the html file
- have accessed 'name' and 'autocomplete' attribute values in a dictionary format and wrote a script so that it creates mapping.json file, as per the requirement
- navigate to test folder in command prompt and run > node server.js or npm run test, user can view the mapping.json file with the expected json data

### For Extract Metadata
- added and exported a function named 'extract' in the extract.js module
- passed the dom element as parameter and loop through and extracted all the input controls for both the forms
- created a json hash object with "label" as keys and "<label> <name>" as values, as per the requirement
- in addition, created a  json file named "metadata.json" (test folder> metadata.json)
- to get metadata.json run the command> node server.js
- to run the test for extract function, run the command > npm run test, it will display as passed

### For Match Credit Card Control
- added and exported a function named 'match' in the match.js module
- passsed the metadata json object to that function as parameter
- created a patter which would match with the "card expiration date" in day month and year format
- matched data kept in array , as per the requirement
- to run the test, run command > npm run test