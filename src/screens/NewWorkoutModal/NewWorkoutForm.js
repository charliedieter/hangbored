import React from 'react';
import { Alert, View } from 'react-native';

import { Row } from '../../components';
import { FormWrapper, Label, TextInput } from './styles';
import Button from '../../components/Button';
import NumPicker from '../../components/NumPicker';

class NewWorkoutForm extends React.Component {
  state = {
    title: 'custom',
    hang_time: 7,
    rep_rest: 3,
    set_rest: 180,
    reps: 6,
    sets: 1,
  };

  update = field => value => {
    if (field !== 'title') {
      value = parseInt(value, 10);
    }
    this.setState({
      [field]: value,
    });
  };

  handleSubmit = () => {
    if (!this.state.title.length) {
      Alert.alert(
        `🥑`,
        `You gotta give it a name`,
        [
          {
            text: 'ok',
            onPress: () => {
              this.titleInput.focus();
            },
          },
        ],
        { cancelable: false },
      );
      return;
    }
    this.props.route.params.addWorkout(this.state, this.titleInput);
  };

  render() {
    return (
      <>
        <FormWrapper>
          <View>
            <Label>name</Label>
            <TextInput
              value={this.state.title}
              placeholder="name"
              onChangeText={this.update('title')}
              ref={ref => (this.titleInput = ref)}
            />
          </View>
          <Row>
            <NumPicker
              label="hang time"
              onValueChange={this.update('hang_time')}
              value={this.state.hang_time}
            />
            <NumPicker
              label="rest between reps"
              max={300}
              onValueChange={this.update('rep_rest')}
              value={this.state.rep_rest}
            />
          </Row>
          <Row>
            <NumPicker
              label="reps"
              onValueChange={this.update('reps')}
              value={this.state.reps}
            />
            <NumPicker
              label="sets"
              onValueChange={this.update('sets')}
              value={this.state.sets}
            />
          </Row>
          {this.state.sets > 1 && (
            <Row>
              <NumPicker
                label="rest between sets"
                max={300}
                onValueChange={this.update('set_rest')}
                value={this.state.set_rest}
              />
            </Row>
          )}
        </FormWrapper>
        <Button title="create" onPress={this.handleSubmit} />
      </>
    );
  }
}

export default NewWorkoutForm;
