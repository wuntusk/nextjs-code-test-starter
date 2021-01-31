import gql from 'graphql-tag';

export const ProgramsQuery = gql`
  query Programs {
    programs {
      id
      parentId
      location
      allDay
      tags
      name
      start
      end
      dimension
      facilitators
      levelOfCare
      hobbies
      isRepeated
      attendance {
        status
        residentId
      }
      recurrence {
        frequency
        count
      }
    }
  }
`;
