const Benchmarkify = require("benchmarkify");
const oldEscape = require("./auto_escape_str/autoEscapeStr_problem.js");
const newEscape = require("./auto_escape_str/autoEscapeStr_solut.js");
const newEscape2 = require("./auto_escape_str/autoEscapeStr_solut2.js");
const newEscape3 = require("./auto_escape_str/autoEscapeStr_solut3.js");
const newEscape4 = require("./auto_escape_str/autoEscapeStr_solut4.js");



const benchmark = new Benchmarkify("Test", { description: "Test old and new node core function", chartImage: false }).printHeader();

const testUrl = 'http://a.b/\tbc\ndr\ref g"hq\'j<kl>?mn\\op^q=r`99{st|uv}wz';


// Create a test suite
benchmark.createSuite("Compare escape url functions", { time: 1000, description: "Compare escape functions" })
  .add("Map + new function", () => {
    return newEscape(testUrl);
  })
  .add("Array + new function", () => {
    return newEscape2(testUrl);
  })
  .add("Map + old function", () => {
    return newEscape3(testUrl);
  })
  .add("Map + cicle from string", () => {
    return newEscape4(testUrl);
  })
  .ref("Original", () => {
    return oldEscape(testUrl);
  });

benchmark.run();