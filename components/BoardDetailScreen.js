import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BoardDetailScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Board Details</Text>
        <Button title="Go to Details... again" />
        <Button title="Go to Home" />
        <Button title="Go back" />
      </View>
    );
  }
}

export default BoardDetailScreen;
