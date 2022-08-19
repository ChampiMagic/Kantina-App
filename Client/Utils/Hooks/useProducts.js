import axios from 'axios'
import { Alert } from 'react-native'

const useProducts = async (group, id) => {

   if(!id) id = ""
   if(!group) group= ""

    const metaData = await axios.get(`publicProduct?id=${id}&group=${group}`)

    return metaData.data
    
    /*const body = {id, group}

        axios.get('http://192.168.0.103:/api/publicProduct', body)
         .then(Products => {
            console.log(Products)
            return [...Products]
         }).catch(err => {
            console.log("error")
            console.error(err)
            Alert.alert("Something went wrong", "error Hook GetProducts")
         })*/
         
}


export default useProducts;