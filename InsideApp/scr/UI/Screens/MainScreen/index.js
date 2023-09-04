import React, { useContext, useMemo } from "react";
import { View, FlatList } from "react-native";
import { Styles as light, StylesDark as dark } from "./styles";
import { Toolbar } from "../../Components/Toolbar";
import { Strings } from "../../../Resources/Strings";
import { MainScreenModel } from "./model";
import { ThemeContext } from "../../Components/ThemeContext";

export const NavigationNameMainScreen = 'MainScreen';

export const MainScreen = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const Styles = useMemo(() => theme == 'light' ? light : dark, [theme])

    const {
        topics,
        userButton,
        renderTopics
    } = MainScreenModel();

    return (
        <View style={Styles.screen}>
            <Toolbar
                rightContent={userButton()}
                title={Strings.topics} />
            <View style={Styles.contentContainer}>
                <FlatList
                    scrollEnabled={true}
                    style={{ flex: 1 }}
                    data={topics}
                    renderItem={renderTopics}>
                </FlatList>
            </View>
        </View>
    )
}