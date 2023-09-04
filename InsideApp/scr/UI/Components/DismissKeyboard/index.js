import React, { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export const DismissKeyboard = ({ children }) => {
    const [isKeyboardOpened, setiSKeyboardOpened] = useState(false);
    useEffect(() => {
        let isSubscribed = true;
        Keyboard.addListener('keyboardDidShow', () => { 
            if(isSubscribed)
            setiSKeyboardOpened(() => true) 
        });
        Keyboard.addListener('keyboardDidHide', () => { 
            if(isSubscribed)
            setiSKeyboardOpened(() => false) 
        });
        return () => {
            Keyboard.removeAllListeners('keyboardDidShow', 'keyboardDidHide');
            isSubscribed = false;
        }
    }, [])

    return (
        <TouchableWithoutFeedback disabled={!isKeyboardOpened} onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )

}