import { useState, useEffect, useCallback } from 'react';
import { GetToken } from '../Storage/TokenStorage/TokenStorage';
import { GetTopics } from './GetTopics';

//компонент собирает инфу о количестве топиков и сообщений
export const GetStats = () => {
    const [messagesCount, setMessages] = useState(0)
    const [topics, setTopics] = useState(null)
    const [webSocketInstance, setWebSocketInstance] = useState(null)
    const [initialLoad, setInitialLoad] = useState(true);

    const objectToArray = (obj) => {
        let keys = Object.keys(obj.result.topics)
        let arrayOfTopics = []
        keys.forEach(key => {
            arrayOfTopics.push({
                id: key,
                value: obj.result.topics[key]
            })
        })
        return arrayOfTopics;
    }

    useEffect(() => {
        let isSubscribed = true;
        const fetchData = async () => {
            await GetTopics({
                onSuccess: (res) => {
                    let array = objectToArray(JSON.parse(res.request.response));
                    setTopics(array);
                }
            })
        }
        fetchData();
        return () => isSubscribed = false;
    }, [])

    useEffect(() => {
        let isSubscribed = true;
        const OpenWebSocket = async () => {

            let token = await GetToken();
            let options = {
                "headers": {
                    "cookie": `token=${token}`
                }
            }
            let ws = new WebSocket(
                "ws://10.0.2.2:8008/chat",
                null,
                options
            )
            ws.onopen = () => {
                setWebSocketInstance(ws)
            }
        }
        if (webSocketInstance == null && isSubscribed)
            OpenWebSocket();
        return () => isSubscribed = false;
    }, [])

    useEffect(() => {
        let isSubscribed = true;
        if (webSocketInstance && initialLoad && isSubscribed && topics) {
            webSocketInstance.onmessage = (m) => onMessages(m);
            getAllMessages(topics);
            setInitialLoad(false);
        }
        return () => isSubscribed = false;
    }, [webSocketInstance, initialLoad, topics])


    const getAllMessages = useCallback((topics) => {
        topics.forEach(topic => {
            webSocketInstance.send(JSON.stringify({
                "login": 'name',
                "topics": Number(topic.id)
            }))
        });
    }, [webSocketInstance])

    const onMessages = (response) => {
        let messages = JSON.parse(response.data);
        if (Object.hasOwn(messages, 'result'))
            setMessages(prevMessages => prevMessages + messages.result.length)
    }

    return ({
        topics,
        messagesCount
    })
}