import comics from "../comics"


export default function MyMain() {
    return (
        <main>
            <div className="jumbotron">
                <div className="jumbo-label">
                    CURRENT SERIES
                </div>
            </div>
            <div className="card-container">
                {comics.map((comic) => (

                    <div className="comic-card" id={comic.id}>
                        <img src={comic.thumb} alt={comic.title} />
                        <h4>{comic.series.toUpperCase()}</h4>
                    </div>
                )
                )}
                <button className="my-btn">LOAD MORE</button>
            </div>

        </main>
    )
}