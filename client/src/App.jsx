import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Chatbar from "./Chatbar.jsx";
import Message from "./Message.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: { name: "Anonymous" }, 
			currentUser: { name: "" }, 
			messages: [],
			notification: []
		};
	}

	componentDidMount() {
		this.socket = new WebSocket("ws://localhost:3001");
		console.log("Component mounted...");

		setTimeout(() => {
			console.log("Simulating incoming message");
			const newMessage1 = {
				id: 3,
				username: "Michelle",
				content: "Hello there!"
			};

			const messages = this.state.messages.concat(newMessage1);
			this.setState({ messages: messages });
		}, 3000);

		/* RECEIVING MESSAGE FROM SERVER */
		this.socket.onopen = () => {
			console.log("Connected to server");

			this.socket.onmessage = msg => {
				let newMessage = JSON.parse(msg.data);
				const messages = this.state.messages.concat(newMessage);
				this.setState({ messages: messages });
				this.setState({connections: newMessage.connections})
        console.log('checking color', newMessage)
			};
		};
	}

			addMessage = (newMessage, newUser, editUser) => {
				
        if (editUser) {
          const fullNotification = {
						oldusername: this.state.currentUser.name,
						username: editUser,
						type: "postNotification",
						content: `${this.state.currentUser.name} has changed their name to ${editUser}.`
					}
					this.socket.send(JSON.stringify(fullNotification));
					const currentUser = {...this.state.currentUser, name: editUser}
					this.setState({currentUser})

				} else {
						const fullMessage = {
						type: "postMessage",
						username: newUser,
						content: newMessage,
            userColor: ""
						content: newMessage
						}

						/* SENDING MESSAGE TO SERVER */
						this.socket.send(JSON.stringify(fullMessage));
				};
			}

	render() {
		return (
			<div>
				<Navbar connections={this.state.connections} />
				<Chatbar addMessage={this.addMessage} />
				<MessageList messages={this.state.messages} />
			</div>
		);
	}
}; 

export default App;
