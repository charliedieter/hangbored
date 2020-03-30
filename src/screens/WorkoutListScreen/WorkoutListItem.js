import React from "react";

import { calculateWorkoutTotal } from "../../utils/timeUtils";
import {
  H2,
  UnderlineWrapper,
  ListItem,
  InnerListItem,
  Row,
  RowItem,
  RowData,
  RowLabel
} from "../../components";

class WorkoutListItem extends React.Component {
  render() {
    const {
      title,
      hang_time,
      rep_rest,
      set_rest,
      reps,
      sets,
      onPress
    } = this.props;

    return (
      <ListItem
        style={{
          elevation: 5
        }}
      >
        <InnerListItem onPress={onPress}>
          <UnderlineWrapper>
            <H2>{title}</H2>
          </UnderlineWrapper>
          <Row>
            <RowItem>
              <RowData>{hang_time}s</RowData>
              <RowLabel>hang time</RowLabel>
            </RowItem>

            <RowItem>
              <RowData>{rep_rest}s</RowData>
              <RowLabel>rep rest</RowLabel>
            </RowItem>

            <RowItem>
              <RowData>{reps}</RowData>
              <RowLabel>rep{reps > 1 ? "s" : ""}</RowLabel>
            </RowItem>
          </Row>
          <Row>
            <RowItem>
              {sets > 1 && (
                <>
                  <RowData>{set_rest}s</RowData>
                  <RowLabel>set rest</RowLabel>
                </>
              )}
            </RowItem>

            <RowItem>
              <RowData>{sets}</RowData>
              <RowLabel>set{sets > 1 ? "s" : ""}</RowLabel>
            </RowItem>

            <RowItem>
              <RowData>{calculateWorkoutTotal(this.props)}</RowData>
              <RowLabel>total time</RowLabel>
            </RowItem>
          </Row>
        </InnerListItem>
      </ListItem>
    );
  }
}

export default WorkoutListItem;
