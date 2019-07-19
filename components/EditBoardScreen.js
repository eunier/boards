import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class EditBoardScreen extends Component {
  static navigationOptions = {
    title: 'Edit Board'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Board</Text>
        <Button title="Go to Edit Board... again" />
        <Button title="Go to Home" />
        <Button title="Go back" />
      </View>
    );
  }
}

export default EditBoardScreen;
