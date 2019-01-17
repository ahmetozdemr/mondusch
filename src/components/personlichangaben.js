import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Hr from 'react-native-hr-component'

type Props = {};
class personlichangaben extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
      const radio_props = [
          {label: 'Weiblich', value: 0 },
          {label: 'Männlich', value: 1 }
      ];
    return (
      <View>

  <Text style={styles.baseText}>PERSÖNLICHE ANGABEN</Text>

  <View
    style={{
      marginTop: 5,
      borderBottomColor: '#FF507C',
      borderBottomWidth: 2,
    }}
   />

      <DatePicker
        style={styles.datapickerstyle}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderColor: '#FF8CA9',
            borderRadius: 15,
            borderWidth: 2,
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />



          <Text style={{marginTop:20, color: '#171515'}}>Geschlecht</Text>

          <RadioForm
              style={{
                  marginTop: 5,
              }}
              radio_props={radio_props}
              initial={0}
              onPress={(value) => {this.setState({value:value})}}
          />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  baseText: {
    marginTop: 10,
    color:'#FF8CA9',
    fontSize: 20,
    fontWeight: 'bold'
  },
  datapickerstyle:{
    width: 350,
    marginTop: 20,
  }
});

export default personlichangaben;
