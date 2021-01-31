import React from 'react';
import { useQuery } from '@apollo/client';
import { ProgramsQuery } from './apollo';
import { Programs } from '../../apollo/generated/Programs';
import styled from 'styled-components';

const ProgramsContainer = styled.div``;

export const ProgramsElement = (): JSX.Element => {
  const { loading, data } = useQuery<Programs>(ProgramsQuery, {
    variables: {},
    fetchPolicy: 'cache-and-network',
  });

  if (loading || !data) {
    return <div>Loading</div>;
  }

  const { programs } = data;

  return (
    <ProgramsContainer>
      {programs.map((program: { id: string; name: string }) => (
        <div key={program.id}>{program.name}</div>
      ))}
    </ProgramsContainer>
  );
};
