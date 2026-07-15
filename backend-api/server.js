const express = require("express");
const app = express();

const userRoutes = require("./routes/users");

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to DecodeLabs Backend API");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});