import React, { useContext, useMemo } from 'react';
import { Styles as light, StylesDark as dark } from './styles';
import { View, Image, Text, Alert } from 'react-native';
import { Toolbar } from '../../Components/Toolbar';
import { Images } from '../../../Resources/Images/Images';
import { ButtonPrimary } from '../../Components/ButtonPrimary';
import { DeleteToken } from '../../../Storage/TokenStorage/TokenStorage';
import { DeleteUserData } from '../../../Storage/UserData/UserData';
import { NavigateToAuthScreen } from '../../../Navigation/Navigator';
import { Strings } from '../../../Resources/Strings';
import { ThemeSwitch } from '../../Components/ThemeSwitch';
import { ThemeContext } from '../../Components/ThemeContext';
import { GetStats } from '../../../API/Statistics';

export const NavigationNameUserScreen = 'UserScreen';

export const UserScreen = (params) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const Styles = useMemo(() => theme == 'light' ? light : dark, [theme])

    const {
        topics,
        messagesCount
    } = GetStats();

    const onApplyExit = () => {
        DeleteToken();
        DeleteUserData();
        NavigateToAuthScreen();
    }


    const onExitPress = () => {
        Alert.alert(Strings.exit, Strings.leaveApp, [
            {
                text: Strings.cancel,
                style: 'cancel'
            },
            {
                text: Strings.exit,
                onPress: onApplyExit
            }
        ])
    }

    return (
        <View style={Styles.screen}>
            <Toolbar
                backButtonIsActive={true}
                title={Strings.settings} />
            <View style={Styles.contentContainer}>
                <View style={Styles.infoContainer}>
                    <View style={{
                        marginTop: 32,
                        alignContent: 'center',
                        flexDirection: 'row',
                        width: '100%'
                    }}>
                        <View style={Styles.userIconContainer}>
                            <Image style={Styles.userIcon} source={Images.Drawables.userPhoto} />
                        </View>
                        <View style={[Styles.userNameContainer, { flex: 1, justifyContent: 'center', alignItems: 'flex-start' }]}>
                            <Text style={Styles.userName} >
                                {params.route.params}
                            </Text>
                            <Text style={Styles.userMail} >
                                {Strings.userMail}
                            </Text>
                        </View>
                    </View>
                    <View style={Styles.statsContainer}>
                        <View style={Styles.statsItem}>
                            <Text style={Styles.statsTitle}>{Strings.topicsCount}</Text>
                            <Text style={Styles.statsText}>{topics !== null && topics.length}</Text>
                        </View>
                        <View style={Styles.statsItem}>
                            <Text style={Styles.statsTitle}>{Strings.messagesCount}</Text>
                            <Text style={Styles.statsText}>{messagesCount}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', alignContent: 'flex-start' }}>
                        <Text style={Styles.themeTitle}>{Strings.themeSwitch}</Text>
                    </View>
                    <ThemeSwitch />
                </View>
                <ButtonPrimary buttonStyle={Styles.exitButton} onPress={onExitPress} title={Strings.exit}></ButtonPrimary>
            </View>
        </View>
    )
}