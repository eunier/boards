import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BoardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Board List</Text>
        <Button title="Go to Details" />
        <Button title="Go to Add Board" />
        <Button title="Got to Edit Board" />
      </View>
    );
  }
}

export default BoardScreen;
