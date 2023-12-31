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

                        <div key={data.id} className="element-realisation">

                            <img src={data.image} alt='imageprojet' />

                            <div className='description'>

                                <h1>{data.titre}</h1>

                                <p>
                                    {data.description}
                                </p>
                                <hr></hr>

                                <div className='techno'>

                                    {data.technos.map((techno, index) => (

                                        <li> {techno}</li>

                                    ))}





                                </div>


                            </div>



                            <div className='lien'>
                                <a href={data.lien} target='blank'>  <FontAwesomeIcon icon={faLink} /> {data.text}</a>

                            </div>

                        </div>



                    )}


                </div>




            </div>


            <div id='contact'></div>



        </div>
    )

}

export default Realisations;