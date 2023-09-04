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
    topicCard: {
        width: '70%', 
        height: 120,  
        marginVertical: 32,
        marginHorizontal: 16, 
        elevation: 3
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
    userIconContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 16
    },
    userIcon: {
        width: 50,
        height: 50,
        borderRadius: 100,
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
    topicCard: {
        width: '70%', 
        height: 120,  
        marginVertical: 32,
        marginHorizontal: 16, 
        elevation: 3
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
    userIconContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 16
    },
    userIcon: {
        width: 50,
        height: 50,
        borderRadius: 100,
    }
})

