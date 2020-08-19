module.exports = {

  isNotLastContent: (contents, index) => index < contents.length - 1,
  equal: (val1, val2) => val1 === val2,
  sortVersions: versions => versions.map(v => v.version).sort().reverse().map(v => ({ version: v, link: versions.filter(ov => ov.version === v)[0].link })),
  hasChild: (sections, index) => sections[index + 1] ? sections[index].level < sections[index + 1].level : false,
  endOfParent: (sections, index) => sections[index - 1] ? Array.from('a'.repeat(Math.max(sections[index - 1].level - sections[index].level, 0))) : [],
  ancestorOfSelected: (sections, index, path) => path ? sections.filter(s => s.selected)[0].path.match(new RegExp('^' + sections[index].path)) : false

};
