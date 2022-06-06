const core = require('@actions/core');
const github = require('@actions/github');

try {
  const shaLength = core.getInput('sha-length');
  const ref = github.context.ref.split('/');
  const sha = github.context.sha
  const tag = ref[1] == 'tags' ? ref[2] : sha.substring(0, shaLength)
  console.log(`Tag: ${tag}`);
  core.setOutput("tag", tag);
} catch (error) {
  core.setFailed(error.message);
}
