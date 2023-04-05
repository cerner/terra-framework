'use strict'

module.exports = headingRank

var lowercaseH = 104 // `h`
var digit0 = 48 // `0`
var digit6 = 54 // `6`

// Rank of a heading: H1 -> 1, H2 -> 2, etc.
function headingRank(node) {
  var name = (
    (node && node.type === 'element' && node.tagName) ||
    ''
  ).toLowerCase()
  var code =
    name.length === 2 && name.charCodeAt(0) === lowercaseH
      ? name.charCodeAt(1)
      : 0
  return code > digit0 && code <= digit6 ? code - digit0 : null
}
