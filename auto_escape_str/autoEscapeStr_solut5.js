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
function autoEscapeStr(urlStr) {
  let result = urlStr;
  for (let i = 0; i < urlStr.length; ++i) {
    const escapedChar = escapedCodes[urlStr.charCodeAt(i)];
    if (escapedChar) {
      result+=escapedChar;
    }else{
      result+=urlStr[i];
    }
  }
  return result;
}
module.exports = autoEscapeStr;