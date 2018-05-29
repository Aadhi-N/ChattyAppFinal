const express = require("express");
const SocketServer = require("ws").Server;

const PORT = 3001;

const server = express()
	.use(express.static("public"))
	.listen(PORT, "0.0.0.0", "localhost", () =>
		console.log(`Listening on ${PORT}`)
	);

const wss = new SocketServer({ server });

<<<<<<< HEAD
//Requiring randomly generated user ID
const uuidv1 = require("uuid/v1");

//Array with colors
var colors = ["red", "green", "blue", "purple"];

wss.on("connection", ws => {
	console.log("Client connected!");

	var color1 = colors [Math.floor(Math.random() * colors.length)];

	wss.clients.forEach(function each(client) {
	 	client.send(JSON.stringify({connections: wss.clients.size, userColor: color1 }));
=======
const uuidv1 = require("uuid/v1");

wss.on("connection", ws => {
	console.log("Client connected!");

	wss.clients.forEach(function each(client) {
		client.send(JSON.stringify({connections: wss.clients.size}));
>>>>>>> 6e3f62a6207494c3f9190dfbcb062dd5b0bb4ae1
	});

	ws.onmessage = function(fullMessage, notification) {
		let parsedMessage = JSON.parse(fullMessage.data);
		parsedMessage.connections = wss.clients.size;
		parsedMessage.id = uuidv1();
<<<<<<< HEAD
		parsedMessage.userColor = color1;
=======
>>>>>>> 6e3f62a6207494c3f9190dfbcb062dd5b0bb4ae1

		if (parsedMessage.type === "postMessage") {
			parsedMessage.type = "incomingMessage";
		} else if (parsedMessage.type === "postNotification") {
			parsedMessage.type = "incomingNotification"
		}
<<<<<<< HEAD
		
=======

>>>>>>> 6e3f62a6207494c3f9190dfbcb062dd5b0bb4ae1
		wss.clients.forEach(function each(client) {
			client.send(JSON.stringify(parsedMessage));
		});
	};

	ws.on("close", () => console.log("Client disconnected"));
});
