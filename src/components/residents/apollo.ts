import gql from 'graphql-tag';

export const ResidentsQuery = gql`
  query Residents {
    residents {
      id
      name
      preferredName
      status
      firstName
      lastName
      room
      attendance {
        status
        residentId
      }
      birthDate
      moveInDate
      createdAt
      updatedAt
      levelOfCare
      ambulation
    }
  }
`;
