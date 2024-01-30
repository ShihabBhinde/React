const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  }
  console.log("Reducer called", action);
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);
store.dispatch({ type: "INCREMENT" });
