const request = require("request");
const fs = require('fs');

const website = process.argv.slice(2);
const websiteURL = website[0];
const localFilePath = website[1];

const requestWrapper = function() {
  request(`${websiteURL}`, (error, response, body) => {
    if (error) {
      console.log("This Url did something funny. try again please");
    }
    fs.writeFile(localFilePath, body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
    });
  });
};

if (websiteURL && localFilePath) {
  requestWrapper();
} else {
  console.log("parameters were not correct");
}