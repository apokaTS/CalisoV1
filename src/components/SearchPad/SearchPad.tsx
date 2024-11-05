import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Feather';

const SearchPad = () => {

  return (
    <View style = {styles.MainContainer}>
        <TouchableOpacity>
         <Icons name="align-center" color={'black'} size = {32} />
        </TouchableOpacity>
        <View style = {styles.TextBox}>
          <TextInput />
        </View>
      <TouchableOpacity >
        <Icon name= "magnifying-glass" color = {'Black'} size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchPad;

const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor : 'white',
        width : 400,
        height : 57,
        borderRadius : 11.5,
        paddingHorizontal : 10,
        paddingVertical: 12,
        flexDirection : 'row-reverse',
        alignItems : 'center',
        borderColor : 'black',
        justifyContent : 'space-between',
        marginTop : 5.5,
    },
    TextBox : {
      backgroundColor : 'White',
      width : 300,
      height : 49,
    },
});
