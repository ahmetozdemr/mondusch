import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ActionBar from 'react-native-action-bar';
type Props = {};
class Deneme2 extends Component<Props> {


    render(){

        return (

            <View>
               <Text>gddggsdd</Text>
                <Text>gddggsdd</Text>
                <Image
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />

                <Image
                    style={{width: 66, height: 58}}
                    source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                />


            </View>

        )
    }
}

export default Deneme2;