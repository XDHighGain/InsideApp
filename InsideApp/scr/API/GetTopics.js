import { GET } from "../Utilites/Networking/WebRequest"
import { EndPointList } from "../Resources/EndPointList"
import { GetUserData } from "../Storage/UserData/UserData"
import { GetToken } from "../Storage/TokenStorage/TokenStorage"

export const GetTopics = async ({ onSuccess, onError }) => {
    let token = await GetToken();
    let userData = await GetUserData();
    await GET({
        url: `${EndPointList.topics}?login=${userData.login}&token=${token}`,
        onSuccess: (res) => {
            if (onSuccess)
                onSuccess(res)
        },
        onError: (err) => {
            if (onError)
                onError(err)
        }
    })
}
