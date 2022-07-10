import React, {useEffect, useState} from "react";
import '../../assets/scss/categories.scss';
import Category from "./category";
// import {TopicsList} from "../../requests/interfaces";
import API from "../../requests"
import {TopicsList} from "../../requests/interfaces";

// const list_topics = API.getTopicsList().map(elem => <Category title={elem.topicName} key={elem.topicName}/>)

const Categories: React.FunctionComponent = () => {
    const [list_topics, set_list_topics] = useState<TopicsList[]>([])

    useEffect(() => {
        API.getTopicsList().then(
            r => {
                set_list_topics(r)
            }
        )
    }, []);

    return (<section className="categories">
            <h2 className="categories__title">Категории</h2>
            <div className="categories__wrapper">
                {list_topics.map(elem => <Category title={elem.topicName} author={elem.user} id={elem.id} key={elem.topicName}/>)}
            </div>
        </section>
    )
}

export default Categories;