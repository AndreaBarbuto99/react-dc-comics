import FacebookLogo from "../assets/img/footer-facebook.png"
import PeriscopeLogo from "../assets/img/footer-periscope.png"
import PinterestLogo from "../assets/img/footer-pinterest.png"
import TwitterLogo from "../assets/img/footer-twitter.png"
import YoutubeLogo from "../assets/img/footer-youtube.png"
import DcLogoBackground from "../assets/img/dc-logo-bg.png"






export default function MyFooter() {
    return (
        <>
            <footer className="flex-container">
                <div id="margin-fix">
                    <ul>
                        <li className="white-text-titles">DC COMICS</li>
                        <li className="list-text">Characters</li>
                        <li className="list-text">Comics</li>
                        <li className="list-text">Movies</li>
                        <li className="list-text">Tv</li>
                        <li className="list-text">Games</li>
                        <li className="list-text">Videos</li>
                        <li className="list-text">News</li>
                    </ul>
                    <ul>
                        <li className="white-text-titles">SHOP</li>
                        <li className="list-text">Shop DC</li>
                        <li className="list-text">Shop DC Collectibles</li>
                    </ul>
                </div>
                <div className="flex-container">
                    <ul>
                        <li className="white-text-titles">DC</li>
                        <li className="list-text">Terms of Use</li>
                        <li className="list-text">Privacy policy(New)</li>
                        <li className="list-text">Ad Choices</li>
                        <li className="list-text">Advertising</li>
                        <li className="list-text">Jobs</li>
                        <li className="list-text">Subscriptions</li>
                        <li className="list-text">Talent Workshops</li>
                        <li className="list-text">CPSC Certificates</li>
                        <li className="list-text">Ratings</li>
                        <li className="list-text">Shop Help</li>
                        <li className="list-text">Contact Us</li>
                    </ul>
                    <ul>
                        <li className="white-text-titles">SITES</li>
                        <li className="list-text">DC</li>
                        <li className="list-text">MAD Magazine</li>
                        <li className="list-text">DC Kids</li>
                        <li className="list-text">DC Universe</li>
                        <li className="list-text">DC Power Visa</li>
                    </ul>
                </div>
                <img src={DcLogoBackground} className="img-fit" />

            </footer>
            <section>
                <div className="white-text">
                    SIGN-UP NOW!
                </div>
                <div className="flex-container" id="after-footer">
                    <p>FOLLOW US</p>
                    <img src={FacebookLogo} alt="Facebook Logo" className="logo-img" />
                    <img src={TwitterLogo} alt="Twitter Logo" className="logo-img" />
                    <img src={YoutubeLogo} alt="Youtube Logo" className="logo-img" />
                    <img src={PinterestLogo} alt="Pinterest Logo" className="logo-img" />
                    <img src={PeriscopeLogo} alt="Periscope Logo" className="logo-img" />
                </div>
            </section>
        </>
    )
}