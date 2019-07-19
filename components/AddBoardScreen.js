import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AddBoardScreen extends Component {
  static navigationOptions = {
    title: 'Add Board'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Board</Text>
        <Button title="Go to Add Board... again" />
        <Button title="Go to Home" />
        <Button title="Go back" />
      </View>
    );
  }
}

export default AddBoardScreen;
