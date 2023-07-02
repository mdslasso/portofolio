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

        <div className="header">


            <div className="row">

                <div className="col-md-6">

                    <div className="competence-note">
                        <h6 >HTML</h6>
                        <h6 >95%</h6>
                    </div>
                    <div className="progress">
                        <div role="progressbar"></div>

                        <div className="bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                </div>

                <div className="col-md-6">

                    <div className="competence-note">
                        <h6 >PHP</h6>
                        <h6 >70%</h6>
                    </div>
                    <div className="progress">
                        <div role="progressbar"></div>

                        <div className="bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                </div>


            </div>

            <div className="row">

                <div className="col-md-6">

                    <div className="competence-note">
                        <h6 >HTML</h6>
                        <h6 >95%</h6>
                    </div>
                    <div className="progress">
                        <div role="progressbar"></div>

                        <div className="bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                </div>

                <div className="col-md-6">

                    <div className="competence-note">
                        <h6 >PHP</h6>
                        <h6 >70%</h6>
                    </div>
                    <div className="progress">
                        <div role="progressbar"></div>

                        <div className="bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                </div>


            </div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <img className='logo' src={Logo} alt='logo' />
                <div className="container-fluid">
                    <span className="navbar-brand" href="#">Navbar</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <span>À propos</span>
                            <span>Qualités</span>
                            <span>Compétences</span>
                            <span> Réalisations</span>
                            <span>Services</span>
                            <span>Contact</span>

                        </div>
                    </div>
                </div>
            </nav>


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
    )

}

export default Header;