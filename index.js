const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')

try {
    fs.readdir(process.env['GITHUB_WORKSPACE'], (error, files) => {
        console.log(files);
    })
  } catch (error) {
    core.setFailed(error.message);
  }