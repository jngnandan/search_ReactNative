
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({suggestionsList}) => {
  const {id, suggestion} = suggestionsList

  return (
    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray', margin: 6, paddingVertical: 40, width: '100%',  borderRadius: 4,}}>
      <Text style={{textAlign: 'left'}}>{id}</Text>
      <Text style={{fontSize: 24}}>{suggestion}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})