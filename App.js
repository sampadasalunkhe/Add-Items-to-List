import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {

  const [initialElements, changeEl]  = useState([
    { id : "0", text : "Milk"},
    { id : "1", text : "Coffee"},
  ]);

  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(2);

  const addElement = () => {
    var newArray = [...initialElements , {id : idx, text: "Object " + (idx+1) }];
    incr(idx + 1);
    console.log(initialElements.length);
    setExampleState(newArray);
    changeEl(newArray);
  }

  return (
    <View style={styles.container}>
        <FlatList
            keyExtractor = {item => item.id}  
            data={exampleState}
            renderItem = {item => (<Text>{item.item.text}</Text>)} />
        <Button
          title="Add Items"
          onPress={addElement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1
  },
});