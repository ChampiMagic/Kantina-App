import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./Components/CustomDrawer.jsx";
import Authentication from "./Pages/Authentication.jsx";
import Home from "./Pages/Home.jsx";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";



const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator 
        screenOptions={{ 
          headerStyle: { 
            elevation: 0, 
            shadowOpacity: 0 
          }, 
          headerTransparent: true,
          headerTitle: '' 
        }} 
        drawerContent={(props) => <CustomDrawer  {...props} />}>
          
          <Drawer.Screen 
          name="Home" 
          component={Home} 
          />

          <Drawer.Screen 
          name="Register" 
          component={Authentication} 
          />

        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

