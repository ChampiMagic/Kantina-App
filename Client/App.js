//import Main.js
import Main from "./Main.js";

//import redux
import { store, persistor } from "./Redux/Store.js";
import { Provider } from "react-redux";

//import redux persitor
import { PersistGate } from 'redux-persist/integration/react'

//axios baseURL config
import axios from "axios";
import { BACKEND_URL } from "@env"


axios.defaults.baseURL = BACKEND_URL || "http://192.168.0.103:3005/api/";


export default function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}

