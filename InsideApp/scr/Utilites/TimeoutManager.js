import { NavigateBack } from "../Navigation/Navigator";

//получаем экземпляр таймаута, который при необходимости закрываем и создаем новый
export class TimeoutManager {
    constructor() {
        this.timer = setTimeout(() => NavigateBack(), 3 * 60 * 1000)
        return this.timer;
    }

    StopTimer() {
        clearTimeout(this.timer)
    }
}