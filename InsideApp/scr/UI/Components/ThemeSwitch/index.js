import React, {useState, useEffect, useContext} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Styles } from './styles'
import { GetColorTheme, SaveColorTheme } from '../../../Storage/ColorTheme/ColorTheme'
import { Colors } from '../../../Resources/Colors'
import { ThemeContext } from '../ThemeContext'

export const ThemeSwitch = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const [currentTheme, setCurrentTheme] = useState(null)
    useEffect(() => {
        const fetchTheme = async () => {
            let theme = await GetColorTheme();
            setCurrentTheme(theme);
        }
        fetchTheme();
    }, [])

    const handleThemeSwitch = async (value) => {
        if(value !== currentTheme)
        {
            await SaveColorTheme(value)
            setCurrentTheme(value)
            setTheme(value);
        }
            
    }

    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.switchContainer}>
            <TouchableOpacity 
            onPress={() => handleThemeSwitch('light')} 
            style={[Styles.lightItem, {opacity: currentTheme === 'light'? 1 : 0.2}]}>
                <Text style={{color: Colors.backgroundPrimary}}>Светлая</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => handleThemeSwitch('dark')} 
            style={[Styles.darkItem, {opacity: currentTheme === 'dark'? 1 : 0.2}]}>
                <Text style={{color: Colors.white}}>Темная</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}