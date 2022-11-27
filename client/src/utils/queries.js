import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    query getSingleUser {
        user {
            _id
            username
            books
        }
    }
`;

