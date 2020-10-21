const express = require("express");
// const http = require("http").Server(app);
// const io = require("socket.io")(http);
const connectDB = require("./config/db");
const app = express();
connectDB();
// users = [];
// var clients = 0;
/*
*io.on("connection", (socket) => {
 * console.log(socket.id, "A user Connected");
 * clients++;
 * socket.emit("message", clients);
  *console.log(clients, " clients connected");
  *socket.on("setUsername", (data) => {
   * if (users.indexOf(data) > -1) {
    *  socket.emit(
     *   "userExists",
     *   data + " username is taken! Try some other username."
     * );
    *} else {
    *  users.push(data);
    *  socket.emit("userSet", { username: data });
    *}
 * });
 * socket.on("clientE", (data) => {
  *  console.log(data);
  *});
  *socket.on("msg", (data) => {
  *  io.sockets.emit("newmsg", data);
  *});

  *socket.emit("first", new Date());
  *socket.on("disconnect", () => {
  *  console.log("User Gone");
  *});
  *setTimeout(() => {
   * socket.emit("msg1", "Hello Good Morning");
  *}, 2000);
  *setTimeout(() => {
  *  socket.emit("msg2", "Please Enter your name and email");
  *}, 3000);
  *socket.on("addUser", (data) => {
  *  console.log(data);
  *});
*});
*/
app.use(express.json({ extended: false }));

app.use("/client", require("./routes/client"));
app.use("/admin", require("./routes/admin"));
app.use("/adminAuth", require("./routes/adminAuth"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Running On ", PORT);
});
