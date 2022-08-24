//import Main.js
import Main from "./Main.js";

//import redux
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";

//axios baseURL config
import axios from "axios";
import { BACKEND_URL } from "@env"


axios.defaults.baseURL = BACKEND_URL || "http://192.168.0.103:3005/api/";


export default function App() {


  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

