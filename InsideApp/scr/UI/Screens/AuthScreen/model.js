import React, {useState} from 'react';
import {Alert} from 'react-native'
import { Login } from '../../../API/Auth';
import { decode as base64_decode, encode as base64_encode } from 'base-64';
import { NavigateToMainScreen } from '../../../Navigation/Navigator';
import { SaveToken } from '../../../Storage/TokenStorage/TokenStorage';
import { SaveUserData } from '../../../Storage/UserData/UserData';

export const AuthScreenModel = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const [buttonIsActive, setButtonIsActive] = useState(true);

    const handleLogin = async () => {
        setButtonIsActive(false)
        await Login({
            login: base64_encode(login),
            password: base64_encode(password),
            onSuccess: async (response) => {
                if(response.status === 200)
                {
                    await SaveToken(response.data);
                    await SaveUserData({
                        login: login,
                        isAuthorized: true
                    })
                    NavigateToMainScreen();
                }
            },
            onError: () => {
                Alert.alert('Ошибка авторизации', 'Проверьте правильность данных')
                setButtonIsActive(true)
            }
        })
    }

    return ({
        login,
        setLogin,
        password,
        setPassword,
        buttonIsActive,
        handleLogin
    })
}