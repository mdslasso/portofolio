
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faDesktop } from '@fortawesome/free-solid-svg-icons'
import datas_educations from '../datas/educations.json'
import datas_experiences from '../datas/experiences.json'



function Qualites() {

    return (



        <div className="qualites">

            <div className="cadre-qualites">

                <div className="cadre-qualites-titre">

                    <h1 className="h-big"> ÉDUCATION & EXPÉRIENCE</h1>
                    <h1 className="h-small">QUALITÉS</h1>

                </div>


                <div className="education-experience">

                    <div className="education">
                        <h1 className='education-experience-titre'> <span><FontAwesomeIcon className='icon-quality' icon={faGraduationCap} /> ÉDUCATION </span> </h1>


                        <div className='education-experience-scroll'>


                            {datas_educations.map((data) =>

                                <div className='cadre-education-experience'>
                                    <h4>{data.diplome}</h4>
                                    <h5>{data.universite} | <span>{data.annees}</span></h5>
                                    <p>{data.description}</p>


                                </div>


                            )}




                        </div>





                    </div>

                    <div className="experience">

                        <h1 className='education-experience-titre'> <span> <FontAwesomeIcon className='icon-quality' icon={faDesktop} /> EXPÉRIENCE</span></h1>


                        <div className='education-experience-scroll'>


                            {datas_experiences.map((data) =>

                                <div className='cadre-education-experience'>
                                    <h4>{data.poste}</h4>
                                    <h5>{data.entreprise} | <span>{data.annees}</span></h5>
                                    <p>{data.description}</p>


                                </div>


                            )}



                        </div>



                    </div>




                </div>






            </div>




            <br></br>
            <div id='competences'></div>
        </div>
    )

}

export default Qualites;