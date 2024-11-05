import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Separador from '../Separator/Separador';

const FilterSearch = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <TouchableOpacity>
          <Text style={styles.textFormat}>Nuevas</Text>
        </TouchableOpacity>
        <Separador />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.textFormat}>Proxima a vencer</Text>
        </TouchableOpacity>
        <Separador />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.textFormat}>Vencidas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterSearch;

const styles = StyleSheet.create({
  mainContainer: {
    height: 150,
    width: 400,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    paddingLeft: 40,
    marginTop: 5.5,
  },
  textFormat: {
    fontSize: 20,
    color: '#000',
    paddingTop : 2,
    marginBottom : 10,
    marginTop : 8,
  },
});
