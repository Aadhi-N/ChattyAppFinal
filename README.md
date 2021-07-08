# Chatty App

Chatty App is a client-side single-page application where multiple users can chat with each other in real time. It is built with React and Websockets. 


## Preview of App

#### User connects to the app, changing username and creating an instant message:
!["Example of two users connected to the app."](https://github.com/Fathima-N/ChattyAppFinal/blob/master/screenshots/messages.gif)

#### Two users connected to the app:
!["Example of two users connected to the app."](https://github.com/Fathima-N/ChattyAppFinal/blob/master/screenshots/connections.gif)

### Trying it out locally: Getting started

Clone the repo to your local machine.
```
git clone https://github.com/Aadhi-N/ChattyAppFinal/
cd ChattyAppFinal
```
Install all dependencies (using the `npm install` command).

Start the client server:
```
cd client
npm install
npm start
open http://localhost:3000
```

Start the main server:
```
cd server
npm install
node server.js
open http://localhost:3001
```
Both servers should be running at the same time for the app to work.

### Dependencies

* ReactJS
* SASS
* Express
* Websockets
* UUID
