#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

const filePath = './publish-output.txt';

const setupGit = () => {
  const travis = process.env.TRAVIS;

  if (travis) {
    execSync('git config --global user.email "travis@travis-ci.org"');
    execSync('git config --global user.name "Travis CI"');
    const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
    const token = process.env.GITHUB_TOKEN;
    const newUrl = remoteUrl.replace('https://', `https://${token}@`);
    execSync(`git remote set-url origin "${newUrl}" > /dev/null 2>&1`);
  }
};

const getTags = (output) => {
  const successString = 'Successfully published:\n';
  const lastIndexOf = output.lastIndexOf(successString);
  if (lastIndexOf < 0) {
    return null;
  }
  const substring = output.substring(lastIndexOf + successString.length);
  const withoutDashes = substring.replace(/ - /g, '').trim();
  return withoutDashes.split('\n');
};

if (fs.existsSync(filePath)) {
  const output = fs.readFileSync(filePath, 'utf8');
  console.log(output);
  const tags = getTags(output);
  if (tags) {
    setupGit();
    console.log('tags', JSON.stringify(tags, null, 2));
    tags.forEach(tag => execSync(`git tag -a ${tag} -m "${tag}"`));
    execSync('git push origin --tags');
  } else {
    console.log('Nothing to tag');
  }
}
