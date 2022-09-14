const core = require('@actions/core')
const github = require('@actions/github')

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

try {
    const source = core.getInput('source')
    const find = core.getInput('find')
    const replace = core.getInput('replace')
    const branchName = replaceAll(source, find, replace)
    core.setOutput('value', branchName)
} catch (error) {
    core.setFailed(error.message)
}
