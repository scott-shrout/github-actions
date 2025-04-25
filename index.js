const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')

try {
    fs.readdir("/", (error, files) => {
        console.log(files);
    })
  } catch (error) {
    core.setFailed(error.message);
  }