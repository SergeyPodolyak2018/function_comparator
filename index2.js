const oldEscape = require("./auto_escape_str/autoEscapeStr_problem.js");
const newEscape = require("./auto_escape_str/autoEscapeStr_solut.js");
const newEscape2 = require("./auto_escape_str/autoEscapeStr_solut2.js");
const newEscape3 = require("./auto_escape_str/autoEscapeStr_solut3.js");
const newEscape4 = require("./auto_escape_str/autoEscapeStr_solut4.js");
const newEscape5 = require("./auto_escape_str/autoEscapeStr_solut5.js");
const benchmark = require('./banchmark/benchmark.js');


const testUrl = 'http://a.b/\tbc\ndr\ref g"hq\'j<kl>?mn\\op^q=r`99{st|uv}wz';

const original = ()=>oldEscape(testUrl);
const solution1 = ()=>newEscape(testUrl);
const solution2 = ()=>newEscape2(testUrl);
const solution3 = ()=>newEscape3(testUrl);
const solution4 = ()=>newEscape4(testUrl);
const solution5 = ()=>newEscape5(testUrl);


benchmark.do(100000, [
  original,
  solution1,
  solution2,
  solution3,
  solution4,
  solution5,
]);