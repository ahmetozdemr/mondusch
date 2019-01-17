import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ActionBar from 'react-native-action-bar';
type Props = {};
class Deneme extends Component<Props> {


  render(){

    return (

     <View>

         <ActionBar
             title={'React-native-action-bar Example'}
             rightText={'Hello'}
             leftIconName={'menu'}
             leftBadge={''}
             onLeftPress={() => console.log('Left!')}
             onTitlePress={() => console.log('Title!')}
             rightIcons={[
                 {
                     name: 'star',
                     badge: '1',
                     onPress: () => console.log('Right Star !'),
                 },
                 {
                     name: 'phone',
                     badge: '1',
                     onPress: () => console.log('Right Phone !'),
                     isBadgeLeft: true,
                 },
                 {
                     name: 'plus',
                     onPress: () => console.log('Right Plus !'),
                 },
                 {
                     name: 'flag',
                     badge: '1',
                     onPress: () => console.log('Right Flag !'),
                 },

             ]}
         />

     </View>

    )
  }
}

const styles = StyleSheet.create({
    bar: {

        margin: 5,
        //  justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default Deneme;
