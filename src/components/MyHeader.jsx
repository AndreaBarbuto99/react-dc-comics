import DcLogo from "../assets/img/dc-logo.png"
import { NavCategories } from "../comics"

export default function MyHeader() {
    return (
        <header>
            <nav>
                <figure>
                    <img src={DcLogo} alt="DC Logo" />
                </figure>
                <ul id="flex-list">
                    {NavCategories.map((category) =>
                    (
                        <li key={category.id}>
                            <a href={category.url} className={category.current ? "nav-active" : ""}>{category.title.toUpperCase()}</a>
                        </li>
                    )
                    )}
                </ul>

            </nav>
        </header>
    )
}