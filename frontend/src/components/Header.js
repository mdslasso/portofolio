import Logo from '../assets/logo.png'
import Photo from '../assets/photo.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";





function Header() {

    return (


        <header className="header">

            <div className='nav'>
                <img className='logo' src={Logo} alt='logo' />

                <div className='menu'>
                    <span>À propos</span>
                    <span>Qualités</span>
                    <span>Compétences</span>
                    <span> Réalisations</span>
                    <span>Contact</span>

                </div>


            </div>


            <div className='cadre-infos'>

                <div className='cadre-photo'>
                    <img className='photo' src={Photo} alt='' />

                    <div className='infos'>
                        <p> JE SUIS </p>
                        <h1>LANCINE SYLLA</h1>
                        <span> Développeur Web </span>


                        <div className='suivre'>

                            <Link to="" ><img src={Facebook} alt='facebook' /></Link>
                            <Link to="" ><img src={Instagram} alt='facebook' /></Link>
                            <Link to="" ><img src={Twitter} alt='facebook' /></Link>
                            <Link to="" ><img src={Linkedin} alt='facebook' /></Link>

                        </div> <br /> <br />

                        <Link className='cv' to=""> <FontAwesomeIcon icon={faDownload} />  Mon Cv </Link>

                    </div>

                </div>


                <p className='voir-realisation'>Voir mes réalisations <br />

                    <FontAwesomeIcon className='icon' icon={faChevronDown} />

                </p>



            </div>




        </header>
    )

}

export default Header;