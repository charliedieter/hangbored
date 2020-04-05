import React from 'react';

import { Row, FlexText } from '../';
import BottomRow from './BottomRow';
import Button from '../../components/Button';
import { playSound } from '../../utils/soundUtils';
import { pad } from '../../utils/timeUtils';
import { TimerWrapper, TimerText } from './styles';

// props: hang, pause, reps, rep_rest, sets, set_rest
class Timer extends React.Component {
  constructor(props) {
    super(props);

    const steps = this.makeSteps();

    this.state = {
      startTime: null,
      elapsed: 0,
      runningTotal: 0,
      timeoutID: null,
      currSet: 1,
      steps: steps,
      currStepIdx: 0,
      toGo: steps[0].duration,
      buttonText: 'start',
      soundEnabled: true,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutID);
  }

  makeSteps() {
    const { hang_time, reps, sets, rep_rest, set_rest } = this.props.workout;
    const steps = [];

    for (let i = 0; i < sets; i++) {
      const set_offset = i * (set_rest + this.repSecs);
      for (let j = 0; j < reps; j++) {
        const hang_start = (hang_time + rep_rest) * j + set_offset;
        steps.push({
          type: 'hang',
          start: hang_start,
          end: hang_start + hang_time,
          duration: hang_time,
          rep: j + 1,
          set: i + 1,
        });
        // add rep rest if not the last
        if (j < reps - 1) {
          steps.push({
            type: 'rep_rest',
            start: hang_start + hang_time,
            end: hang_start + hang_time + rep_rest,
            duration: rep_rest,
            rep: j + 1,
            set: i + 1,
          });
        }
      }
      // add set rest if not the last
      if (i < sets - 1) {
        const start = steps[steps.length - 1].end;
        steps.push({
          type: 'set_rest',
          start: start,
          end: start + set_rest,
          duration: set_rest,
          rep: reps,
          set: i + 1,
        });
      }
    }
    return steps;
  }

  get remaining() {
    if (this.state.startTime) {
      const delta = Date.now() - p.startTime;
      return this.total - this.state.elapsed - delta;
    }
    return this.total - this.elapsed;
  }

  get repSecs() {
    const { hang_time, reps, rep_rest } = this.props.workout;
    const hang_secs = hang_time * reps;
    const rep_rest_secs = rep_rest * (reps - 1);

    return rep_rest_secs + hang_secs;
  }

  get total() {
    const { sets, set_rest } = this.props.workout;
    const set_rest_secs = set_rest * (sets - 1);
    return (this.repSecs * sets + set_rest_secs) * 1000;
  }

  get remaining() {
    return Math.floor(this.total - this.state.elapsed);
  }

  get elapsedSeconds() {
    return Math.ceil(this.state.elapsed / 1000);
  }

  async handleSound(nextStep) {
    try {
      await playSound(nextStep);
    } catch (error) {}
  }

  run = () => {
    let nextStepIdx = this.state.currStepIdx;
    let currSet = this.state.currSet;

    while (this.state.steps[nextStepIdx]?.end <= this.elapsedSeconds) {
      nextStepIdx++;
    }

    let step = this.state.steps[nextStepIdx];
    if (!step) {
      return this.complete();
    }
    if (this.state.currStepIdx !== nextStepIdx) {
      this.handleSound(step.type);
    }

    this.setState((p) => ({
      elapsed: p.runningTotal + (Date.now() - p.startTime),
      timeoutID: setTimeout(this.run, 50),
      toGo: step.end - this.elapsedSeconds,
      currStepIdx: nextStepIdx,
      currSet,
    }));
  };

  complete() {
    // playSound(3);
    alert('🎉💪👩‍🎤');
  }

  start = () => {
    this.setState(
      {
        startTime: Date.now(),
      },
      this.run,
    );
  };

  pause = () => {
    clearTimeout(this.state.timeoutID);

    this.setState((p) => ({
      timeoutID: null,
      startTime: null,
      runningTotal: p.elapsed,
    }));
  };

  toString = () => {
    const ms = this.remaining % 100;
    let secs = Math.floor(this.remaining / 1000);
    const min = Math.floor(secs / 60);
    secs = secs % 60;
    return `${pad(min)}:${pad(secs)}`;
  };

  countdown = (s) => {
    if (s <= 0) {
      return this.setState(
        {
          buttonText: 'pause',
        },
        this.start,
      );
    }

    this.setState(
      {
        buttonText: s,
      },
      () => setTimeout(() => this.countdown(s - 1), 1000),
    );
  };

  handlePress = () => {
    // if active
    if (this.state.startTime) {
      return this.setState(
        {
          buttonText: 'start',
        },
        this.pause,
      );
    }
    this.countdown(3);
  };

  skip = (dir) =>
    this.setState((prevState) => ({
      currStepIdx: prevState.currStepIdx + dir,
    }));

  render() {
    const currStep = this.state.steps[this.state.currStepIdx];
    const isActiveHang = currStep.type === 'hang';
    const currRep = currStep.rep;

    return (
      <>
        <TimerWrapper>
          <Row>
            <FlexText isActive={isActiveHang}>hang</FlexText>
            <FlexText isActive={!isActiveHang}>rest</FlexText>
          </Row>
          <TimerText>{this.state.toGo}</TimerText>
          <BottomRow
            {...this.state}
            {...this.props.workout}
            remaining={this.remaining}
            currRep={currRep}
          />
        </TimerWrapper>
        <Button
          disabled={typeof this.state.buttonText === 'number'}
          title={this.state.buttonText}
          onPress={this.handlePress}
        />
      </>
    );
  }
}

export default Timer;

// skip buttons:
{
  /* <Row style={{ marginTop: 20 }}>
            <RowItem style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => this.skip(-1)}>
                <Feather
                  name="arrow-left-circle"
                  size={50}
                  flex={1}
                  color={colors.text}
                />
              </TouchableOpacity>
            </RowItem>
            <RowItem style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => this.skip(1)}>
                <Feather
                  name="arrow-right-circle"
                  size={50}
                  flex={1}
                  color={colors.text}
                />
              </TouchableOpacity>
            </RowItem>
          </Row> */
}
