import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <ScrollView>
        <View style = {styles.mainContainer}>
          <ImageBackground style = {styles.backgroundContainer} source={require('../calisoApp/src/assets/calisobg.png')}>
          <Text>Aqui bro</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

  const{ width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1,
    backgroundColor: '#fff',
    width : width,
    height : height,
  },
  backgroundContainer: {
    width : width,
    height : height,
  },
});

export default App;