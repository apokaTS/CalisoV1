import {StyleSheet,View} from 'react-native';
import React from 'react';

const Separador = () => {
  return (
    <View style = {styles.line}/>
  );
};

export default Separador;

const styles = StyleSheet.create({
    line : {
        height :1,
        width : 310,
        backgroundColor : '#8c8c8c',
        paddingBottom : 0.1,
        opacity : 0.3,
    },
});
