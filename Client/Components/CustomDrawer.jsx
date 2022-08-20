import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons';


//Hooks
import useLogOut from "../Utils/Hooks/useLogOut";
import { useDispatch, useSelector } from "react-redux";
import useIsEmpty from "../Utils/Hooks/useIsEmpty";


const CustomDrawer = ({...props}) => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.userController.user)

    return (
      <View style={{ flex: 1 }}>
          <DrawerContentScrollView 
          {...props}
          contentContainerStyle={{ backgroundColor: '#90EE90'}}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 20, color: '#fff'}}>Homero Gazze</Text>
                <Text style={{ fontSize: 15, color: '#fff'}}>homerogazze@gmail.com</Text>
                <Text style={{ fontSize: 15, color: '#fff'}}>Yapeyu</Text>
              </View>
              <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" }}/>
            </View>

            <View style={{ backgroundColor: '#fff', paddingTop: 20 }}>
              <DrawerItemList {...props} />   
            </View>
           
         </DrawerContentScrollView>

         <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>

          {
            useIsEmpty(user)?
            null
            :
            <TouchableOpacity style={{ paddingVertical: 15, flexDirection:'row', alignItems: 'center' }}  onPress={() => useLogOut(dispatch)}>
            <AntDesign name="logout" size={24} color="black" />
            <Text
            style={{
              marginLeft: 15,
            }}
            >Log out</Text>
            </TouchableOpacity>  
          }

          <TouchableOpacity style={{ paddingVertical: 15, flexDirection:'row', alignItems: 'center' }} >
          <AntDesign name="sharealt" size={24} color="black" />
          <Text
          style={{
            marginLeft: 15,
          }}
          >Share</Text>
          </TouchableOpacity>  

         </View>
      
      </View>
  
    )
  }

  export default CustomDrawer;