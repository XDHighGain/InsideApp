import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    switchContainer: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.colorAccent,
        borderRadius: 4,
        flexDirection: 'row',
        elevation: 2
    },
    item: {
        flex: 1,
        margin: 4, 
        borderRadius: 8,
        backgroundColor: 'blue'
    },
    lightItem: {
        flex: 1,
        margin: 4, 
        borderRadius: 4,
        backgroundColor: Colors.contentLayer,
        alignItems: 'center',
        justifyContent: 'center'
    },
    darkItem: {
        flex: 1,
        margin: 4, 
        borderRadius: 4,
        backgroundColor: Colors.primaryBackground,
        alignItems: 'center',
        justifyContent: 'center'
    }
})




