import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const CheckBox = () => {

    const [checkbox, setCheckbox] = useState<boolean>(false);

    function handlePressChecked() {
            setCheckbox(!checkbox);
    }

  return (
    <TouchableOpacity onPress={handlePressChecked} style = {styles.checkContainer}>
        {!checkbox ? <Text style = {styles.textFormat}/> : <Text style = {styles.textFormat}>✓</Text>}
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
    checkContainer : {
        borderWidth : 4,
        borderColor : '#000',
        width : 30,
        height : 30,
        borderRadius: 7,
        backgroundColor : 'white',
        alignContent : 'center',
        alignItems : 'center',
        justifyContent : 'center',
    },
    textFormat : {
        fontSize: 16,
        fontWeight : 'normal',
    },
});
