/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Personlichangaben from './src/components/personlichangaben'
import Deneme from './src/components/deneme'
import Deneme2 from './src/components/deneme2'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Deneme/>

        <View style={styles.container}>
          <Personlichangaben/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
  //  justifyContent: 'center',
    //alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#F5FCFF',
  }
});
