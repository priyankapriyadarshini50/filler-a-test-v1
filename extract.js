const fs = require('fs');
module.exports.extract = function(window) {
  
  // Write your solution to Task #2 - Extract Metadata task here
  console.log('extract is called');
  var metadata_dict = {};
  var tables = window.document.querySelectorAll('table[cols]');
  tables.forEach(table => {
    var rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      var label = row.querySelector('td:nth-child(1)');
      if(label.textContent.length !== 1){
          var input_ele = row.querySelector('td:nth-child(2) input, td:nth-child(2) select');
          var meta_data_ele = label.textContent.trim() + ' ' + input_ele.name.trim();
          metadata_dict[label.textContent.trim()] = meta_data_ele.trim();
        }
            
    });
        
  });
  console.log('Length of metadata',Object.keys(metadata_dict).length);
  var metadata_json =JSON.stringify(metadata_dict, null, '\t');
  fs.writeFile("./metadata.json", metadata_json, function(err, result) {
    if(err) console.log('error', err);
  });
  return metadata_dict;

}
