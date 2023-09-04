import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    messageContainer: {
        justifyContent: 'center',
        alignSelf: 'flex-start',
        backgroundColor: Colors.color3,
        borderRadius: 42,
        elevation: 2,
        padding: 8,
        margin: 8,
        width: null,
        height: null,
    },
    messageText: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.white,
    }
})