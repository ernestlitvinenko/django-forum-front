import {API_URLS, AvailableMethods, FetchMethods} from "./enums";
import {TopicsList, ResponseThread} from "./interfaces";

class ForumAPI {
    BASE_URL = API_URLS.BASE_URL

    async get({method, params }: { method: AvailableMethods, params: object | null }) {
        let parsedParams: string = "?";
        if (params) {
            for (let paramsKey in params) {
                // @ts-ignore
                parsedParams += `${paramsKey}=${params[paramsKey]}`
            }
        }

        const response = await fetch(`${this.BASE_URL}/${method}${parsedParams}`)

        return await response.json()

    }

    async post({method, data} : {method: AvailableMethods, data: Object}) {
        const response = await fetch(`${this.BASE_URL}/${method}`, {
            method: FetchMethods.POST,

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }

    async getTopicsList() : Promise<TopicsList[]>{
        return await this.get({method: AvailableMethods.GetTopicList, params: null})
    }

    async getThread(thread_id: number): Promise<ResponseThread> {
        return await this.get({method: AvailableMethods.GetThread, params: {idx: thread_id}})
    }
}

export default new ForumAPI()
