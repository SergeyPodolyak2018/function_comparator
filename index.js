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
    let rez=''
    for(let i = 0; i<10000;i++){
      rez = newEscape(testUrl);
    }
    return rez;
  })
  .add("Array + new function", () => {
    let rez=''
    for(let i = 0; i<10000;i++){
      rez = newEscape2(testUrl);
    }
    return rez;
  })
  .add("Map + old function", () => {
    let rez=''
    for(let i = 0; i<10000;i++){
      rez = newEscape3(testUrl);
    }
    return rez;

  })
  .add("Map + cicle from string", () => {
    let rez=''
    for(let i = 0; i<10000;i++){
      rez = newEscape4(testUrl);
    }
    return rez;

  })
  .ref("Original", () => {
    let rez=''
    for(let i = 0; i<10000;i++){
      rez = oldEscape(testUrl);
    }
    return rez;
  });
benchmark.run();