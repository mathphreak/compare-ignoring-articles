'use strict'

var prefixes = [
  'The',
  'A',
  'An'
]

module.exports = function (str1, str2, caseSensitive) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Expected a string')
  }

  if (caseSensitive === undefined) {
    caseSensitive = true
  }

  for (var prefixIdx in prefixes) {
    if (prefixes.hasOwnProperty(prefixIdx)) {
      str1 = str1.replace(new RegExp('^' + prefixes[prefixIdx] + ' ', 'i'), '')
      str2 = str2.replace(new RegExp('^' + prefixes[prefixIdx] + ' ', 'i'), '')
    }
  }

  if (!caseSensitive) {
    str1 = str1.toLocaleLowerCase()
    str2 = str2.toLocaleLowerCase()
  }

  return str1.localeCompare(str2)
}
