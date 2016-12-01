/*
GoogleSyncHelpers
----------------

Helpers for Google Docs direct sycning.
This is useful for public google documents.
*/

var GoogleSyncHelpers = {};

GoogleSyncHelpers.makeDataMap = function(data, syncMetaData){
  var datamap = [[NSMutableDictionary alloc] init];
  for(var i = 0; i < data.length; i++){
    var row = data[i];
    var propkey = null;
    for(var key in row) {
      if(propkey == null){
        propkey = row[key];
      } else {
        if(!datamap[key]){
          datamap[key] = [[NSMutableDictionary alloc] init];
        }
        datamap[key][propkey] = row[key];
      }
    }
  }
  return datamap;
};

GoogleSyncHelpers.makeVersionList = function(data){
  var languages = [[NSMutableArray alloc] init];
  var versionRow = data[0];
  var propkey = null;
  for(var key in versionRow) {
    if(propkey == null){
      propkey = versionRow[key];
    } else {
      [languages addObject:key];
    }
  }
  return languages;
};

GoogleSyncHelpers.promptForUrl = function(previous_source) {
  var alert = [NSAlert alertWithMessageText: "Sync Google Document Text"
                                 defaultButton:"Sync"
                               alternateButton:"Cancel"
                                   otherButton:nil
                     informativeTextWithFormat:"Enter the URL where your text lives."];

  var input = [[NSTextField alloc] initWithFrame:NSMakeRect(0, 0, 300, 54)];
  input.setStringValue(
    previous_source ||
    "https://docs.google.com/spreadsheets/d/1xkkFbXdCEC2Rr_rxO74jdZ30SZSxBuzLdNPFlhsjPws/");
  alert.setAccessoryView(input);
  var button = alert.runModal();
  input.validateEditing();
  if(button){
    return input.stringValue();
  }
  return null;
};

GoogleSyncHelpers.loadFromURL = function(queryURL) {
  var data = null;
  if(queryURL.indexOf("google.com") > -1) {
    var sheetID=queryURL.substring(queryURL.lastIndexOf("/d/")+3,queryURL.lastIndexOf("/"));
    queryURL = "https://spreadsheets.google.com/feeds/list/" + sheetID + "/1/public/values?alt=json";
    data = GoogleSyncHelpers.request(queryURL);
    try {
      data = JSON.parse(data);
      data = GoogleSyncHelpers.parseSheetsData(data);
    } catch(e){
      data = null;
    }
  } else {
    data = GoogleSyncHelpers.request(queryURL);
    data = JSON.parse(data);
  }
  return data;
};

GoogleSyncHelpers.ChooseLanguage = function(languages, language_chosen){
  var alert = [NSAlert alertWithMessageText: "Sync Content Version"
                                 defaultButton:"Sync"
                               alternateButton:"Cancel"
                                   otherButton:nil
                     informativeTextWithFormat:"Select which content version to use:"];

  var input = [[NSComboBox alloc] initWithFrame:NSMakeRect(0, 0, 300, 54)];
  for(var i = 0; i < [languages count]; ++i){
    [input addItemWithObjectValue:languages[i]];
  }
  input.setStringValue(language_chosen || languages[0]);
  alert.setAccessoryView(input);
  var button = alert.runModal();
  input.validateEditing();

  if(button){
    return input.stringValue();
  }
  return null;
};

//
GoogleSyncHelpers.request = function(queryURL) {
  var request = NSMutableURLRequest.new();
  [request setHTTPMethod:@"GET"];
  [request setURL:[NSURL URLWithString:queryURL]];
  var error = NSError.new();
  var responseCode = null;
  var oResponseData = [NSURLConnection sendSynchronousRequest:request returningResponse:responseCode error:error];
  var dataString = [[NSString alloc] initWithData:oResponseData encoding:NSUTF8StringEncoding];
  return dataString;
};

GoogleSyncHelpers.parseSheetsData = function(data) {
  var result = [];
  var items = data.feed.entry;
  for(var i=0; i<items.length; i++) {
    var item = items[i];
    var resultItem = {}
    for(var key in item) {
      var attr = key.split('gsx$')[1];
      if(!attr) { continue; }
      attr = capitalize(attr);
      resultItem[attr] = item[key]['$t'];
    }
    result.push(resultItem);
  }
  return result;
};


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
