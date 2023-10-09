import { gql } from '@apollo/client';

export const GET_CHARACTER = gql(`
query getEpisodes{
  episodes{
    results{
      id
      name
      air_date
      episode
      characters{
        name
        image
      }
    }
  }
  }
`);

