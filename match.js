module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here
  console.log('match is called');
  console.log(typeof(hash));
  const card_expiry_info = [];
  //var cc_pattern = /card\sexpire\sdate\s\b[dmy][yhr]\b/g;
  var cc_pattern = /card\sexpire\sdate\s\b[dmy][a-z]+/g;
  for (let key in hash) {
    console.log(hash[key]);
    var matched_data = hash[key].match(cc_pattern);
    console.log(matched_data);
    if (matched_data){
      card_expiry_info.push(matched_data.toString());
    }
    
  }
  console.log(card_expiry_info);
  return card_expiry_info;
  
}