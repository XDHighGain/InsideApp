import {StyleSheet} from "react-native";
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
        padding: 16,
        width: '100%',
        justifyContent: 'space-between',
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
    userIconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    userIcon: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    userNameContainer: {
        marginHorizontal: 32,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userName: {
        fontSize: 32,
        color: Colors.textDark
    },
    userMail: {
        fontSize: 14,
        color: Colors.textDark,
        fontWeight: '200'
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
    cardTitleText: {
        fontSize: 18,
        color: Colors.contentLayer,
        fontWeight: '300'
    },
    exitButton: {
        backgroundColor: Colors.negative
    },
    themeTitle: {
        color: Colors.textDark,
        marginBottom: 8,
        marginTop: 24,
    },
    infoContainer: {
        flex: 1, 
        alignItems: 'center', 
    },
    statsTitle: {
        fontSize: 16,
        color: Colors.textDark,
        fontWeight: '400'
    },
    statsText: {
        fontSize: 16,
        color: Colors.textDark,
        fontWeight: '300'
    },
    statsContainer: {
        marginTop: 44, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    },
    statsItem: {
        height: '100%', 
        width: 100, 
        flexDirection: 'column', 
        alignItems: 'center'
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
        padding: 16,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: ColorsDark.contentLayer,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        elevation: 2,
    },
    userIconContainer: {
        justifyContent: 'center',
        alignItems: 'center', 
    }, 
    userIcon: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    userNameContainer: {
        marginHorizontal: 32,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userName: {
        fontSize: 32,
        color: ColorsDark.textLight
    },
    userMail: {
        fontSize: 14,
        color: ColorsDark.textLight,
        fontWeight: '300'
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
    cardTitleText: {
        fontSize: 18,
        color: ColorsDark.contentLayer,
        fontWeight: '300'
    },
    exitButton: {
        backgroundColor: ColorsDark.negative
    },
    themeTitle: {
        color: ColorsDark.textLight,
        marginBottom: 8,
        marginTop: 24,
    },
    infoContainer: {
        flex: 1, 
        alignItems: 'center', 
    },
    statsTitle: {
        fontSize: 16,
        color: ColorsDark.textLight,
        fontWeight: '400'
    },
    statsText: {
        fontSize: 16,
        color: ColorsDark.textLight,
        fontWeight: '300'
    },
    statsContainer: {
        marginTop: 44, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    },
    statsItem: {
        height: '100%', 
        width: 100, 
        flexDirection: 'column', 
        alignItems: 'center'
    }
})