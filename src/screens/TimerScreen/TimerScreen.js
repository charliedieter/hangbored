import React from 'react';
import styled from 'styled-components/native';

import EditButton from './EditButton';
import { H1, Page } from '../../components';
import Timer from '../../components/Timer';

function TimerScreen(props) {
  const { workout } = props.route.params;

  return (
    <Page style={{ justifyContent: 'space-between' }}>
      <Row>
        <View>
          <H1>{workout.title}</H1>
        </View>
        <ButtonContainer>
          <EditButton {...props} />
        </ButtonContainer>
      </Row>
      <Timer workout={workout} />
    </Page>
  );
}

export default TimerScreen;

const Row = styled.View`
  flex-direction: row;
  padding-horizontal: 10px;
`;

const View = styled.View``;

const ButtonContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;
