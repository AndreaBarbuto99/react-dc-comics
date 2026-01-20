import FacebookLogo from "../assets/img/footer-facebook.png"
import PeriscopeLogo from "../assets/img/footer-periscope.png"
import PinterestLogo from "../assets/img/footer-pinterest.png"
import TwitterLogo from "../assets/img/footer-twitter.png"
import YoutubeLogo from "../assets/img/footer-youtube.png"
import DcLogoBackground from "../assets/img/dc-logo-bg.png"
import { DcComicsFooter, ShopFooter, DC, SitesFooter } from "../comics"

function createListItem(objArray) {
    return (objArray.map((element) =>
    (

        <li className="list-text" key={element.id}>
            <a href={element.url}>{element.label}
            </a>
        </li>
    )
    )
    )
}



export default function MyFooter() {
    return (
        <>
            <footer className="flex-container">
                <div id="margin-fix">
                    <ul>
                        <li className="white-text-titles">DC COMICS</li>
                        {
                            createListItem(DcComicsFooter)
                        }

                    </ul>
                    <ul>
                        <li className="white-text-titles">SHOP</li>
                        {
                            createListItem(ShopFooter)
                        }
                    </ul>
                </div>
                <div className="flex-container">
                    <ul>
                        <li className="white-text-titles">DC</li>
                        {
                            createListItem(DC)
                        }
                    </ul>
                    <ul>
                        <li className="white-text-titles">SITES</li>
                        {
                            createListItem(SitesFooter)
                        }
                    </ul>
                </div>
                <img src={DcLogoBackground} className="img-fit" />

            </footer>
            <section>
                <div className="white-text">
                    <a href="#">SIGN-UP NOW!</a>
                </div>
                <div className="flex-container" id="after-footer">
                    <p>FOLLOW US</p>
                    <a href="#"><img src={FacebookLogo} alt="Facebook Logo" className="logo-img" /></a>
                    <a href="#"><img src={TwitterLogo} alt="Twitter Logo" className="logo-img" /></a>
                    <a href="#"><img src={YoutubeLogo} alt="Youtube Logo" className="logo-img" /></a>
                    <a href="#"><img src={PinterestLogo} alt="Pinterest Logo" className="logo-img" /></a>
                    <a href="#"><img src={PeriscopeLogo} alt="Periscope Logo" className="logo-img" /></a>
                </div>
            </section>
        </>
    )
}