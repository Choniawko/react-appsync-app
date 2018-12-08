import gql from "graphql-tag";

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
