import styles from "./HelloClasse154.module.css";

const defaulArticle = [
    {
        id: 1,
        title: 'Chat GPT 5.5 conquisterà il mondo?',
        content: "in questo articolo vedremo come OPENAI ha creato uno IA in grado di controllare lo spazio tempo e ha scoperto cosa si trova all'interno dei buchi neri"
    },
    {
        id: 2,
        title: "cos'è Donald Trump",
        content: "in questo articolo scoprirete perchè in realtà Donald Trump in realtà è un IA che si è creata autonomamente partendo dalla base del comportamento dei più grandi conquistatori della terra conosciuta come Alessandro Magno, Adolf Hindler e Genghis Khan"
    },
]

function BlogArticoli() {
    return (
        <div className="container vh-100 justify-content-center">
            <h1>Blog Articoli che raccontano la reale realtà</h1>
            <div className="row container-articoli">
                <div>
                    <div className="card">
                        <img src="VUOTO" className="card-img-top" alt="VUOTO" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogArticoli;
