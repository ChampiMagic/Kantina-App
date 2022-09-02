//import hooks
import React, { useState, useEffect } from 'react';
import useGetUser from '../Utils/Hooks/useGetUser';

//import components
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ErrorText from '../Components/Others/ErrorText'
import Presentation from '../Components/ScanQrPage/presentation';

const ScanQR = () => {
    
    const [hasPermission, setHasPermission] = useState(null);
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
  
    const handleBarCodeScanned = async (obj) => {
      
      const {data, error} = await useGetUser(obj.data)

      setError(error)
      setUserData(data)

    };

    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
  
      getBarCodeScannerPermissions();
    }, []);


    if (hasPermission === false) {
      return <ErrorText style={{flex: 1, alignSelf: 'center'}}>No access to camera</ErrorText>;
    }

    if(error) {
      return <ErrorText>{error}</ErrorText>
    }

    if(userData) {
      
      return  (<Presentation user={userData} />)
    }

   
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scann a QR code</Text>
        {hasPermission === null?

        <ActivityIndicator style={styles.loading} size={150} color="#00ff00" />

        :
        <View style={styles.scannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={userData? undefined : handleBarCodeScanned}
            style={styles.scanner}
          />
        </View>
        }
      
      </View>
    );
}

export default ScanQR;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 40,
      fontWeight: '300'
    },
    scannerContainer: {
      width: '80%'
    },
    scanner: {
      width: '100%',
      height: 400
    },
    loading: {
      alignSelf: 'center',
      paddingVertical: 100
    },
  });