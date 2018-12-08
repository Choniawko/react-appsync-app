import gql from "graphql-tag";

// authorId: "5f3c7388-e7de-4aca-be7d-b10db835865b"
// conversationId: "4a37fe43-c74a-4fa7-9b6c-376b92f00db5"
// content: "test message"

export const AddMessage = gql`
    mutation(
        $authorId: ID!
        $conversationId: ID!
        $content: String
    ) {
        createMessage(
            input: {
                authorId: $authorId
                conversationId: $conversationId
                content: $content
            }
        ) {
            id
            content
        }
    }
`;
