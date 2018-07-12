import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Card.css";
import io from "socket.io-client";
class Message extends Component {
  state = {
    message: "",
  };

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.socketToMe(this.state.message);
  };

  socketToMe = message => {
    const socket = io.connect("http://localhost:3000/");
    socket.emit("message", { message: message });
    console.log("data");
  };
  render() {
    return (
      <div className="message-container">
        <Paper className="message-title">
          <h6 className="card-footer">
            Do you have a special? Tell the foodies!
          </h6>
          <form onSubmit={this.handleSubmit} id="form1" className="mb-4">
            <div class="form-group">
              <textarea
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="$1 taco tuesdays! Get some now!"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </Paper>
      </div>
    );
  }
}
export default Message;
