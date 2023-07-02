import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'

function Competences() {

    return (



        <div className="competences">

            <div className="cadre-competences">

                <div className="cadre-competences-titre">

                    <h1 className="h-big">MES TECHNOS</h1>
                    <h1 className="h-small">MES COMPÉTENCES</h1>

                </div>


                <div className="row">

                    <div className="col-md-4">

                        <div className="competence-note">
                            <img src={Html} alt='Html' />
                            <h6 >HTML</h6>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="competence-note">
                            <img src={Css} alt='Css' />
                            <h6 >CSS</h6>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="competence-note">
                            <img src={Js} alt='Js' />
                            <h6 >JAVASCRIPT</h6>

                        </div>

                    </div>


                </div>


            </div>



        </div>
    )

}

export default Competences;