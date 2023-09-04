import axios from 'axios'
import { GetToken } from '../../Storage/TokenStorage/TokenStorage';
import { EndPointList } from '../../Resources/EndPointList';

const BaseUrl = "http://10.0.2.2:8008";

const executeFetch = async ({ url, method, params, onSuccess, onError }) => {
  try {
    let response = await axios({
      method: method,
      url: BaseUrl + url,
      data: params
    })
    if (onSuccess)
      onSuccess(response)
    return response;
  }
  catch (e) {
    if (onError)
      onError(e)
    else
      console.error(e)
  }
}

export const POST = async ({ url, params, onSuccess, onError }) => {
  return await executeFetch({
    url: url,
    method: 'POST',
    params: params,
    onSuccess: onSuccess,
    onError: onError
  })
}

export const GET = async ({ url, params, onSuccess, onError }) => {
  return await executeFetch({
    url: url,
    method: 'GET',
    params: params,
    onSuccess: onSuccess,
    onError: onError
  })
}

//открываем сокет и заключаем его в стейт
export const OpenSocket = async (setWSInstance) => {
  let token = await GetToken();
  let options = {
    "headers": {
      "cookie": `token=${token}`
    }
  }
  let ws = new WebSocket(
    BaseUrl + EndPointList.chat,
    null,
    options
  )
  ws.onopen = () => {
    setWSInstance(ws)
  }
}
