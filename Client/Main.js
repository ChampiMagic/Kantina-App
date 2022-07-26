//import dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";


//import hooks
import React from "react";
import useIsEmpty from "./Utils/Hooks/useIsEmpty.js";
import { useSelector } from "react-redux";

//import components
import CustomDrawer from "./Components/Navigator/CustomDrawer.jsx";
import HeaderCartButton from './Components/Navigator/HeaderCartButton.jsx';

//import pages
import Authentication from "./Pages/Authentication.jsx";
import Home from "./Pages/Home.jsx";
import Settings from "./Pages/Settings"
import Shopping from "./Pages/Shopping"
import MyQRcode from "./Pages/MyQRcode"
import Chronogram from "./Pages/Chronogram"
import MyCart from './Pages/MyCart.jsx';
import ScanQR from './Pages/ScanQR.jsx';
import PaymentGateway from './Pages/PaymentGateway.jsx';

//import icons
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 



//Initialize Navigators
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



export default function Main() {

  const user = useSelector(state => state.userController.user)
   

  return (
      <NavigationContainer>
        {useIsEmpty(user) ?
          <Stack.Navigator>
            <Stack.Screen 
                    name="Authentication" 
                    component={Authentication} 
                    options={{
                        drawerIcon: ({color}) => (
                        <AntDesign name="login" size={24} color={color} />
                    ),
                    headerShown: false
                    }}
                    />
          </Stack.Navigator>
        :
          <Drawer.Navigator 
            screenOptions={{ 
              headerTransparent: false,
              headerTitle: 'Kantina',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#90EE90'
              },
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: '500'
              },
              drawerActiveBackgroundColor: '#79d979',
              drawerInactiveTintColor: '#333',
              drawerActiveTintColor: '#fff',
              drawerLabelStyle: {
                marginLeft: -25,
                fontSize: 15
              }
              }} 
              drawerContent={(props) => <CustomDrawer  {...props} />}
          >
                <Drawer.Screen 
                name="Home" 
                component={Home}
                options={{
                drawerIcon: ({color}) => (
                    <AntDesign name="home" size={24} color={color} />
                ),
                headerTransparent: true,
                headerTitle: ""
                }}
                />

                <Drawer.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                drawerIcon: ({color}) => (
                    <AntDesign name="setting" size={24} color={color} />
                )}}
                />

                <Drawer.Screen 
                name="Shopping" 
                component={Shopping} 
                options = {({navigation}) => ({
                drawerIcon: ({color}) => (
                  <Entypo name="shop" size={24} color={color} />
                ),
                headerRight: ({color}) => (
                  <HeaderCartButton navigation={navigation} color={color}/>
                )
                })}
                />

                <Drawer.Screen 
                name="MyCart" 
                component={MyCart} 
                options={{
                drawerIcon: ({color}) => (
                    <AntDesign name="shoppingcart" size={24} color={color} />
                )
                }}
                />

                {user.isStudent?

                  <Drawer.Screen 
                  name="MyQRcode" 
                  component={MyQRcode} 
                  options={{
                  drawerIcon: ({color}) => (
                      <AntDesign name="qrcode" size={24} color={color} />
                  )
                  }}
                  />
                :
                  <Drawer.Screen 
                  name="ScanQR" 
                  component={ScanQR} 
                  options={{
                  drawerIcon: ({color}) => (
                      <AntDesign name="qrcode" size={24} color={color} />
                  )
                  }}
                  />

                }
               

                <Drawer.Screen 
                name="Chronogram" 
                component={Chronogram} 
                options={{
                drawerIcon: ({color}) => (
                    <AntDesign name="calendar" size={24} color={color} />
                )
                }}
                />

                <Drawer.Screen 
                name="PaymentGateway" 
                component={PaymentGateway} 
                options={{
                 drawerItemStyle: {display: 'none'}
                }}
          
                />
          </Drawer.Navigator>
        }
      </NavigationContainer>
  )
}

