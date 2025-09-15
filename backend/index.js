const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", protectedRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));