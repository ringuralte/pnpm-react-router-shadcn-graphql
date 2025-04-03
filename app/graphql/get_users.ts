import { graphql } from "~/gql";

export const GET_USERS = graphql(`
  query GetMe {
    getMe {
      user {
        id
      }
    }
  }
`);
