const express = require("express");
const app = express();
const port = process.env.PORT || 1005;

app.use(express.static("build"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
