const config = {
  test: {
    domain: "http://lumen.api/",
  },
  apiUrl: {
    post: "post",
  },
};
export default {
  ...config[process.env.NODE_ENV],
  ...{ apiUrl: config.apiUrl, test: config.test },
};
