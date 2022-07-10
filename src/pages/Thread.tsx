import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {ResponseThread} from "../requests/interfaces";
import API from "../requests";

const Thread = () => {
    let { thread_id } = useParams();
    const [threadData, setThreadData] = useState<ResponseThread>({
        topic: {
            id: 0,
            topicName: "",
            user: "",
        },
        messages: []
    });

    useEffect(() => {
        return () => {
            if (!thread_id) {
                window.location.href="/";
                return
            }
            API.getThread(+thread_id).then(
                r => setThreadData(r)
            )
        };
    }, [thread_id]);

    return (
        <section className={'thread'}>
            <h2 className="thread__title">{threadData.topic.topicName}</h2>
            <span className="thread__author">{threadData.topic.user}</span>

            <h3>Сообщения</h3>

            {threadData.messages.map(elem => (
                <div className="thread__message">
                    <h4 className="thread__message-title">{elem.user}</h4>
                    <span className="thread__message-text">{elem.messageText}</span>
                </div>
            ))}

        </section>
    )
}

export default Thread;
