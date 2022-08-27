
const HeaderConstructor = async (extra) => {
    
    const config = {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            ...extra,
            'authorization': `Bearer ${await SecureStore.getItemAsync('token')}`,
        }
    }
    
    return config;
}

export default HeaderConstructor;