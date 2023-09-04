import AsyncStorage from '@react-native-async-storage/async-storage';

export const SetPrefAsync = async ({ key, value, callback }) => {
    try {
        await AsyncStorage.setItem(
            key, String(value), callback
        );
    }
    catch (error) {
        console.error(error);
    }
};

export const GetPrefAsync = async ({ key }) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    }
    catch (error) {
        console.error(error);
    }
};

export const RemovePrefAsync = async ({ key }) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null)
            await AsyncStorage.removeItem(key);
    }
    catch (error) {
        console.error(error);
    }
};