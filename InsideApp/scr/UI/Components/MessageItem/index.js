import { View, TouchableOpacity, Text } from 'react-native'
import { Styles } from './styles'

export const MessageItem = ({ text }) => {


    return (
        <View style={Styles.messageContainer}>
            <Text style={Styles.messageText}>{text}</Text>
        </View>
    )
}