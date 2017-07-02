// import React from 'react';
import * as firebase from 'firebase';

import todoModel from './models/todo';
import sectionModel from './models/section';


let database;
export const configFB = () => {
  let config = {
    apiKey: "AIzaSyAhJXZJzLBEcbcYLMXE_EzOTQpc9j6kayU",
    authDomain: "streetfood-f9d75.firebaseapp.com",
    databaseURL: "https://streetfood-f9d75.firebaseio.com",
    projectId: "streetfood-f9d75",
    storageBucket: "streetfood-f9d75.appspot.com",
    messagingSenderId: "993553484350"
  }
  firebase.initializeApp(configFB)
  database = firebase.database()
}

// retrieve from firebase
// return promise object
export const getSectionsDB = () => {
  return database.ref('/').once('value')
}

// get specified section
export const getTodoDB = (sectionId) => {
  return database.ref(`/${sectionId}`).once('value')
}

// add new section
export const addSection = (name) => {
  let key = database.ref('/').push().key
  let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/'+ key).set(model)
}

// add new todo item into specified section
export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database.ref(`/${id}`).once('value').then((todo) => {
      let todos = todo.val().todos || []
      let key = database.ref(`/${id}`).push().key
      todos.push(todoModel(key, name, firebase.database.ServerValue.TIMESTAMP))
      database.ref(`/${id}/todos`).set(todos)
        .then( res => {resolve(res)})
        .catch( error => {reject(error)})
    })
  })
}











