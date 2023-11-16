const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);

const io = require("socket.io")(server);

app.use(express.static("public"));

server.listen(3000, () => {
  console.log("listening");
});

const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const users = {};

io.on("connection", (client) => {
  const broadcast = (eventName, eventData) => {
    client.emit(eventName, eventData); // do konkretnego klient/połączenie
    client.broadcast.emit(eventName, eventData); // do wszystkich
  };

  // połączenie nowego użytkownika i rozesłanie o tym wiadomości
  client.on("newUser", (name) => {
    users[client.id] = { name, color: getRandomColor() };
    broadcast("user", users);
  });

  client.on("message", (message) => {
    if (users[client.id].name !== message.name) {
      users[client.id].name = message.name;
      broadcast("user", users);
    }
    broadcast("message", { ...message, color: users[client.id].color });
  });

  client.on("disconnect", () => {
    delete users[client.id];
    client.broadcast.emit("user", users);
  });
});
