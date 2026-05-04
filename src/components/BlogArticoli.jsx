const defaulArticles = [
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
            <div className="row container-articoli justify-content-between">
                {defaulArticles.map(article => {
                    const { id, title, content } = article;

                    return (
                        <div key={id} className="col-4 card">
                            <img src="VUOTO" className="card-img-top" alt="VUOTO" />
                            <div className="card-body">
                                <h2 className="card-title">{title}</h2>
                                <p className="card-text">{content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr className="my-5"/>
            <div className="row justify-content-center">
                <form className="col-10 m-2">
                    <div className="mb-3">
                        <label htmlFor="articleTitle" className="form-label">Titolo</label>
                        <input type="text" className="form-control" id="articleTitle" placeholder="Titolo Articolo" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="articleContent" className="form-label">Contenuto Articolo</label>
                        <textarea className="form-control" id="articleContent" rows="5" placeholder="Scrivi il contenuto dell'articolo"></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BlogArticoli;
