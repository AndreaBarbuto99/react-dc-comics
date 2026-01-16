import DcLogo from "../assets/img/dc-logo.png"

export default function MyHeader() {
    return (
        <header>
            <figure>
                <img src={DcLogo} alt="DC Logo" />
            </figure>
            <ul id="flex-list">
                <li>CHARACTERS</li>
                <li>COMICS</li>
                <li>MOVIES</li>
                <li>TV</li>
                <li>GAMES</li>
                <li>COLLECTIBLES</li>
                <li>VIDEOS</li>
                <li>FANS</li>
                <li>NEWS</li>
                <li>SHOP</li>
            </ul>


        </header>
    )
}