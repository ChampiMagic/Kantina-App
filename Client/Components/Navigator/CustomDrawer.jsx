import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

//import icons
import { AntDesign } from '@expo/vector-icons';


//Hooks
import useLogOut from "../../Utils/Hooks/useLogOut";
import { useDispatch, useSelector } from "react-redux";
import useIsEmpty from "../../Utils/Hooks/useIsEmpty";


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
                <Text style={{ fontSize: 20, color: '#fff'}}>{user.name}</Text>
                <Text style={{ fontSize: 15, color: '#fff'}}>{user.email}</Text>
                <Text style={{ fontSize: 15, color: '#fff'}}>Yapeyu</Text>
              </View>
              <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: `http://192.168.0.103:3005/api/privateAWS/${user.imageKey}` }}/>
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