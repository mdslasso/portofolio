import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import datas from '../datas/realisations.json'


function Realisations() {

    return (



        <div className="realisations">

            <div className="cadre-realisations">

                <div className="cadre-realisations-titre">

                    <h1 className="h-big">MES REALISATIONS</h1>
                    <h1 className="h-small">MES REALISATIONS</h1>

                </div>


                <div className="cadre-element-realisation">

                    {datas.map((data) =>

                        <div className="element-realisation">

                            <img src={data.image} alt='imageprojet' />

                            <div className='description'>

                                <h1>{data.titre}</h1>

                                <p>
                                    {data.description}
                                </p>

                            </div>



                            <div className='lien'>
                                <a href="https://mdslasso.github.io/booki-projet/" target='blank'>  <FontAwesomeIcon icon={faLink} />  Voir le site</a>

                            </div>

                        </div>



                    )}









                </div>




            </div>



        </div>
    )

}

export default Realisations;