import React from "react";
import styled from "styled-components/native";

import { Row } from "../";
import { colors } from "../../utils/constants";

function toMin(secs) {
  function pad(n) {
    if (n < 10) {
      return `0${n}`;
    }
    return n;
  }

  const min = Math.floor(secs / 60);
  secs = secs % 60;
  return `${pad(min)}:${pad(secs)}`;
}

function BottomRow({ currRep, currSet, reps, sets, remaining }) {
  return (
    <Row>
      <FlexBox>
        <Label>remaining</Label>
        <Val>{toMin(Math.floor(remaining / 1000))}</Val>
      </FlexBox>
      <FlexBox>
        <Label>rep</Label>
        <Val>
          {currRep} / {reps}
        </Val>
      </FlexBox>
      <FlexBox>
        <Label>set</Label>
        <Val>
          {currSet} / {sets}
        </Val>
      </FlexBox>
    </Row>
  );
}

export default BottomRow;

const FlexBox = styled.View`
  align-items: center;
  flex: 1;
`;

const Label = styled.Text`
  color: ${colors.secondary};
  font-family: "Montserrat-SemiBold";
  font-size: 16px;
`;

const Val = styled.Text`
  color: ${colors.text};
  font-family: "Lato-Bold";
  font-size: 24px;
`;
