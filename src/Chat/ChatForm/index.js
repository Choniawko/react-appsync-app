import React, { Component } from "react";
import { compose } from "react-apollo";
import { graphqlMutation } from "aws-appsync-react";
import { AddMessage } from "./mutations";

class ChatFormComponent extends Component {
    state = { message: "" };
    handleChange = e =>
        this.setState({ message: e.target.value });
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props);
        this.props.createMessage({
            authorId:
                "5f3c7388-e7de-4aca-be7d-b10db835865b",
            conversationId:
                "4a37fe43-c74a-4fa7-9b6c-376b92f00db5",
            content: this.state.message
        });
        this.setState({ message: "" });
    };
    render() {
        const { handleSubmit, handleChange } = this;
        const { message } = this.state;
        return (
            <div className="ChatForm">
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        value={message}
                        type="text"
                    />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}
export const ChatForm = compose(
    graphqlMutation(AddMessage)
)(ChatFormComponent);
