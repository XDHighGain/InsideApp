import React from 'react';
import { Styles } from './styles';
import { View, Image, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import { Images } from '../../../Resources/Images/Images';
import { Section } from '../../Components/Section';
import { ButtonPrimary } from '../../Components/ButtonPrimary';
import AuthorizationInput from '../../Components/AuthorizationInput';
import { DismissKeyboard } from '../../Components/DismissKeyboard';
import { Strings } from '../../../Resources/Strings';
import { AuthScreenModel } from './model';

export const NavigationNameAuthScreen = 'AuthorizationScreen';

export const AuthorizationScreen = () => {
    const {
        login,
        setLogin,
        password,
        setPassword,
        buttonIsActive,
        handleLogin
    } = AuthScreenModel()

    return (
        <ImageBackground source={Images.Drawables.authBackground} style={Styles.screen}>
            <DismissKeyboard style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
                    <View style={Styles.topContainer} />
                    <View style={Styles.sectionContainer}>
                        <KeyboardAvoidingView behavior='padding' style={{ flex: 1, width: '100%', justifyContent: 'center' }} >
                            <Section>
                                <View style={Styles.titleContainer}>
                                    <Text style={Styles.titleText}>{Strings.insideApp}</Text>
                                </View>
                                <AuthorizationInput
                                    onChange={value => setLogin(value)}
                                    style={Styles.inputs}
                                    label={Strings.login}
                                    value={login} />
                                <AuthorizationInput
                                    hideValue={true}
                                    onChange={value => setPassword(value)}
                                    style={Styles.inputs}
                                    label={Strings.password}
                                    value={password} />
                                <View style={Styles.buttonContainer}>
                                    <ButtonPrimary
                                        disabled={!buttonIsActive}
                                        onPress={handleLogin}
                                        title={Strings.enter} />
                                </View>
                            </Section>
                        </KeyboardAvoidingView>
                    </View>
                    <View style={Styles.bottomContainer}>
                        <Image style={Styles.logo} source={Images.Drawables.logo}></Image>
                    </View>
                </View>
            </DismissKeyboard>
        </ImageBackground>
    )
}