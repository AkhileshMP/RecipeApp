import React from 'react';
import type {Node} from 'react'
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import store from "./src/store/configureStore";
import Router from "./src/Router";

const App: () => Node = () => {
  const persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
};

export default App;