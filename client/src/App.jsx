import React, { Component } from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
  constructor (props) {
    super(props);

    // Socket connection object stored
    this.socket = new WebSocket('ws://localhost:3001');
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [], // Incoming messages from server stored here 
      usersCount: 0,
      userColor: '', 
    }
  };

  componentDidMount() {
    this.socket.onopen = function (event) {
      console.log('Connected to server');
    };

    // Handle user count and incoming messages
    this.socket.onmessage = (event) => {
      let data = JSON.parse(event.data);
      if (event.data == parseInt(event.data)) {
        this.setState({ 
          usersCount: event.data
        });
      } else if (data.type == "color") {
        this.setState({ 
          userColor: data.color 
        });
      } else { 
      this.setState({ messages: this.state.messages.concat(data.message)});
      }
    }
  };

  // Create or update username
  addName = (event) => {
    const oldUsername = this.state.currentUser.name;
    if (event.key === 'Enter') {
      this.setState({ currentUser: {name: event.target.value }});
      let msg = {
        type: "postNotification",
        oldUsername: oldUsername,
        newUsername: event.target.value
      };
      this.sendMessageToServer({ message: msg });
      event.target.value = '';
    }
  };

  // Create message object 
  addMessage = (event) => {
    if (event.key === 'Enter') {
      const msg = {
        type: 'postMessage',
        username: this.state.currentUser.name,
        content: event.target.value,
        userColor: this.state.userColor 
      };

      this.sendMessageToServer({ message: msg });
      event.target.value = '';
    }
  };

  // Send msg object to server as a JSON-formatted string
  sendMessageToServer = (msg) => {
    this.socket.send(JSON.stringify(msg));
  };

  // States and props passed to children
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty App</a>
          <span className="navbar-usersCount">{this.state.usersCount} users online</span>
        </nav>
        <MessageList messages={this.state.messages} userColor={this.state.userColor}/> 
        <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} addName={this.addName}/>
      </div>
    );
  }
};

export default App;
