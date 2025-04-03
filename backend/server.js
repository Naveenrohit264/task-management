const express = require("express");
const cors = require("cors");
require("dotenv").config();
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
