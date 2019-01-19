import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import Avatar from './components/Avatar';
import AuthorRow from './components/AuthorRow';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthorRow
          fullname={'Timothy Keaveny'}
          linkText={'Comments'}
          onPressLinkText={() => {
            console.log('Pressed Link Text!');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
