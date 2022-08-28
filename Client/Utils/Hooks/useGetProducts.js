//import dependencies
import axios from 'axios'

//import constructor
import HeaderConstructor from '../Constructors/HeaderConstructor.js';

const useGetProducts = async (group, id, name, filters) => {

   let response;
   let allGroups = null;

   const config = await HeaderConstructor()

   
   try {

      if(filters) {
         const meteData  = await axios.get(`privateProduct/groups`, config)
         allGroups = meteData.data.response.groups
      }
   
      if(id) {
         const metaData = await axios.get(`privateProduct/byId?id=${id}`, config)
         response = metaData.data.response
      }
   
      else if(name) {
         const metaData = await axios.get(`privateProduct/byName?name=${name}`, config)
         response = metaData.data.response
      }
   
      else {
         if(!group) group = ""
         const metaData = await axios.get(`privateProduct?group=${group}`, config)
         response = metaData.data.response
      }
   }catch (err) {

      return { data: [], message: null , allGroups: null, error:  err.message}
   }

   return { data: response.products , message: response.message, allGroups: allGroups,  error: null}
}


export default useGetProducts;