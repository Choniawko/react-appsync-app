import React, { useState } from "react"
import { compose } from "react-apollo"
import { graphqlMutation } from "aws-appsync-react"
import { AddMessage } from "./mutations"

// TODO: authentication
// TODO: conversation service
const defaultConversation = "4a37fe43-c74a-4fa7-9b6c-376b92f00db5"
const authorId = "5f3c7388-e7de-4aca-be7d-b10db835865b"

const ChatFormComponent = ({ createMessage }) => {
  const [message, setMessage] = useState("")
  const handleChange = ({ target: { value } }) => setMessage(value)
  const handleSubmit = e => {
    e.preventDefault()
    createMessage({
      authorId,
      conversationId: defaultConversation,
      content: message,
    })
    setMessage("")
  }
  return (
    <div className="ChatForm">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={message} type="text" />
        <button>Send</button>
      </form>
    </div>
  )
}

export const ChatForm = compose(graphqlMutation(AddMessage))(ChatFormComponent)
