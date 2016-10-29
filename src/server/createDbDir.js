var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, './db');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}