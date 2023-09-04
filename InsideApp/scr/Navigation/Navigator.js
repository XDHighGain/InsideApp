import { Navigate, NavigateAndClearStack, GoBack } from "./RootOptions"
import { NavigationNameMainScreen } from "../UI/Screens/MainScreen"
import { NavigationNameAuthScreen } from "../UI/Screens/AuthScreen"
import { NavigationNameUserScreen } from "../UI/Screens/UserScreen"
import { NavigationNameChatScreen } from "../UI/Screens/ChatScreen"

export const NavigateToMainScreen = () => {
    NavigateAndClearStack({
        name: NavigationNameMainScreen
    })
}

export const NavigateToAuthScreen = () => {
    NavigateAndClearStack({
        name: NavigationNameAuthScreen
    })
}

export const NavigateToUserScreen = (params) => {
    Navigate({
        name: NavigationNameUserScreen,
        params: params
    })
}

export const NavigateToChatScreen = (params) => {
    Navigate({
        name: NavigationNameChatScreen,
        params: params
    })
}

export const NavigateBack = () => {
    GoBack();
};