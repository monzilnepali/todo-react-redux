import React from 'react';
import redux, { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import Counter from './screen/Counter';


//initializing the store
const initialState = {
  count: 0
}

//create reducer
//reducer take two args
//first args is global state
//seocnd args is action which is going to change the state



const reducer = (state = initialState, action) => {
  if (action.type == 'INCREMENT') {
    return {
      count: state.count + 1
    }
  }
  if (action.type == 'DECREMENT') {
    return {
      count: state.count - 1
    }
  }
  return state

  //one key concept about redux is that state is not directly maniputed
  //so reducer make copy of the state and change that
}

//create store

const store = createStore(reducer);

//
//component are connect to store but it doesnot know about the anything in store
//inorder to connect it we use mapStateToProps function

//*mapStateToProps:map the piece of props to component props
//also there is lot of state in store and all component doesnot require all state in store
//we can only map state which are going to be use in component

//*mapDispatchToProps:in order to change the store we need dispatch action which will be provided
//* by this function


const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increament: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}


//connect is HOC
//basically pick what thing you want from store
//this function take entire store tree and boils down to thing which component need only

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;
