import React from "react";

import { H1, Page } from "../../components";
import Timer from "../../components/Timer";

function TimerScreen(props) {
  const { workout } = props.route.params;
  return (
    <Page style={{ justifyContent: "space-between" }}>
      <H1>{workout.title}</H1>
      <Timer workout={workout} />
    </Page>
  );
}

export default TimerScreen;
