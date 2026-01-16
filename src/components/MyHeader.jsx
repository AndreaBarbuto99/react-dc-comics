import DcLogo from "../assets/img/dc-logo.png"

export default function MyHeader() {
    return (
        <header>
            <figure>
                <img src={DcLogo} alt="DC Logo" />
            </figure>
        </header>
    )
}