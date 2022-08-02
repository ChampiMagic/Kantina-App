import { View, StatusBar, StyleSheet, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import ShoppingCard from "../Components/ShoppingCard";

const shoppinData = [
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        URI: "https://images.unsplash.com/photo-1606757389723-23c4bf501fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
]


const Shopping = ({ navigation }) => {

    
    return (
        <View style={{ flex: 1, paddingVertical: 10, backgroundColor: '#fff' }}>
             <StatusBar
            animated={true}
            barStyle='light-content'
            backgroundColor="rgba(0, 0, 0, 0.07)"
            translucent={true}
            />
            <FlatList 
            data={shoppinData}
            renderItem={({item}) => <ShoppingCard URI={item.URI}/>}
            numColumns={2}
            columnWrapperStyle={styles.container}
            />
        </View>    
    )
}

export default Shopping;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})