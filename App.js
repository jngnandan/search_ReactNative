import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Touchable,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import Home from './views/Home';

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

const App = () => {
  const [value, setValue] = useState('')

  changeText = (Text) => {
    setValue(Text)
  }

  const newSearch = suggestionsList.filter((item) => {
    return item.suggestion.toLowerCase().includes(value.toLowerCase())
  })

  
  return (
    <ScrollView style={{backgroundColor: 'gray'}}>
      <StatusBar
        backgroundColor='gray'
      />
        <View style={{backgroundColor: 'white',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height: '100%',
        paddingHorizontal: '10%'}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 20, marginTop: 220}}>Destination Search</Text>
            
            <View style={{flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 6,}}>
                <TextInput placeholder="Serch" onChangeText={changeText} style={{padding:6, borderWidth: 1, borderRadius:4, paddingVertical: 6, width: '70%'}}/>
                <TouchableOpacity style={{flexDirection:'column', alignItems:'center', justifyContent:'center', paddingHorizontal: 7,}}>
                  <Text>Search</Text>
                </TouchableOpacity>
            </View>
          
          <Text>{value}</Text>



            <View>
              <FlatList
                data={newSearch}
                renderItem={({item}) => <Home suggestionsList={item}/>}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>

        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }
});

export default App;
