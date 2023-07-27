import ImgProjet from '../assets/booki.webp'
import ImgProjet2 from '../assets/mon_vieux_grimoire.jpg'
import ImgProjet3 from '../assets/sophie_bluel.webp'
import ImgProjet4 from '../assets/nina_carducci.webp'
import ImgProjet5 from '../assets/kasa.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'


function Realisations() {

    return (



        <div className="realisations">

            <div className="cadre-realisations">

                <div className="cadre-realisations-titre">

                    <h1 className="h-big">MES REALISATIONS</h1>
                    <h1 className="h-small">MES REALISATIONS</h1>

                </div>


                <div className="cadre-element-realisation">

                    <div className="element-realisation">

                        <img src={ImgProjet} alt='imageprojet' />




                        <div className='description'>

                            <h1>Booki</h1>

                            <p>
                                Créez la page d'accueil d'une agence de voyage avec HTML & CSS.

                                Intégrer la maquette Figma de manière responsive.

                                HTML 5 CSS 3
                            </p>

                        </div>



                        <div className='lien'>
                            <a href="https://mdslasso.github.io/booki-projet/" target='blank'>  <FontAwesomeIcon icon={faLink} />  Voir le site</a>

                        </div>

                    </div>





                    <div className="element-realisation">

                        <img src={ImgProjet2} alt='logo' />




                        <div className='description'>

                            <h1>Le vieux grimoire</h1>

                            <p>
                                Développer le backend d'un site de notation de livres.

                                Implémenter l'inscription utilisateur, la base de données, l'optimisation des images.

                            </p>

                        </div>



                        <div className='lien'>
                            <a href="https://github.com/mdslasso/mon-vieux-grimoire" target='blank'> <FontAwesomeIcon icon={faLink} /> Voir le code</a>



                        </div>

                    </div>


                    <div className="element-realisation">

                        <img src={ImgProjet3} alt='imageprojet' />




                        <div className='description'>

                            <h1>Sophie Bluel</h1>

                            <p>
                                Créer une page web dynmique avec javascript

                                Créer la page de connexion, la modale d'upload de travaux, la modale d'affichage des travaux.

                            </p>

                        </div>



                        <div className='lien'>
                            <a href=" https://github.com/mdslasso/sophie-bluel" target='blank'> <FontAwesomeIcon icon={faLink} /> Voir le code</a>

                        </div>

                    </div>



                    <div className="element-realisation">

                        <img src={ImgProjet4} alt='imageprojet' />




                        <div className='description'>

                            <h1> Nina Carducci</h1>

                            <p>
                                Débugger et optimiser le site d'un photographe.

                                Améliorer l'accessibilité, les performances techniques, mettre en place le référencement local.

                            </p>

                        </div>



                        <div className='lien'>
                            <a href="https://github.com/mdslasso/nina-carducci" target='blank'>  <FontAwesomeIcon icon={faLink} />  Voir le site</a>

                        </div>

                    </div>


                    <div className="element-realisation">

                        <img src={ImgProjet5} alt='imageprojet' />




                        <div className='description'>

                            <h1> Kasa</h1>

                            <p>
                                Créez une application web de location immobilière avec React.

                                Utiliser des composants réutilisables, mettre en place le routage entre les pages.

                            </p>

                        </div>



                        <div className='lien'>
                            <a href="https://github.com/mdslasso/nina-carducci" target='blank'>  <FontAwesomeIcon icon={faLink} />  Voir le code</a>

                        </div>

                    </div>



                </div>




            </div>



        </div>
    )

}

export default Realisations;