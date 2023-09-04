import {StyleSheet} from "react-native";
import { Colors } from "../../../Resources/Colors";

export const Styles = StyleSheet.create({
    buttonActive: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.buttonColor,
        borderRadius: 12,
        elevation: 2,
        width: '100%',
    },
    buttonInactive: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.color3,
        borderRadius: 12,
        elevation: 2,
        width: '100%',
        opacity: 0.5
    },
    buttonTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.white
    }
})