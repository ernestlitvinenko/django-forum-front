import { useEffect, useState } from "react"
import { TopicsList } from "../requests/interfaces"
import API from "../requests"
export const useTopicList = () => {
    const [list_topics, setListTopics] = useState<TopicsList[]>([])

    useEffect(() => {
        API.getTopicsList()
        .then(r => setListTopics(r.response))
    }, [])
    return list_topics
}