import { GetPrefAsync, SetPrefAsync } from "../PrefsManager";

const COLOR_KEY = 'color_storage_key'

export const SaveColorTheme = async (theme) => {
    if (theme == 'light' || theme == 'dark')
        await SetPrefAsync({
            key: COLOR_KEY,
            value: JSON.stringify(theme)
        })
}

export const GetColorTheme = async () => {
    let theme = await GetPrefAsync({
        key: COLOR_KEY
    })
    if (theme == null)
        return 'light';
    return JSON.parse(theme);
}
