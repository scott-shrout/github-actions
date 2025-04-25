const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')

try {
   console.log(process.env);
  } catch (error) {
    core.setFailed(error.message);
  }