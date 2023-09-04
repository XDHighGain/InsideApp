import React, { useEffect, useState, useCallback } from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { Styles } from "./styles";
import { Images } from "../../../Resources/Images/Images";
import { TopicCard } from "../../Components/TopicCard";
import { NavigateToChatScreen } from "../../../Navigation/Navigator";
import { NavigateToUserScreen } from "../../../Navigation/Navigator";
import { GetTopics } from "../../../API/GetTopics";
import { GetUserData } from "../../../Storage/UserData/UserData";

export const MainScreenModel = () => {
    const [topics, setTopics] = useState(null)
    const [userData, setUserData] = useState({
        login: '',
        isAuthorized: false
    });
    let imageIndex = 0;

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
        const fetchTopics = async () => {
            GetTopics({
                onSuccess: async (res) => {
                    let array = objectToArray(JSON.parse(res.request.response));
                    setTopics(array);
                    setUserData(await GetUserData());
                },
                onError: (err) => {
                    console.error(err)
                }
            })
        }
        fetchTopics();
        return () => isSubscribed = false;
    }, [])

    const handleTopicPress = async (item) => {
        NavigateToChatScreen({
            data: item,
            userName: userData.login
        });
    }

    const renderTopics = (itemModel) => {
        imageIndex++;
        if (imageIndex == 5)
            imageIndex = 1;
        return (
            <TopicCard onPress={() => handleTopicPress(itemModel.item)} index={imageIndex} style={{ alignSelf: itemModel.index % 2 == 0 ? 'flex-stars' : 'flex-end' }}>
                <Text style={Styles.cardTitleText}>{itemModel.item.value}</Text>
            </TopicCard>
        )

    }

    const handleUserPress = () => {
        NavigateToUserScreen(userData.login, topics);
    }

    const userButton = () => {
        return (
            <TouchableOpacity
                onPress={handleUserPress}
                style={Styles.userIconContainer}
                activeOpacity={0.8}>
                <Image source={Images.Drawables.userPhoto} style={Styles.userIcon}></Image>
            </TouchableOpacity>
        )
    }
    return ({
        topics,
        userButton,
        renderTopics
    })
}