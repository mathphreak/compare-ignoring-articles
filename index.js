'use strict'

var prefixes = [
  'The',
  'A'
]

module.exports = function (str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Expected a string')
  }

  for (var prefixIdx in prefixes) {
    if (prefixes.hasOwnProperty(prefixIdx)) {
      str1 = str1.replace(new RegExp('^' + prefixes[prefixIdx] + ' '), '')
      str2 = str2.replace(new RegExp('^' + prefixes[prefixIdx] + ' '), '')
    }
  }

  return str1.localeCompare(str2)
}
