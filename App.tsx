import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import CardTask from './src/components/CardTask/CardTask';
function App(): React.JSX.Element {
  const taskList = [
    {
      id: 0,
      desc: 'Hacer 20 planas',
    },
    {
      id: 1,
      desc: 'Mamadas (DONDE)',
    },
    {
      id: 2,
      desc: 'Ensayo de algo',
    },
  ];

  const arrayTask = [{
    title: 'Tarea de Español',
    task: taskList,
    inicio: '10-10-2024',
    final: '15-10-2024',
    status: '#04BB00',
  },
  {
    title: 'Tarea de Filosofia',
    task: taskList,
    inicio: '10-10-2024',
    final: '15-10-2024',
    status: '#04BB00',
  },
  {
    title: 'Tarea de Matematicas',
    task: taskList,
    inicio: '10-10-2024',
    final: '15-10-2024',
    status: '#FF9900',
  },
  {
    title: 'Tarea de Termodinamica',
    task: taskList,
    inicio: '10-10-2024',
    final: '15-10-2024',
    status: '#04BB00',
  },
  {
    title: 'Tarea de Biologia',
    task: taskList,
    inicio: '10-10-2024',
    final: '15-10-2024',
    status: '#FF9900',
  },
  {
    title: 'Tarea de Fisica',
    task: taskList,
    inicio: '10-10-2024',
    final: '15-10-2024',
    status: '#04BB00',
  },
  {
    title: 'Tarea de Programacion',
    task: taskList,
    inicio: '10-10-2024',
    final: '15-10-2024',
    status: '#FF0000',
  },
  {
    title: 'Tarea de Aereonautica',
    task: taskList,
    inicio: '10-10-2024',
    final: '15-10-2024',
    status: '#04BB00',
  },
  ];
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView contentContainerStyle = {styles.contentContainerStyle}>
        <View style = {styles.mainContainer}>
          <ImageBackground style = {styles.backgroundContainer} source={require('../calisoApp/src/assets/calisobg.png')}>
          {arrayTask.map((item, id) => (
            <CardTask title={item.title} limitTask={item.final} onPress={() => console.log(item.title)} startTask={item.inicio} statusCard={item.status} task={item.task} key={id}/>
          ))}
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
    backgroundColor : '#FFF',
    },
  backgroundContainer: {
    alignItems : 'center',
    height : '100%',
    width : '100%',
  },
  container : {
    flex : 1,
  },
  contentContainerStyle : {
    flexGrow: 1,
  },
});




export default App;
