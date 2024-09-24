const axios = require("axios");

function sendRequest(urls = [], max, callback = () => {}) {
  const totalCount = urls.length;
  let pendingCount = 0;
  let succeedCount = 0;
  const stack = urls;

  function doRequest() {
    while (stack.length && pendingCount < max) {
      const url = stack.shift();
      pendingCount++;
      axios.get(url).finally(() => {
        pendingCount--;
        succeedCount++;
        if (succeedCount === totalCount) {
          callback();
        } else {
          doRequest();
        }
      });
    }
  }

  doRequest();
}

const baseUrl = "http://localhost:8082";
const urls = [
  `${baseUrl}/user/cuimm1`,
  `${baseUrl}/user/cuimm2`,
  `${baseUrl}/user/cuimm3`,
  `${baseUrl}/user/cuimm4`,
  `${baseUrl}/user/cuimm5`,
  `${baseUrl}/user/cuimm6`,
  `${baseUrl}/user/cuimm7`,
  `${baseUrl}/user/cuimm8`,
  `${baseUrl}/user/cuimm9`,
  `${baseUrl}/user/cuimm10`,
  `${baseUrl}/user/cuimm11`,
  `${baseUrl}/user/cuimm12`,
  `${baseUrl}/user/cuimm13`,
  `${baseUrl}/user/cuimm14`,
  `${baseUrl}/user/cuimm15`,
  `${baseUrl}/user/cuimm16`,
];
const max = 3;

sendRequest(urls, 3, () => {
  console.log("请求完成");
});
