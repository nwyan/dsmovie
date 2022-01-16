import {ReactComponent as GithubICon} from 'assets/img/github.svg';
import './styles.css'

function Navbar(){
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/nwyan">
                        <div className="dsmovie-contact-container">
                            <GithubICon />
                            <p className="dsmovie-contact-link">/nwyan</p>
                        </div>
                    </a>
                </div>
                <div></div>
            </nav>
        </header>
    )
}

export default Navbar;