// Escaped characters. Use empty strings to fill up unused entries.
// Using Array is faster than Object
const { performance } = require('perf_hooks');

const escapedCodes = {
  9:'%09',
  10:'%0A',
  13:'%0D',
  32:'%20',
  34:'%22',
  39:'%27',
  60:'%3C',
  63:'%3E',
  92:'%5C',
  94:'%5E',
  96:'%60',
  123:'%7B',
  124:'%7C',
  125:'%7D'
}

// Automatically escape all delimiters and unwise characters from RFC 2396.
// Also escape single quotes in case of an XSS attack.
// Return the escaped string.
function autoEscapeStr(rest) {
  let escaped = '';
  let lastEscapedPos = 0;
  for (let i = 0; i < rest.length; ++i) {
    // `escaped` contains substring up to the last escaped character.
    const escapedChar = escapedCodes[rest.charCodeAt(i)];
    if (escapedChar) {
      // Concat if there are ordinary characters in the middle.
      if (i > lastEscapedPos)
        escaped += rest.slice(lastEscapedPos, i);
      escaped += escapedChar;
      lastEscapedPos = i + 1;
    }
  }
  if (lastEscapedPos === 0)  // Nothing has been escaped.
    return rest;

  // There are ordinary characters at the end.
  if (lastEscapedPos < rest.length)
    escaped += rest.slice(lastEscapedPos);

  return escaped;
 }

module.exports = autoEscapeStr;