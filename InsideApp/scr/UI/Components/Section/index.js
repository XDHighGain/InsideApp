import { View } from 'react-native'
import { Styles } from './styles'

export const Section = (props) => {
    return(
        <View style={[Styles.mainContainer, props.style]}>
            {props.children}
        </View>
    )
}