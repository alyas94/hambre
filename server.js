const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// const socketio = require("socket.io");
// app.set("port", process.env.PORT || 3002);
var server = require("http").Server(app);
var io = require("socket.io")(server);

//Cross Origin Access Required
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});

dotenv.config({ path: ".env" });
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static assets
app.use(express.static(path.join(__dirname, "client/build")));
// Routes
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hambreDB",
  {
    useMongoClient: true,
  }
);

// Start the API server
const PORT = process.env.PORT || 3002;

// socketio listeners
io.on("connection", socket => {
  console.log("socket connected");
  socket.on("message", data => {
    console.log(data);
    socket.broadcast.emit("send to clients", { message: data.message });
  });
  socket.on("disconnect", () => console.log("disconnected"));
});

// io.on("connection", function(socket) {
//   console.log("a user connected");
// });

server.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}...`);
});
