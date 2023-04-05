module.exports = (releasedPackages) => {
  // eslint-disable-next-line no-console
  console.log(`The following packages will be released:

  - ${releasedPackages.join('\n  - ')}
`);
};
