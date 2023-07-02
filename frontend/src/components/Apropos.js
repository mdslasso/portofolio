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

                    <p>Après plusieurs années en tant qu’illustratrice, graphiste et autrice jeunesse free-lance, j’ai décidé de me former au métier de développeuse front-end, ayant toujours été intéressée par la tech et l’expérience utilisateur.</p>

                    <p>  Mon appétence pour la création ne m’ayant jamais quittée, je souhaite désormais travailler dans le Webdesign afin de combiner mes connaissances et compétences en arts visuels et monde digital !</p>


                </div>


                <span>  <FontAwesomeIcon icon={faEnvelope} /> Me Contacter</span>









            </div>



            <br></br>

        </div >
    )

}

export default Apropos;