import React, { useState } from 'react';
import produce from 'immer';
import './App.css';
import Action from './component/Action';
import {configureStore } from '@reduxjs/toolkit'


function App() {
  const [couter,setcouter]=useState(0);
  //action
  const increment=()=>{
    setcouter(prevCouter=>prevCouter+1)
  }
  const obj={a:1,b:2}
  console.log("obj",obj);
  obj.b=3;
  console.log("obj",obj);
  const arr=['a','b'];
  arr.push('c');
  arr[1]='d';
  console.log('arr:',arr);

  const jdk={
    a:{
      c:3
    },
    b:2
  }
  const jdk2={
    ... jdk,
    a:{
      ...jdk . a ,
      c:42
    }
  }
  console.log('jdk:',jdk);
  console.log('jdk2:',jdk2);

  let person={
    firstName:'Bod',
    lastName:'Loblaw',
    address:{
      street:'123 Fake St',
      city:'Emberton',
      state:'NJ'
    }
  }
  // function giveAwesomePowers(person){
  //   person.specialPower="invisibility";
  //   return person;
  // }
  function giveAwesomePowers(preson){
    let newPreson={
      ...preson,
      specialPower:'invisibility'
    }
    return newPreson;
  }
  console.log('preson',person);
  let samePreson=giveAwesomePowers(person);
  console.log('preson',person);
  console.log('samePreson',samePreson);
  console.log('Are they the same?',person===samePreson);
  let num=[1,2,3];
  let newnum=[...num]
  console.log("hey:",newnum);
  let company={
    name:"Foo Corp",
    people:[
      {name:"joe"},
      {name:"Alice"}
    ]
  }
  let newcompany={
    ...company,
    name:'kun huy',
    latyes:'nguyen'
  }
  
  console.log('newcom',newcompany);
  console.log(  newcompany === company);

  const state = {
    houses: {
      gryffindor: {
        points: 15
      },
      ravenclaw: {
        points: 18
      },
      hufflepuff: {
        points: 7
      },
      slytherin: {
        points: 5
      }
    }
  }
  const key='slytherin';
  const newstate={
    ...state,
    houses:{
      ...state.houses,
      [key]:{
        ...state.houses[key],
        points:20
      }
    }
  }
  console.log('state',state);
  console.log('newstate',newstate);

  const arrstate=[1,2,3,'X'];

 
  function reducer(state,action){
    const number=0;
    return [
 
      ...state,     number
    ]
  }
  const newarrstate=reducer(arrstate,null)
  console.log('newarrstate',newarrstate);

function reducer2(state,action){
  return state.map((item,index)=>{
    if(item==="X"){
      return 9;
    }
    return item;
  })
}
const newarrstate2=reducer2(newarrstate,null);
console.log('newarrstate2',newarrstate2);


//cập nhập đối tượng trong 1 mảng
  const statevd = [
    {
      id: 1,
      email: 'jen@reynholmindustries.com'
    },
    {
      id: 2,
      email: 'peter@initech.com'
    }
  ]
  const action = {
    type: "UPDATE_EMAIL",
    payload: {
      userId: 10,  
      newEmail: 'huynguyen@123.com'
    }
  }
  function reducer3(statevd,action){
    return statevd.map((item,index)=>{
      if(item.id===action.payload.userId){
        return {
          ...item,
          email:action.payload.newEmail
        }
      }else
      return {
        ...item
      }
    })
  }
  var newkun=reducer3(statevd,action);
  console.log('newkun',newkun);

  //Xóa 1 phần tử chỉ định trong mảng với filter
  const statexz = [1, 2, "X", 4];
  function reducer4(state,action){
    return state.filter((item,index)=>{
      if (item==='X'){
        return false;
      }
      return true;
    })
  }
  console.log('statesyz:',reducer4(statexz,null));
  //sử dụng immer
  const statepnv = {
    houses: {
      gryffindor: {
        points: 15
      },
      ravenclaw: {
        points: 18
      },
      hufflepuff: {
        points: 7
      },
      slytherin: {
        points: 5
      }
    }
  }
  function immerifiedReducer(state,action){
    const key = "ravenclaw";


  return produce(state, draft => {
    draft.houses[key].points += 3;
  });
  }
  console.log("tui",immerifiedReducer(statepnv));

  //sai action store 
  const initialState={value:0}

function couterReducer(state=initialState,action){
    if(action.type==='couter/increment'){
        return {
            ...state,
            value:state.value+1
        }
    }
    return state
}
const store =configureStore({reducer:couterReducer})
console.log('store mới đây:',store.getState());
store.dispatch({type:'couter/increment'});
console.log('lại là tui đây:',store.getState());
  return (
    <div>
        {couter}<button onClick={increment}>click me</button>
    </div>
  );
}

export default App;
