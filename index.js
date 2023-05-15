  const express = require("express");
  const sdk = require("api")("@render-api/v1.0#dnrc1ulf088q9j");
  
  const app = express();
  const port = 3000;
  
  var repos;
  
  sdk.auth("rnd_CDTy8UVwLqhLsVLfsMjnkTt939kD");
  sdk
    .getServices({ limit: "20" })
    .then(({ data }) => {
      repos = data;
      console.log(data);
    })
    .catch((err) => console.error(err));
  
  app.get("/", (req, res) => {
    res.send(repos);
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
  
