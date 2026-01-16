import TabletLogo from "../assets/img/buy-comics-digital-comics.png"
import ShirtLogo from "../assets/img/buy-comics-merchandise.png"
import Subscription from "../assets/img/buy-comics-subscriptions.png"
import LocationLogo from "../assets/img/buy-comics-shop-locator.png"
import VisaSvg from "../assets/img/buy-dc-power-visa.svg"


export default function PreFooterSection() {
    return (
        <section id="pre-section">
            <figure className="width-fix container">
                <img src={TabletLogo} alt="Logo on tablet" className="img-width-fix" />
                <figcaption>DIGITAL COMICS</figcaption>
            </figure>
            <figure className="width-fix container">
                <img src={ShirtLogo} alt="Logo on shirt" className="img-width-fix" />
                <figcaption>DC MERCHANDISE</figcaption>
            </figure>
            <figure className="width-fix container">
                <img src={Subscription} alt="Subscription logo" className="img-width-fix" />
                <figcaption>SUBSCRIPTION</figcaption>
            </figure>
            <figure className="width-fix container">
                <img src={LocationLogo} alt="Location logo" className="img-width-fix" />
                <figcaption>COMIC SHOP LOCATOR</figcaption>
            </figure>
            <figure className="width-fix container">
                <img src={VisaSvg} id="svg-fix" alt="Power Visa logo" />
                <figcaption>DC POWER VISA</figcaption>
            </figure>
        </section>
    )
}