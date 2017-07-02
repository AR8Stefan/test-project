import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import NavComponent from './NavComponent/NavComponent.js';

// Make sure you swap this out with your Firebase app's config
const config = {  
  apiKey: "AIzaSyAhJXZJzLBEcbcYLMXE_EzOTQpc9j6kayU",
  authDomain: "streetfood-f9d75.firebaseapp.com",
  databaseURL: "https://streetfood-f9d75.firebaseio.com",
  projectId: "streetfood-f9d75",
  storageBucket: "streetfood-f9d75.appspot.com",
  messagingSenderId: "993553484350"
};

// const fb = firebase  
//   .initializeApp(config)
//   .database()
//   .ref();

const App = (props) => {  
  console.log('snapshot', props);
  return (
    <div>
      <p>{JSON.stringify(props)}</p>
    </div>
  );
}

// fb.on('value', snapshot => {  
//   const store = snapshot.val();
//   ReactDOM.render(
//     <App {...store} />,
//     document.getElementById('root')
//   );
// });

ReactDOM.render(
  <NavComponent />, document.getElementById('root')
);
registerServiceWorker();
