import React from "react";
import {Link} from "react-router-dom";

interface PropData {
    title: string,
    author: string,
    id: number | null,
}

const Category = (props: PropData) => (
    <>
    <article className="categories__article article">
        <h3 className="article__title">{props.title}</h3>
        <span className="article__author">Автор {props.author}</span>
        <Link to={`/thread/${props.id}`} className="article__btn">Читать</Link>
    </article>
    </>
)

export default Category
