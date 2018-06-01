import React from 'react';
import { StyleSheet,Image, Text, ScrollView,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
         <TouchableOpacity 
  style={{backgroundColor:'grey',height:200,width:300,marginTop:500}}>
 <Text 
  style={{fontSize:30,fontWeight:'bold', color:'black'}}>Mother's Day: 
  </Text>
  <Text>Happy Mother's Day To All!
  </Text>
  <Text>Happy Mother's Day To All!
  </Text>
  <Text>Happy Mother's Day To All!
  </Text>
  <Text>Happy Mother's Day To All!
  </Text>
  <Text>Happy Mother's Day To All!
  </Text>
  <Text>Happy Mother's Day To All!
  </Text>
  <Text>Happy Mother's Day To All!
  </Text>
  <Text>Happy Mother's Day To All!
  </Text>
  </TouchableOpacity>
  <TouchableOpacity 
  style={{backgroundColor:'grey',height:200,width:300,marginTop:25}}>
  <Text 
  style={{fontSize:30,fontWeight:'bold',color:'black'}}>Father's Day: 
  </Text>
   <Text>Happy Father's Day To All!
  </Text>
  <Text>Happy Father's Day To All!
  </Text>
  <Text>Happy Father's Day To All!
  </Text>
  <Text>Happy Father's Day To All!
  </Text>
  <Text>Happy Father's Day To All!
  </Text>
  <Text>Happy Father's Day To All!
  </Text>
  <Text>Happy Father's Day To All!
  </Text>
  <Text>Happy Father's Day To All!
  </Text>
  </TouchableOpacity><TouchableOpacity 
  style={{backgroundColor:'grey',height:200,width:300,marginTop:25}}>
  <Text 
  style={{fontSize:30,fontWeight:'bold',color:'black'}}>Teacher's Day: 
  </Text>
  <Text>Happy Teacher's Day To All!
  </Text>
  <Text>Happy Teacher's Day To All!
  </Text>
  <Text>Happy Teacher's Day To All!
  </Text>
  <Text>Happy Teacher's Day To All!
  </Text>
  <Text>Happy Teacher's Day To All!
  </Text>
  <Text>Happy Teacher's Day To All!
  </Text>
  <Text>Happy Teacher's Day To All!
  </Text>
  <Text>Happy Teacher's Day To All!
  </Text>
  </TouchableOpacity><TouchableOpacity 
  style={{backgroundColor:'grey',height:200,width:300,marginTop:25}}>
  <Text 
  style={{fontSize:30,fontWeight:'bold',color:'black'}}>Labour Day: 
  </Text>
  <Text>Happy Labour Day To All!
  </Text>
  <Text>Happy Labour Day To All!
  </Text>
  <Text>Happy Labour Day To All!
  </Text>
  <Text>Happy Labour Day To All!
  </Text>
  <Text>Happy Labour Day To All!
  </Text>
  <Text>Happy Labour Day To All!
  </Text>
  <Text>Happy Labour Day To All!
  </Text>
  <Text>Happy Labour Day To All!
  </Text>
  </TouchableOpacity><TouchableOpacity 
  style={{backgroundColor:'grey',height:200,width:300,marginTop:25}}>
  <Text 
  style={{fontSize:30,fontWeight:'bold',color:'black'}}>Independence Day: 
  </Text>
  <Text>Happy Independence Day To All!
  </Text>
   <Text>Happy Independence Day To All!
  </Text>
   <Text>Happy Independence Day To All!
  </Text>
   <Text>Happy Independence Day To All!
  </Text>
   <Text>Happy Independence Day To All!
  </Text>
   <Text>Happy Independence Day To All!
  </Text>
   <Text>Happy Independence Day To All!
  </Text>
   <Text>Happy Independence Day To All!
  </Text>
 
  </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
