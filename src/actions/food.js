import { ADD_FOOD, DELETE_FOOD,CALL_API,CALL_APISPECIAL } from './types';
import { useDispatch } from 'react-redux';
import React,{useState} from "react";


export const addFood = (food) => (
  {
    type: ADD_FOOD,
    data: food
  }
);

export const deleteFood = (key) => (
  {
    type: DELETE_FOOD,
    key: key
  }
);

export const call_api = (apicall) => (
{ 
 type:CALL_API,
 data:apicall

}
)

export const call_apiSpecial = async(apicall) => {

  const dispatch = useDispatch();
 
 
try{
  

   const data =  await fetch(`https://jsonplaceholder.typicode.com/posts/${apicall}`,{
      method:'GET'
    })
   .then(response => response.json())
   .then(json => {
        return json;
 
   })
   .catch(error => {
     console.log(error)
   });
   console.log('json abel',data)
   //console.log('food',data[0].id)
   if(Object.keys(data).length === 0){
    console.log('one problem')
     
   }else{
    dispatch({
      
      
      type:CALL_APISPECIAL,
      data:data
     
     
  })
    
   }
  
  }catch(error){
    console.log(error)
  }

   
}




