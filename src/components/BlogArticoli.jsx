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

    return (
        <div className="container vh-100 justify-content-center">
            <h1>Blog Articoli che raccontano la reale realtà</h1>
            <div className="row container-articoli justify-content-between">
                {articlesList.map(article => {
                    const { id, title, content } = article;
                    return (
                        <div key={id} className="col-6 card">
                            <div className="card-body">
                                <h2 className="card-title">{title}</h2>
                                <p className="card-text">{content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr className="my-5" />
            <div className="row justify-content-center">
                <form onSubmit={submitHandler} className="col-10 m-2">
                    <div className="mb-3">
                        <label
                            htmlFor="articleTitle"
                            className="form-label">
                            Titolo
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={changeInputsFormHandler}
                            id="articleTitle"
                            value={article.title}
                            placeholder="Titolo Articolo"
                            name='title'
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="articleContent"
                            className="form-label">
                            Contenuto Articolo
                        </label>
                        <textarea
                            className="form-control"
                            onChange={changeInputsFormHandler}
                            id="articleContent"
                            value={article.content}
                            rows="5"
                            name='content'
                            placeholder="Scrivi il contenuto dell'articolo"></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Aggiungi Articolo
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BlogArticoli;
