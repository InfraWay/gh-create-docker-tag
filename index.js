const core = require('@actions/core');
const github = require('@actions/github');

try {
  const shaLength = core.getInput('sha-length');
  const registry = core.getInput('registry-name');

  const ref = github.context.ref.split('/');
  const sha = github.context.sha;
  
  const tag = ref[1] == 'tags' ? ref[2] : sha.substring(0, shaLength);
  const name = registry + ':' + tag;

  console.log(`Tag: ${tag}`);
  console.log(`Name: ${name}`);

  core.setOutput("tag", tag);
  core.setOutput("name", name);

} catch (error) {
  core.setFailed(error.message);
}
