import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ActionBar from 'react-native-action-bar';
type Props = {};
class Deneme2 extends Component<Props> {


    render(){

        const { query } = this.state;
        const data = this._filterData(query)

        return (

            <View>

                <Autocomplete
                    data={data}
                    defaultValue={query}
                    onChangeText={text => this.setState({ query: text })}
                    renderItem={item => (
                        <TouchableOpacity onPress={() => this.setState({ query: item })}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                />);

            </View>

        )
    }
}

export default Deneme2;