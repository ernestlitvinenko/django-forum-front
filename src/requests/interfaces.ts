export interface TopicsList {
    id: number | null
    topicName: string
    user: string
}

export interface ResponseThread {
    topic: TopicsList
    messages: {user: string, messageText: string}[]
}