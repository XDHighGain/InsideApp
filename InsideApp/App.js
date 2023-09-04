import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationNameAuthScreen, AuthorizationScreen } from './scr/UI/Screens/AuthScreen';
import { MainScreen, NavigationNameMainScreen } from './scr/UI/Screens/MainScreen';
import { navigationRef, isReadyRef } from './scr/Navigation/RootOptions';
import { GetUserData } from './scr/Storage/UserData/UserData';
import { Colors } from './scr/Resources/Colors';
import { UserScreen, NavigationNameUserScreen } from './scr/UI/Screens/UserScreen';
import { ChatScreen, NavigationNameChatScreen } from './scr/UI/Screens/ChatScreen';
import { GetColorTheme } from './scr/Storage/ColorTheme/ColorTheme';
import { ThemeContext } from './scr/UI/Components/ThemeContext';

const Stack = createNativeStackNavigator();

function App() {
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startScreen, setStartScreen] = useState(null);

  const StackNavigator = ({ children }) => <Stack.Navigator initialRouteName={startScreen}>{children}</Stack.Navigator>;

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      setTheme(await GetColorTheme())
      let auth = await GetUserData();
      auth.isAuthorized == true ? setStartScreen(NavigationNameMainScreen) : setStartScreen(NavigationNameAuthScreen)
      setLoading(false)
    }
    fetchData();
    return () => isSubscribed = false;
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundPrimary }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          {!loading &&
            (<StackNavigator>
              <Stack.Screen
                options={{
                  headerShown: false,
                  detachPreviousScreen: true
                }}
                name={NavigationNameAuthScreen}
                component={AuthorizationScreen}>
              </Stack.Screen>
              <Stack.Screen
                options={{
                  headerShown: false,
                  detachPreviousScreen: true
                }}
                name={NavigationNameMainScreen}
                component={MainScreen}>
              </Stack.Screen>
              <Stack.Screen
                options={{
                  headerShown: false,
                  detachPreviousScreen: true
                }}
                name={NavigationNameUserScreen}
                component={UserScreen}></Stack.Screen>
              <Stack.Screen
                options={{
                  headerShown: false,
                  detachPreviousScreen: true
                }}
                name={NavigationNameChatScreen}
                component={ChatScreen}></Stack.Screen>
            </StackNavigator>)}
        </NavigationContainer>
      </ThemeContext.Provider>
    </SafeAreaView>
  );
}

export default App;
