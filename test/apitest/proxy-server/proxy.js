const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3002;

app.use(express.json());

app.all("/proxy", async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post("http://localhost:8080/hapycb", null, {
        data: req.body,
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data via proxy." });
    }
  } else {
    res.status(400).json({ error: "Invalid request method." });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
