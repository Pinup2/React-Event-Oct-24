import React from "react";
import AuthPage from "./Components/AuthPage";
import { Provider } from 'react-redux';
import store from './store/createStore';

function App() {
  return (
    <>
    <Provider store={store}>
      <AuthPage />
    </Provider>,
    </>
  );
}

export default App;
