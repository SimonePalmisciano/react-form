import { useState } from "react";
import FormAddArticle from "./FormAddArticle";

const emptyArticle = {
    title: '',
    content: '',
}

const defaulArticles = [
    {
        id: 1,
        title: 'Chat GPT 5.5 conquisterà il mondo?',
        content: "in questo articolo vedremo come OPENAI ha creato uno IA in grado di controllare lo spazio tempo e ha scoperto cosa si trova all'interno dei buchi neri"
    },
    {
        id: 2,
        title: "Cos'è Donald Trump",
        content: "in questo articolo scoprirete perchè in realtà Donald Trump in realtà è un IA che si è creata autonomamente partendo dalla base del comportamento dei più grandi conquistatori della terra conosciuta come Alessandro Magno, Adolf Hindler e Genghis Khan"
    },
]

function BlogArticoli() {
    const [articlesList, setArticlesList] = useState(defaulArticles);
    const [article, setArticle] = useState(emptyArticle);

    const changeInputsFormHandler = (event) => {
        const target = event.target;
        const targetValue = target.value;
        const targetName = target.name;

        const newArticle = {
            ...article,
            [targetName]: targetValue
        };
        setArticle(newArticle);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const articleToAdd = {
            ...article,
            id: crypto.randomUUID(),
        };
        const newArticlesList = [...articlesList, articleToAdd];
        setArticlesList(newArticlesList);

        setArticle(emptyArticle);
    }

    const remuveById = (id) => {
        const newArticlesList = articlesList.filter(user => user.id !== id);
        setArticlesList(newArticlesList);
    }

    return (
        <div className="container vh-100 justify-content-center">
            <h1 className="mb-5">Blog Articoli che raccontano la reale realtà</h1>
            <div className="row container-articoli justify-content-between">
                {articlesList.map(article => {
                    const { id, title, content } = article;
                    return (
                        <div key={id} className="col-6 card">
                            <div className="card-body">
                                <button onClick={() => remuveById(id)} className="btn delete-button">X</button>
                                <h2 className="card-title">{title}</h2>
                                <p className="card-text">{content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr className="my-5" />
            <FormAddArticle
                article={article}
                onChange={changeInputsFormHandler}
                onSubmit={submitHandler}
            />
        </div>
    );
}

export default BlogArticoli;
