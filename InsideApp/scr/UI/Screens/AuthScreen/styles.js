import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        height: 40,
        resizeMode: 'contain',
    },
    topContainer: {
        width: '100%',
       flex: 1,
    },
    bottomContainer: {
        width: '100%',
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionContainer: {
        width: '100%',
        flex: 10,
        justifyContent: 'center'
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 36,
        fontWeight: '300',
        color: Colors.primaryBackground
    },
    inputs: {
        height: 52,
        marginVertical: 8
    },
    titleContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'flex-start',
        marginBottom: 20
    },
    buttonContainer: {
        width: '100%',
        height: 80,
        justifyContent: 'flex-end',
    }
})