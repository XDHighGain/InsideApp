import { GetPrefAsync, SetPrefAsync } from "../PrefsManager";

const TOKEN_KEY = 'token_storage_key'

export const SaveToken = async (token) => {
    await SetPrefAsync({
        key: TOKEN_KEY,
        value: JSON.stringify(token)
    })
}

export const GetToken = async () => {
   let token = await GetPrefAsync({
    key: TOKEN_KEY
   }) 
   return JSON.parse(token);
}

export const DeleteToken = async () => {
    await SetPrefAsync({
        key: TOKEN_KEY,
        value: JSON.stringify(null)
    }) 
}