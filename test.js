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

test('ignores both prefixes', t => {
  t.is(cia('The Word', 'A Word'), 'Word'.localeCompare('Word'))
})
