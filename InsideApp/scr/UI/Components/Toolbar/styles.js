import { StyleSheet } from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    toolbarContainer: {
        height: 80,
        width: '100%',
        flexDirection: 'row'
    },
    backButtonContainer: {
        height: '100%',
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
    },
    backButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: Colors.white,
        fontSize: 22,
        fontWeight: '300',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
    },
    rightContent: {
        height: '100%',
        width: 100,
    }
})