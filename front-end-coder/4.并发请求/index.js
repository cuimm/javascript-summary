const axios = require("axios");

function getData(url) {
  return axios.get(url).then((res) => {
    console.log(res.data);
    return res.data;
  });
}

function sendRequest(urls = [], max, callback = () => {}) {
  const stack = urls;
  const pendingUrls = [];
  const succeedUrls = [];
  let pendingCount = 0;
  let completeCount = 0;

  function request() {
    while (pendingCount < max) {
      const url = stack.shift();
      pendingCount++;

      getData(url).finally(() => {
        pendingCount--;
        completeCount++;
        if (completeCount === urls.length) {
          return callback();
        }
        if (pendingCount < max) {
          request();
        }
      });
    }
  }

  request();
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
];
const max = 3;

sendRequest(urls, 3, () => {
  console.log("请求完成");
});
