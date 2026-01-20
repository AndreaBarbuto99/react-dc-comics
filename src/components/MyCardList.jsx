import { comics } from "../comics";
import MyCard from "./MyCard";

export default function MyCardList() {
    function renderCardComics() {

        return comics.map((comic) => {
            return (
                <MyCard key={comic.id} comic={comic} />
            )
        })

    }
    return (
        <div className="card-container">
            {renderCardComics()}
        </div>
    )
}