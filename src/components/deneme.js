import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

type Props = {};
class Deneme extends Component<Props> {


  render(){
      const radio_props = [
          {label: 'Kadın', value: 0 },
          {label: 'Erkek', value: 1 }
      ];
    return (

     <View>

         <RadioForm
             radio_props={radio_props}
             initial={0}
             onPress={(value) => {this.setState({value:value})}}
         />

     </View>

    )
  }
}

export default Deneme;
