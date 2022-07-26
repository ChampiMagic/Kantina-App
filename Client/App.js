import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./Components/CustomDrawer.jsx";
import Authentication from "./Pages/Authentication.jsx";
import Home from "./Pages/Home.jsx";


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      screenOptions={{ 
        headerStyle: { 
          backgroundColor: 'trasparent', 
          elevation: 0, shadowOpacity: 0 }, 
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
  )
}

