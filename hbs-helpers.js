module.exports = {

  isNotLastContent: (contents, index) => index < contents.length - 1,
  equal: (val1, val2) => val1 === val2,
  sortVersions: versions => versions.map(v => v.version).sort().reverse().map(v => ({ version: v, link: versions.filter(ov => ov.version === v)[0].link }))

};
