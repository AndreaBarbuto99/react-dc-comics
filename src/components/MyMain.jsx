
import MyCardList from "./MyCardList"


export default function MyMain() {
    return (
        <main>
            <div className="jumbotron">
                <div className="jumbo-label">
                    CURRENT SERIES
                </div>
            </div>
            <MyCardList />
            <button className="my-btn">LOAD MORE</button>


        </main>
    )
}