const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/user/?:name", (req, res) => {
  const name = req.params.name;
  if (!name) {
    return res.status(400).send("name is required");
  }

  setTimeout(() => {
    console.log("response data:", name);

    res.send({
      name: name,
      timestamp: Date.now(),
    });
  }, Math.random() * 10 * 500);
});

app.listen(8082, () => {
  console.log("Server is running on http://localhost:8082");
});
