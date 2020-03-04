import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/Store'



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));




/*

redux


1.Action:
 -->Action are the payload which send data to be save in store.
 -->action are send via dispatch().
 -->actions are basically plain js object which must contain the 'type' which indicate what types of
     action need to be performed in store.
 -->action creator is function that create action
    //* function addTodo(text){
    //*  return{
    //*  type:'ADDTODO',
    //*  text:text
    //*  }
    //* }

  -->action can be dispatch using store.dispatch(action) but in application we access dispatch using
    helper like react-redux connect()


2.Reducer
 -->in action we only define what action need to perform but dont describe how the application change
   state
 --> reducer is pure function which take previous state of store and action and return new state
      (prevState,action)=>newState

  -->it is important that reducer need to pure function.
  -->thing you should never do in reducer
      1.mutation
      2.perform side effect like Api call and routing transaction
      3.call non pure function e.g date.now() or math.random()





  3.store:
  -->it is single giant object  which hold complete state tree of app
  -->and have following responsibilites
    1.hold application state
    2.allow access application state by getState()
    3.allow state to update using dispatch(Action)
    4.register listener via subscrib(listener)
    5.handle unregistering the listener using subscribe(listener)

    //*const store=createStore(reducer)
  -->createstore args
      1.reducer:function that return next state upon prev state and action
      2.[preloadedState]:initial state
      3.[enhancer]:store enhancer.only enhancer that come with redux is applyMiddleware
  --> dont create more than one store.instead use combinereducer to create single root tree of many reducer

  --> when store is created redux dispatch a dummy action to reducer to populate  the state with initial value


 4. subcribe:
   -->add change listener
   -->it is called every time action is dispatch and some part of state tree has been changed

*/

/*

Data flow of redux

1.call store.dispatch(Action)
   -->store.dispatch call be called from anywhere in app
2.the store call the reducer function which is passed args during initialization
  store will pass two argument to reducer current state  tree and action

3. the root reducer may combine the output from mulitple reducer into a single tree and return that tree

4.redux save the completed tree return from the reducer.
  every listener subscribe to store will be invoked and listener may call getState to get new state tree


//* redux middleware
  //* async

Middleware:

-->it provide third party point between dispatching action and moment it reach the reducer
//* action_creator->action->middlware->reducer->store

-->middleware work similar as in express middleware do.
-->someway between action and reducer,the middleware intercept the action object before reducer  and
   it give functionality to perform additional action with respect ot the action dispatched

--> for eg:if you want to fetch data from server which is /(async) we cannot fetch data from reducer because
   redux reducer must be synchronous.
--> for this async functionality we use middleware which we fetch data from server and then send data to reducer

//* basic syntax of redux middleware
    const fn=store=>next=>action=>{
        next(action)
    }

  middleware args:
   1.store=>current store state
   2.action=>action dispatched
   3.next()

-->next():it function which allow middleware to async and call next() after current middleware execution completed
   next() function is middleware flow control mechanism.you can call next() aynchronously or event not also.

   e.g const fn=store=>next=>action=>{
         fetch(data).then(res=>{
            action.payload=res
            next(action)
         })
   }


redux thunk:redux thunk is middleware which allow to write action creator that return function instead
   action that return action object
   --->basically thunk is functional programming technique which is used to delay computation.
   x=1+2  is immediate
   if we want to delay the computation
   const comp=()=>{
       return 1+2
   }
   --->In redux thunk enable us to avoid direct side effect in our action,action creator ,component.instead
   any impure will be wrapped to thunk.
   so by using thunk all side effect will be running at single point(middleware) in redux loop which allow to make
   rest app relativly pure.pure function and component are easier to manage,test,maintain,resuse
*/
