const fs = require('fs');
module.exports.extract = function(window) {
  
  // Write your solution to Task #2 - Extract Metadata task here
  console.log('extract is called');
  var metadata_dict = {};
  var tables = window.document.querySelectorAll('table[cols]');
  tables.forEach(table => {
    var rows = table.querySelectorAll('tbody tr');
    console.log(rows.length);
    rows.forEach(row => {
      //var label = row.querySelector('td:nth-child(1):not(td[colspan])');
      //var input_ele = row.querySelector('td:nth-child(2):not(td[colspan]) input');
      var label = row.querySelector('td:nth-child(1)');
      //console.log(label.textContent, typeof(label.textContent), label.textContent.length);
      if(label.textContent.length !== 1){
          var input_ele = row.querySelector('td:nth-child(2) input, td:nth-child(2) select');
          //console.log(label.textContent, input_ele.name);
          var meta_data_ele = label.textContent.trim() + ' ' + input_ele.name.trim();
          metadata_dict[label.textContent.trim()] = meta_data_ele.trim();
        }
            
    });
        
  });
  //console.log(metadata_dict);
  var metadata_json =JSON.stringify(metadata_dict, null, '\t');
  fs.writeFile("./metadata.json", metadata_json, function(err, result) {
    if(err) console.log('error', err);
  });
  return metadata_dict;

}
