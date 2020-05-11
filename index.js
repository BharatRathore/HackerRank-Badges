const express = require("express");
const app = express();
let port = process.env.PORT || 3001;

const dummy = require("./routes/getbadgeinfo");

app.use("/api", dummy);

app.use((req, res) => {
  res.json({
    status:"ERROR",
    message:
      "You have entered invalid url please enter hostname/api/{hacker-rank-id}",
  });
});

app.listen(port, () => {
  console.log("Running on port " + port);
});

//console.log(name)
