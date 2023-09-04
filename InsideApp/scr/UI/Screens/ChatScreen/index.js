import React, { useState, useEffect, useCallback, useRef, useMemo, useContext } from 'react';
import { Styles as light, StylesDark as dark } from './styles';
import { View, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { Toolbar } from '../../Components/Toolbar';
import { MessageItem } from '../../Components/MessageItem';
import { ThemeContext } from '../../Components/ThemeContext';
import { Images } from '../../../Resources/Images/Images';
import { Colors } from '../../../Resources/Colors';
import { TimeoutManager } from '../../../Utilites/TimeoutManager';
import { OpenSocket } from '../../../Utilites/Networking/WebRequest';
export const NavigationNameChatScreen = 'ChatScreen';

export const ChatScreen = (params) => {
    const [messages, setMessages] = useState([])
    const [userName, setUserName] = useState(null)
    const [topicData, setTopicData] = useState(null)
    const [webSocketInstance, setWebSocketInstance] = useState(null)
    const [initialLoad, setInitialLoad] = useState(true);
    const [inputValue, setInputValue] = useState('')

    const listRef = useRef(null)

    const { theme, setTheme } = useContext(ThemeContext);
    const Styles = useMemo(() => theme == 'light' ? light : dark, [theme])

    useEffect(() => {
        let isSubscribed = true;
        if (isSubscribed) {
            setTopicData(() => params.route.params.data)
            setUserName(() => params.route.params.userName)
        }
        return () => isSubscribed = false;
    }, [])

    useEffect(() => {
        let isSubscribed = true;
        const OpenWebSocket = async () => {
            OpenSocket(setWebSocketInstance)
        }
        if (userName && topicData && webSocketInstance == null && isSubscribed)
            OpenWebSocket();
        return () => isSubscribed = false;
    }, [userName, topicData])

    useEffect(() => {
        let isSubscribed = true;
        if (webSocketInstance && initialLoad && isSubscribed) {
            webSocketInstance.onmessage = (m) => onMessages(m);
            getMessages();
            setInitialLoad(false);
        }
        return () => isSubscribed = false;
    }, [webSocketInstance, initialLoad])

    const sendMessage = (message) => {
        webSocketInstance.send(JSON.stringify({
            "login": toString(userName),
            "topics": Number(topicData.id),
            "message": message
        }))
    }

    const getMessages = useCallback(() => {
        webSocketInstance.send(JSON.stringify({
            "login": toString(userName),
            "topics": Number(topicData.id)
        }))
    }, [webSocketInstance])

    const onMessages = (response) => {
        let message = JSON.parse(response.data);
        if (Object.hasOwn(message, 'result')) {
            if (messages.length == 0)
                setMessages(message.result)
            else
                setMessages(prevMessages => [...prevMessages, ...message.result])
        }
        else {
            setMessages(prevMessages => [...prevMessages, message])
        }
        listRef.current.scrollToEnd()
    }

    const [timeoutByIdle, setTimeoutByIdle] = useState(null)

    useEffect(() => {
        let isSubscribed = true;
        let timer = new TimeoutManager();
        setTimeoutByIdle(timer)
        return () => isSubscribed = false;
    }, [])

    const handlePress = () => {
        handleResetTimeout();
        sendMessage(inputValue);
        getMessages();
        setInputValue('');
    }

    const renderMessages = useCallback((itemModel) => {
        return (<MessageItem key={itemModel.item.id} text={itemModel.item.message} />)
    }, [messages])

    const keyExtractor = item => item?.id;

    const handleInputChange = (value) => {
        setInputValue(value);
        handleResetTimeout();
    }

    const handleResetTimeout = () => {
        if (timeoutByIdle !== null)
            timeoutByIdle.StopTimer();
        setTimeoutByIdle(() => new TimeoutManager());
    }

    const handleBackPress = () => {
        webSocketInstance.close()
        if (timeoutByIdle !== null)
            timeoutByIdle.StopTimer();
    }

    return (
        <View style={Styles.screen}>
            <Toolbar
                onBackPress={handleBackPress}
                backButtonIsActive={true}
                title={topicData?.value} />
            <View style={Styles.contentContainer}>
                <FlatList
                    onScroll={handleResetTimeout}
                    ref={listRef}
                    removeClippedSubviews={true}
                    keyExtractor={keyExtractor}
                    scrollEnabled={true}
                    style={{ flex: 1, marginTop: 12, borderRadius: 100, overflow: 'hidden' }}
                    data={messages}
                    renderItem={renderMessages}>
                </FlatList>
                <View style={Styles.bottomContainer}>
                    <TextInput style={Styles.textInput} value={inputValue} onChangeText={handleInputChange}></TextInput>
                    <TouchableOpacity
                        disabled={inputValue == ''}
                        onPress={handlePress}
                        activeOpacity={0.8}
                        style={[{ opacity: inputValue == '' ? 0.2 : 1 }, Styles.sendButton]}>
                        <Image style={{ resizeMode: 'cover', tintColor: Colors.white, width: '80%', height: '80%' }} source={Images.Icons.send}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}