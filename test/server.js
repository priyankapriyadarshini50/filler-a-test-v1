const path = require('path');
var fs = require('fs');
const got = require('got');
const express = require('express');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var match_obj = require('../match.js');
var extract_obj = require('../extract.js');
var app = express();

const PORT=8080;

app.listen(PORT, ()=>{console.log(`Running the server on port ${PORT}`)});


app.get('/', function(req, res) {
    var file_path = path.join(__dirname, '../assets/autofill.mozdev.org.autofilltest.html');
    console.log("path to file", file_path);
    res.sendFile(path.join(__dirname, '../assets/autofill.mozdev.org.autofilltest.html'));
    
});


//it creates mapping.json file
function get_json_data(document){
    var elements = document.querySelectorAll('input[type=text]');
    console.log(document.querySelectorAll('input[type=text], input[type=password]').length);
    var form_json = {};
    elements.forEach(ele => {
        //console.log(typeof(ele.name));
        if (ele.autocomplete === 'off'){
            console.log('Do not add that element');
        }else{
            var key_data = ele.name;
            var value_data = ele.autocomplete ;
            form_json[key_data] = value_data;
        }
    });
    
    var output_json_data = JSON.stringify(form_json, null, "\t");
    //console.log(output_json_data);
    fs.writeFile("../mapping.json", output_json_data, function(err, result) {
        if(err) console.log('error', err);
    });
    
}


var file_url = 'http://localhost:8080/';
const getDomElements = got(file_url).then(response => {
    const dom = new JSDOM(response.body);
    
    console.log(dom.window.document.querySelector('title').textContent);
   
    //get_json_data(dom.window.document);
    //get_metadata_form(dom.window.document);
    var metadata_json = extract_obj.extract(dom.window);
    //console.log(metadata_json);
    var match_cc_data = match_obj.match(metadata_json);
        
    }).catch(err => {
    console.log(err);
  
});
app.post('/adduser',function(request,response){
    console.log(request.body) //you will get your data in this as object.
 })

 //module.exports.getDomElements = getDomElements;