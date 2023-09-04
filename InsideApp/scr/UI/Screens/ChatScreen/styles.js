import { StyleSheet } from "react-native";
import { Colors, ColorsDark } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.primaryBackground,
    },
    toolbarContainer: {
        height: 80,
        width: '100%',
        flexDirection: 'row'
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.contentLayer,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        elevation: 10,
        shadowOpacity: 1,
        shadowColor: 'white',
        shadowRadius: 101,
        shadowOffset: {
            width: 0,
            height: 100
        },
    },
    titleText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 32
    },
    bottomContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 64,
        paddingVertical: 8,
        backgroundColor: Colors.primaryBackground
    },
    sendButton: {
        borderRadius: 100,
        width: 50,
        height: 50,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: Colors.contentLayer,
        flex: 1,
        marginHorizontal: 8,
        borderRadius: 100,
        elevation: 2,
        paddingHorizontal: 16
    }
})


export const StylesDark = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: ColorsDark.primaryBackground,
    },
    toolbarContainer: {
        height: 80,
        width: '100%',
        flexDirection: 'row'
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: ColorsDark.contentLayer,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        elevation: 2,
    },
    titleText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 32
    },
    bottomContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 64,
        paddingVertical: 8,
        backgroundColor: ColorsDark.bottomInputContainer
    },
    sendButton: {
        borderRadius: 100,
        width: 50,
        height: 50,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: ColorsDark.secondary,
        flex: 1,
        marginHorizontal: 8,
        borderRadius: 100,
        elevation: 2,
        paddingHorizontal: 16
    }
})