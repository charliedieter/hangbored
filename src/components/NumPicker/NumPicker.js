import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { Label, inputContainerStyles, inputStyles } from './styles';

class NumPicker extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Label>{this.props.label}</Label>

        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroidContainer: inputContainerStyles,
            inputAndroid: inputStyles,
          }}
          textInputProps={
            Platform.OS === 'ios'
              ? {
                  ...inputStyles,
                  ...inputContainerStyles,
                  paddingVertical: 12,
                }
              : {}
          }
          placeholder={{}}
          value={this.props.value.toString()}
          onValueChange={this.props.onValueChange}
          items={Array.from({ length: this.props.max || 30 }, (_, i) => {
            const value = String(1 + i);
            return {
              value,
              label: value,
            };
          })}
        />
      </View>
    );
  }
}

export default NumPicker;
