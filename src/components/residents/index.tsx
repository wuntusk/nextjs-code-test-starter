import React from 'react';
import { useQuery } from '@apollo/client';
import { ResidentsQuery } from './apollo';

export const Residents = (): JSX.Element => {
  const { loading, data } = useQuery(ResidentsQuery, {
    variables: {},
    fetchPolicy: 'cache-and-network',
  });

  if (loading || !data) {
    return <div>Loading</div>;
  }

  const { residents } = data;

  return (
    <div>
      {residents.map((resident: { id: string; name: string }) => (
        <div key={resident.id}>{resident.name}</div>
      ))}
    </div>
  );
};
