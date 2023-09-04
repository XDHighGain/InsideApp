import { GetPrefAsync, SetPrefAsync } from "../PrefsManager";

const USER_DATA_KEY = 'user_data_key'

export const SaveUserData = async (data) => {
    await SetPrefAsync({
        key: USER_DATA_KEY,
        value: JSON.stringify(data)
    })
}

export const GetUserData = async () => {
    let data = await GetPrefAsync({
        key: USER_DATA_KEY
    })
    console.log('2', typeof (data), data == null)
    if (data == null) {
        console.log('1')
        return {
            isAuthorized: false,
            login: null
        }
    }

    return JSON.parse(data);
}

export const DeleteUserData = async () => {
    await SetPrefAsync({
        key: USER_DATA_KEY,
        value: JSON.stringify({
            isAuthorized: false,
            login: null
        })
    })
}