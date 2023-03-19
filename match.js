module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here
  
  const card_expiry_info = [];
  //pattern for card expire info
  var cc_pattern = /card\sexpire\sdate\s\b[dmy][a-z]+/g;
  for (let key in hash) {

    var matched_data = hash[key].match(cc_pattern);
    if (matched_data){
      card_expiry_info.push(matched_data.toString());
    }
    
  }
  return card_expiry_info;
  
}