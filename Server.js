const express = require("express");
const app = express();
const PORT = 5000;

// frontend er HTML file serve korar jonno
const path = require("path");
app.use(express.static(__dirname));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
