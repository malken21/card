function doGet(e) {
  var spreadsheet = SpreadsheetApp.openById('スプレッドシートのID');
  var sheet = spreadsheet.getSheetByName('Database');
  var data = e.parameter.data;

  if (data == "" || !data) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "Error" }));
  }

  data = JSON.parse(data);
  if (!data.data) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "Error" }));
  }
  if (data.type == "new") {
    let filter = sheet.getRange(`A2:A`).getValues().filter(text => text == data.data[0]);
    if (filter.length >= 1) {
      return ContentService.createTextOutput(JSON.stringify({ "status": "ID Error" }));
    }
    sheet.appendRow(data.data)
    return ContentService.createTextOutput(JSON.stringify({ "status": "Ok" }));
  }
}
