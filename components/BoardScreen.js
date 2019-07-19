import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text
} from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import firebase from '../Firebase';

class BoardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Board List',
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
          onPress={() => {
            navigation.push('AddBoard');
          }}
        />
      )
    };
  };

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      boards: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const boards = [];
    querySnapshot.forEach(doc => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author
      });
    });
    this.setState({
      boards,
      isLoading: false
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Board List</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('BoardDetails')}
        />
        <Button
          title="Go to Add Board"
          onPress={() => this.props.navigation.navigate('AddBoard')}
        />
        <Button
          title="Go to Edit Board"
          onPress={() => this.props.navigation.navigate('EditBoard')}
        />
      </View>
    );
  }
}

export default BoardScreen;
