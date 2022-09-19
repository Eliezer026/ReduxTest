import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addFood,call_api,call_apiSpecial } from './actions/food';

const FoodForm = ({ navigation }) => {

  const [food, setFood] = useState('')

  const dispatch = useDispatch();

  const submitFood = (food) => dispatch(addFood(food));
  const sendApi = (data) => dispatch(call_api(data));

  call_apiSpecial('9');

  /*const apiget = async() => {

   await fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{
     method:'GET'
   })
  .then(response => response.json())
  .then(json => {
    sendApi(json)
    console.log('apigett',json);

  })
  .catch(error => {
    console.log(error)
  })

  await fetch('https://jsonplaceholder.typicode.com/posts/' + 100,{
    method: 'PUT', // or 'PUT'
    body: JSON.stringify({name:'juan', lastname:'mend'}), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
    
  })
  .then(response => response.json())
  .then(json => console.log('apiPUT',json))
  .catch(error => {
    console.log(error)
  })


  }*/

  //apiget();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}>Redux</Text>
      <TextInput
        value={food}
        placeholder='Name'
        style={styles.foodInput}
        onChangeText={(food) => setFood(food)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitFood(food)
          setFood('')
        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('FoodList')}>
        <Text style={{ fontSize: 22, color: 'white' }}>Go to FoodList</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  }
});

export default FoodForm;
