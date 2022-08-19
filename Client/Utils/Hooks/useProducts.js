import axios from 'axios'
import { Alert } from 'react-native'

const useProducts = async (group, id, name, groups) => {

   let metaData;
   let allGroups;

   
   try {

      if(groups) {
         allGroups = await axios.get(`publicProduct/groups`)
      }
   
      if(id) {
         metaData = await axios.get(`publicProduct/byId?id=${id}`)
      }
   
      else if(name) {
         metaData = await axios.get(`publicProduct/byName?name=${name}`)
      }
   
      else {
         if(!group) group = ""
         metaData = await axios.get(`publicProduct?group=${group}`)
      }
   }catch (err) {
      console.error(err)
      throw { data: [], message: err.message }
   }

   return { data: metaData.data.response, message: metaData.data.message, allGroups: allGroups.data.response }
}


export default useProducts;