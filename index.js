var GoogleSpreadsheet = require("google-spreadsheet");
var creds = require("./client_secret.json");

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet("1oTl_IPN_ILeoivP5JVFnj1H1CDTZ9adIIf1FBKTuWKM");
//
// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(3, function (err, rows) {
    console.log(rows);
  });
});
