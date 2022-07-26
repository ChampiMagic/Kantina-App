import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { DrawerContentScrollView, DrawerItemList  } from "@react-navigation/drawer";


const CustomDrawer = ({...props}) => {
    return (
      <View style={{ flex: 1 }}>
          <DrawerContentScrollView {...props}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', backgroundColor: '#f3f3f3', marginBottom: 20  }}>
              <View>
                <Text>Homero Gazze</Text>
                <Text>homerogazze@gmail.com</Text>
              </View>
              <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" }}/>
            </View>
            <DrawerItemList {...props} /> 
         </DrawerContentScrollView>
         <TouchableOpacity style={{ position: 'absolute', right: 0, left: 0, bottom: 50, backgroundColor: '#f6f6f6', padding: 20 }} >
          <Text>Log out</Text>
         </TouchableOpacity>  
      </View>
  
    )
  }

  export default CustomDrawer;