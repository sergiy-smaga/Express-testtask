const app = require("./app");

const { REST_PORT = 3500 } = process.env;

app.listen(REST_PORT, () => {
  console.log("Server running. Use our API on port: 3500");
});
