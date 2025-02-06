import React from "react";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;
