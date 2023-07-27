import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {

    return (


        <div id='contact' className="contact">

            <div className="cadre-contact">

                <h1 className="h-big">ME CONTACTER</h1>


                <div className='phone-mail'>

                    <span><FontAwesomeIcon icon={faMobile} /> : +33 605 80 49 63</span>


                    <a href="mailto:mdslasso@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> : mdslasso@gmail.com </a>




                </div>




            </div>







        </div >
    )

}

export default Contact;