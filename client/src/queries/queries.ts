import { gql } from 'apollo-boost';

export const WHO_AM_I_QUERY = gql`
  query WhoAmI {
    me {
      firstName
    }
  }
`;
