import test from 'ava'
import cia from './'

test('compares strings with no detected prefix', t => {
  t.is(cia('String', 'String2'), 'String'.localeCompare('String2'))
  t.is(cia('stuff', 'other stuff'), 'stuff'.localeCompare('other stuff'))
  t.is(cia('Test String', 'please ignore'), 'Test String'.localeCompare('please ignore'))
})

test('compares strings starting with "The"', t => {
  t.is(cia('The String', 'String'), 'String'.localeCompare('String'))
})

test('compares strings starting with "the"', t => {
  t.is(cia('the String', 'String'), 'String'.localeCompare('String'))
})

test('doesn\'t munge words that start with "The"', t => {
  t.is(cia('Theology', 'Things'), 'Theology'.localeCompare('Things'))
})

test('compares strings starting with "A"', t => {
  t.is(cia('A String', 'String'), 'String'.localeCompare('String'))
})

test('doesn\'t munge words that start with "A"', t => {
  t.is(cia('Apology', 'nothing'), 'Apology'.localeCompare('nothing'))
})

test('compares strings starting with "An"', t => {
  t.is(cia('An Idea', 'Idea'), 'Idea'.localeCompare('Idea'))
})

test('doesn\'t munge words that start with "An"', t => {
  t.is(cia('Anapestic Tetrameter', 'array'), 'Anapestic Tetrameter'.localeCompare('array'))
})

test('ignores both prefixes', t => {
  t.is(cia('The Word', 'A Word'), 'Word'.localeCompare('Word'))
})

test('case sensitive by default', t => {
  t.not(cia('Fail', 'fail'), cia('fail', 'fail'))
})

test('case insensitive when configured', t => {
  t.is(cia('Fail', 'fail', false), cia('fail', 'fail'))
})

test('can be used to sort arrays', t => {
  let arr = [
    'An Incredible Title',
    'a lowercase thing',
    'The very best',
    'example'
  ]
  arr.sort((x, y) => cia(x, y, true))
  t.same(arr, [
    'example',
    'An Incredible Title',
    'a lowercase thing',
    'The very best'
  ])
})
