import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_GEN_3 } from "../../gql/Query";

const Graphql = () =>{
    const { loading, error, data } = useQuery(GET_GEN_3);
    console.log(data);
    
    return (
        <div>
        {loading ? (
            <p>loading</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div>
              {data.users.data.map((data) => {
                return (
                    <div>
                        <p>{data.id}</p>
                        <p>{data.name}</p>
                        <p>{data.email}</p>
                        <hr></hr>
                  </div>
                );
              })}
            </div>
          )}
        </div>
    )
}

export default Graphql;