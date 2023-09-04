import { Styles } from "./styles";
import { TouchableOpacity, ImageBackground } from 'react-native'
import { Images } from "../../../Resources/Images/Images";

export const TopicCard = (props) => {

    const handlePress = () => {
        if (props.onPress)
            props.onPress()
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
            style={[Styles.topicCard, props.style]}>
            <ImageBackground
                resizeMode='cover'
                style={{ flex: 1, padding: 16 }}
                imageStyle={{ borderRadius: 16 }}
                source={Images.Drawables['card' + props.index]}>
                {props.children}
            </ImageBackground>
        </TouchableOpacity>
    )
}
