import React from 'react';
import { StyleSheet,Image, Text, ScrollView,TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';
 
export default class App extends React.Component {
  constructor(props){
super(props);
 
 
}

  
  render() {
    return (
      <ScrollView style={styles.container}>
 
       <Text 
  style={{fontSize:30,fontWeight:'bold',color:'blue',marginTop:750}}>Mother's Day: 
  </Text>
   
        
        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'May your Mother’s Day be filled with as much happiness as you brought to my childhood.')}>
  <Text>May your Mother’s Day be filled with as much happiness as you brought to my childhood.
  </Text>
  </TouchableOpacity>
        
        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'May all the love you gave to us come back to you a hundredfold on this special day!')}>
  <Text>May all the love you gave to us come back to you a hundredfold on this special day!
  </Text>
  </TouchableOpacity>
        
        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Mom.... You’re the best! Thanks for all you do. Happy Mother’s Day!')}>
  <Text>Mom.... You’re the best! Thanks for all you do. Happy Mother’s Day!
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Mother is she who can take the place of all others but whose place no one else can take.')}>
  <Text>Mother is she who can take the place of all others but whose place no one else can take.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'MOM means everything.')}>
  <Text>MOM means everything.
  </Text>
  </TouchableOpacity>



        
    <Text 
  style={{fontSize:30,fontWeight:'bold',color:'blue',margin:5}}>Father's Day: 
  </Text>

        
        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'My dad is my best friend, my father, and my boss. When I do something that is exciting and he likes it, it feels three times as good as you can imagine.')}>
  <Text>My dad is my best friend, my father, and my boss. When I do something that is exciting and he likes it, it feels three times as good as you can imagine.
  </Text>
  </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'May all the love you gave to us come back to you a hundredfold on this special day!')}>
  <Text>May all the love you gave to us come back to you a hundredfold on this special day!
  </Text>
  </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Dad a son"s first hero and a daughter"s first love!')}>
  <Text>Dad a son"s first hero and a daughter"s first love!
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'A father does not tell that he loves you. He shows you.')}>
  <Text>A father does not tell that he loves you. He shows you.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Any man can be a father but it takes someone special to be a DAD.')}>
  <Text>Any man can be a father but it takes someone special to be a DAD.
  </Text>
  </TouchableOpacity>




        
            <Text 
  style={{fontSize:30,fontWeight:'bold',color:'blue',margin:5}}>Teacher's Day: 
  </Text>

        
        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Teaching creates all other proffessions.')}>
  <Text>Teaching creates all other proffessions. 
  </Text>
  </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'The best teachers teach from the heart not from the book.')}>
  <Text>The best teachers teach from the heart not from the book.
  </Text>
  </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Teachers who love teaching,teach childern to love learning.')}>
  <Text>Teachers who love teaching,teach childern to love learning.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'A teacher takes a hand, Opens a mind, and touches a heart.')}>
  <Text>A teacher takes a hand, Opens a mind, and touches a heart.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Dear Teacher! Thanks for making us what we are today.')}>
  <Text>Dear Teacher! Thanks for making us what we are today.
  </Text>
  </TouchableOpacity>
        




            <Text 
  style={{fontSize:30,fontWeight:'bold',color:'blue',margin:5}}>Labor Day: 
  </Text>

        
        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'It is only through labor and painfull effort, by grim energy and resolute courage, that we move on to better things.')}>
  <Text>It is only through labor and painfull effort, by grim energy and resolute courage, that we move on to better things.
  </Text>
  </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Without labor nothing prospers.')}>
  <Text>Without labor nothing prospers.
  </Text>
  </TouchableOpacity>

        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Work is not man"s punishment. It is his reward and his strength and his pleasure.')}>
  <Text>Work is not man"s punishment. It is his reward and his strength and his pleasure.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Let us celebrate the Labour Day, those built up this greate land.')}>
  <Text>Let us celebrate the Labour Day, those built up this greate land.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Your hard work and your dedication have helped to build the nation may you have a great time ahead.')}>
  <Text>Your hard work and your dedication have helped to build the nation may you have a great time ahead.
  </Text>
  </TouchableOpacity>





            <Text 
  style={{fontSize:30,fontWeight:'bold',color:'blue',margin:5}}>Culture Day: 
  </Text>

        <TouchableOpacity 
        style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Its a day of appreciation of the irish culture and heritage.')}>
  <Text>Its a day of appreciation of the irish culture and heritage.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'A nations culture resides in the hearts and the soul of its people.')}>
  <Text>A nations culture resides in the hearts and the soul of its people.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Culture is the widening of the mind and of the spirit.')}>
  <Text>Culture is the widening of the mind and of the spirit.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'We are hero of our own story.')}>
  <Text>We are hero of our own story.
  </Text>
  </TouchableOpacity>

  <TouchableOpacity 
  style={{backgroundColor:'brown',margin:5}} onPress={() => Communications.text('', 'Culture is the arts elevated to a set of beliefs.')}>
  <Text>Culture is the arts elevated to a set of beliefs.
  </Text>
  </TouchableOpacity>
    
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});