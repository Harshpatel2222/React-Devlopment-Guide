import { gql } from "@apollo/client";

export const GET_GEN_3 = gql`
query GET_GEN_3{
    users{
      data{
        id,
        name,
        email 
      }
    }
  }`;