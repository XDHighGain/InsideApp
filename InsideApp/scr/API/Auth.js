import { POST } from "../Utilites/Networking/WebRequest"
import { EndPointList } from "../Resources/EndPointList"

export const Login = async ({login, password, onSuccess, onError}) => {
    await POST({
        url: EndPointList.auth,
        params: {
            "login": login,
            "password": password
        },
        onSuccess: onSuccess,
        onError: onError
    })
}