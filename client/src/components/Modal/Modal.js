import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";
import io from "socket.io-client";

export default class MessageModal extends Component {
  state = {
    open: false,
    message: "",
  };

  componentDidMount() {
    const socket = io.connect("/");
    socket.on("send to clients", message => this.messageReceive(message));
  }

  messageReceive(message) {
    console.log(JSON.stringify(message));
    this.setState({
      open: true,
      message: message.message,
    });
    // const messages = [...this.state.messages, message];
    // this.setState({messages})
  }

  //   onOpenModal = () => {
  //     this.setState({ open: true });
  //   };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        {/* <button onClick={this.onOpenModal}>Open modal</button> */}
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="message-modal">
            <h4>{this.state.message}</h4>
          </div>
        </Modal>
      </div>
    );
  }
}
