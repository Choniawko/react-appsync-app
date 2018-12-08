import React from "react"
import { compose, graphql } from "react-apollo"
import { getMessages } from "./queries"

// TODO: conversation service
const defaultConversation = "4a37fe43-c74a-4fa7-9b6c-376b92f00db5"

const ChatListComponent = ({ messages }) => {
  return (
    <div className="ChatList">
      {messages.map(({ id, content }) => (
        <div key={id}>{content}</div>
      ))}
    </div>
  )
}

export const ChatList = compose(
  graphql(getMessages, {
    options: {
      fetchPolicy: "cache-and-network",
      variables: { conversationId: defaultConversation },
    },
    props: props => ({
      messages: props.data.queryMessagesByConversationId
        ? props.data.queryMessagesByConversationId.items
        : [],
    }),
  }),
)(ChatListComponent)
