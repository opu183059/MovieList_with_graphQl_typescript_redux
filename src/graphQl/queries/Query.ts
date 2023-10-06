import { gql } from '@apollo/client';

export const GET_CHARACTER = gql(`
  query getCharecterData{
    characters {
      results {
        id
        name
        gender
        location {
          name
        }
        image
        episode {
          name
          air_date
          characters {
            name
          }
        }
      }
    }
  }
`);