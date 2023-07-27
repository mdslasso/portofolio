import Logo from '../assets/logo.png'
import Photo from '../assets/photo.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faDownload, faEnvelope, faLaptopCode, faCircleInfo, faScrewdriverWrench, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";





function Header() {

    return (


        <header id='header' className="header">

            <div className='nav'>

                <div className='logo-menu-toggle'>

                    <a href='#header'> <img className='logo' src={Logo} alt='logo' /></a>



                    <div>
                        <a href='#apropos'> <span className='menu-toggle'> <FontAwesomeIcon icon={faCircleInfo} /> </span></a>
                        <a href='#qualites'> <span className='menu-toggle'><FontAwesomeIcon icon={faUserGraduate} /> </span></a>
                        <a href='#competences'> <span className='menu-toggle'><FontAwesomeIcon icon={faScrewdriverWrench} /> </span></a>
                        <a href='#realisations'> <span className='menu-toggle'><FontAwesomeIcon icon={faLaptopCode} /> </span></a>
                        <a href='#contact'> <span className='menu-toggle'> <FontAwesomeIcon icon={faEnvelope} /> </span></a>


                    </div>

                </div>

                <div className='menu'>

                    <a href='#apropos'> <span>À propos</span></a>
                    <a href='#qualites'> <span>Qualités</span></a>
                    <a href='#competences'><span>Compétences</span></a>
                    <a href='#realisations'> <span>Réalisations</span></a>
                    <a href='#contact'> <span>Contact</span></a>


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



                            <Link to="https://www.facebook.com/lancine.sylla" target='blank'><img src={Facebook} alt='facebook' /></Link>
                            <Link to="https://www.instagram.com/mdslasso/" target='blank'><img src={Instagram} alt='instagram' /></Link>
                            <Link to="https://www.linkedin.com/in/lancine-sylla-204905156/" target='blank'><img src={Linkedin} alt='linkedin' /></Link>
                            <Link to="https://github.com/mdslasso" target='blank'><img src={Github} alt='github' /></Link>


                        </div> <br /> <br />

                        <Link className='cv' to=""> <FontAwesomeIcon icon={faDownload} />  Mon Cv </Link>

                    </div>

                </div>


                <p className='voir-realisation'>Voir mes réalisations <br />

                    <a href='#realisations'><FontAwesomeIcon className='icon' icon={faChevronDown} />
                    </a>



                </p>

                <div id='apropos' ></div>




            </div>





        </header>
    )

}

export default Header;