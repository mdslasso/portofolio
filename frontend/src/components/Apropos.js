import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Apropos() {

    return (


        <div className="apropos">

            <div className="cadre-apropos">

                <div className="cadre-apropos-titre">

                    <h1 className="h-big">À PROPOS</h1>
                    <h1 className="h-small">DE MOIS</h1>

                </div>


                <div className="paragragre">
                    <p> Ville : <span>  Amiens </span></p>
                    <p> Langues : <span> Francais, Anglais, Russe </span></p>
                    <p> Sports : <span>   Football, Musculation </span></p>
                    <p>  Disponibilité : <span>   Immédiate </span></p>


                </div>





                <span className='me-contacter'>  <a href='#contact'>
                    <FontAwesomeIcon icon={faEnvelope} /> Me Contacter
                </a>
                </span>




            </div>
            <div id='qualites'></div>





        </div >
    )

}

export default Apropos;