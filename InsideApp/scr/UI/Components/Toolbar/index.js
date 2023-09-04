import { View, Text, TouchableOpacity, Image } from "react-native"
import { Styles } from "./styles"
import { Images } from "../../../Resources/Images/Images"
import { NavigateBack } from "../../../Navigation/Navigator"

export const Toolbar = ({ backButtonIsActive, title, rightContent, onBackPress }) => {

    const handleBackPress = () => {
        if (onBackPress)
            onBackPress();
        NavigateBack()
    }

    return (
        <View style={Styles.toolbarContainer}>
            <View style={Styles.backButtonContainer}>
                {backButtonIsActive &&
                    <TouchableOpacity onPress={handleBackPress} activeOpacity={0.8} style={Styles.backButton}>
                        <Image style={{ width: 20, height: 20, resizeMode: 'center', tintColor: 'white' }} source={Images.Icons.back}></Image>
                    </TouchableOpacity>
                }
            </View>
            <View style={Styles.titleContainer}>
                <Text style={Styles.titleText}>{title}</Text>
            </View>
            <View style={Styles.rightContent}>
                {rightContent}
            </View>
        </View>
    )
}