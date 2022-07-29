//import dependencies
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

//impor redux
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";

//import components
import CustomDrawer from "./Components/CustomDrawer.jsx";

//import pages
import Authentication from "./Pages/Authentication.jsx";
import Home from "./Pages/Home.jsx";
import Settings from "./Pages/Settings"
import Shopping from "./Pages/Shopping"
import MyQRcode from "./Pages/MyQRcode"
import Chronogram from "./Pages/Chronogram"






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
          name="Authentication" 
          component={Authentication} 
          />

          <Drawer.Screen 
          name="Settings" 
          component={Settings} 
          />

          <Drawer.Screen 
          name="Shopping" 
          component={Shopping} 
          />

          <Drawer.Screen 
          name="MyQRcode" 
          component={MyQRcode} 
          />

          <Drawer.Screen 
          name="Chronogram" 
          component={Chronogram} 
          />

        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

