var fs = require('fs'),  
    analyzeCode = require('./lib/analyze'); 
   
  
 
if (process.argv.length < 3) {  
    console.log('Usage: index.js file.js');  
    process.exit(1);  
}  
   
var filename = process.argv[2];  
console.log('Reading ' + filename);  
var source = fs.readFileSync(filename, 'utf-8');  
var obj = analyzeCode(source);  
console.log('Done', obj); 