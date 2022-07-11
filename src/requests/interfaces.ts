export interface TopicsList {
    id: number | null
    topicName: string
    user: string
}

export interface ResponseThread {
    topic: TopicsList
    messages: {user: string, messageText: string}[]
}

export interface ResponseLogin {
    refresh?: string
    access?: string
    detail?: string
}

export interface ResponseVerify {
    detail?: string
    code?: string
}

export interface Response<T> {
    ok: boolean
    response : T
}

export interface TokenRefreshResponse {
    access: string
}