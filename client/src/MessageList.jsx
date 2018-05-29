import React, { Component } from "react";
import Message from "./Message.jsx";
import Chatbar from "./Chatbar.jsx";
import Notification from "./Notification.jsx"

class MessageList extends Component {
	render() {
    const messageList = this.props.messages.map((message, index) => {
        if (message.type === "incomingMessage") {
           return <Message key={index} message={message} />
        } 

        if (message.type === "incomingNotification") {
          return <Notification content={message.content}/>
        } 
    });


		return (
			<main className="messages"> 
      {messageList}
      </main>
		);
	}
}

export default MessageList;
