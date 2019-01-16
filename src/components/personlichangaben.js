import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker'
import Hr from 'react-native-hr-component'

type Props = {};
class personlichangaben extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
      <View>
  <Text style={styles.baseText}>PERSÖNLICHE ANGABEN</Text>

  <View
    style={{
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
        maxDate="2016-06-01"
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
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  baseText: {
    color:'#FF8CA9',
    fontSize: 20,
    fontWeight: 'bold'
  },
  datapickerstyle:{
    width: 200,
    marginTop: 20,
  }
});

export default personlichangaben;
