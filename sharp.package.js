//const CopyPlugin = require('copy-webpack-plugin');
var fs = require('fs');
var path = require('path'); // required for tests.

var copyRecursiveSync = function(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (exists && isDirectory) {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function(childItemName) {
        copyRecursiveSync(path.join(src, childItemName),
                            path.join(dest, childItemName));
        });
    } else {
        console.log('fs.copyFile: ', src, dest);
        fs.copyFileSync(src, dest);    // UPDATE FROM:    fs.linkSync(src, dest);
    }
};


module.exports = (buildPath, electronVersion, platform, arch, done) => {
    console.log('buildPath: ', buildPath);
    fs.mkdirSync(`${buildPath}\\resources\\app`);
    // fs.mkdirSync(`${buildPath}\\resources\\app\\node_modules`);
    // copyRecursiveSync('./node_modules/sharp/', `${buildPath}\\resources\\app\\node_modules\\sharp\\`);
    copyRecursiveSync('./node_modules/', `${buildPath}\\resources\\app\\node_modules\\`);
    done();
};



    // new CopyPlugin([
    //     {
    //     from: 'root/node_modules/sharp/',
    //     to: 'output/node_modules/sharp/', 
    //     },
    // ])
  
