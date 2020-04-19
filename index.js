require("dotenv").config();

const express = require("express");
const server = express();
const formidableMiddleware = require("express-formidable");
server.use(formidableMiddleware());

const cors = require("cors");
server.use(cors());

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //for unique model :
  useCreateIndex: true,
});

const marvelRoutes = require("./routes/marvel");
server.use(marvelRoutes);
const usersRoutes = require("./routes/users");
server.use(usersRoutes);

server.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to Marvel API, les supers héros, pas que pour les enfaaants !",
  });
});

server.all("*", (req, res) => {
  res.json({ message: "Mauvais chemin de requête" });
});

server.listen(process.env.PORT, () => {
  console.log("server on");
});
