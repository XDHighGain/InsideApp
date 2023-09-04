import { View, TouchableOpacity, Text } from 'react-native'
import { Styles } from './styles'

export const ButtonPrimary = ({ title, onPress, titleStyle, buttonStyle, disabled}) => {

    const handlePress = () => { 
        if(onPress)
            onPress();
    }
    return(
        <TouchableOpacity 
        disabled={disabled} 
        onPress={handlePress}  
        activeOpacity={0.8} 
        style={[disabled === true? Styles.buttonInactive : Styles.buttonActive, buttonStyle]}>
           <Text style={[Styles.buttonTitle, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}