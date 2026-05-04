import { useState } from 'react'

function FormAddArticle(props) {
    const { article, onChange, onSubmit } = props

    return (
        <div className="row justify-content-center">
            <form onSubmit={onSubmit} className="col-10 m-2">
                <div className="mb-3">
                    <label
                        htmlFor="articleTitle"
                        className="form-label">
                        Titolo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={onChange}
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
                        onChange={onChange}
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
    );
}

export default FormAddArticle;