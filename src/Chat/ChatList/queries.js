import gql from "graphql-tag"

export const getMessages = gql`
  query queryMessagesByConversationId($conversationId: ID!) {
    queryMessagesByConversationId(conversationId: $conversationId) {
      items {
        id
        authorId
        content
      }
    }
  }
`
