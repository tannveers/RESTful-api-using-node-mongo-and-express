const express = require("express");
const users = require("./users");
const app = express();

app.use(express.json());
app.use("/users", users);
app.get("/", (req, res) => res.send("Api worked!"));
app.listen(3000, () => console.log("server started at port 3000"));
