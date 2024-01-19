#!/usr/bin/env node

const path = require("path");

const templateDir = path.join(__dirname, '../templates');
const destinationDir = process.cwd();
const lastDirectoryName = path.basename(destinationDir);
const ncp = require('ncp').ncp;

// Copy the entire template directory to the destination
ncp(templateDir, destinationDir, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log(`Templates copied successfully to ${lastDirectoryName} directory`);
});
