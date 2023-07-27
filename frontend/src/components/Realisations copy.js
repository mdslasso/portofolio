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

                    <div className="element-realisation ">

                        <div className="projet">

                            <div className="cadre-image-projet">

                                <img src={ImgProjet} alt='logo' />


                            </div>


                            <div className='lien'>

                                <a href="https://mdslasso.github.io/booki-projet/" target='blank'>   Voir le site</a>

                            </div>


                        </div>


                        <div className='infos-projet'>
                            <div className='titre'>
                                <h1>Booki</h1>

                            </div>

                            <div>


                                Créez la page d'accueil d'une agence de voyage avec HTML & CSS.

                                Intégrer la maquette Figma de manière responsive.

                                HTML 5 CSS 3



                            </div>


                            <a className='voir-code' href="https://github.com/mdslasso/booki-projet" target='blank'>  <FontAwesomeIcon icon={faLink} /> Voir le code</a>






                        </div>



                    </div>


                    <div className="element-realisation ">

                        <div className="projet">

                            <div className="cadre-image-projet">

                                <img src={ImgProjet2} alt='logo' />


                            </div>


                            <div className='lien'>
                                <a className='voir-code' href="https://github.com/mdslasso/mon-vieux-grimoire" target='blank'> <FontAwesomeIcon icon={faLink} /> Voir le code</a>


                            </div>


                        </div>


                        <div className='infos-projet'>
                            <div className='titre'>
                                <h1> Le vieux grimoire</h1>

                            </div>

                            <div>

                                Développer le backend d'un site de notation de livres.

                                Implémenter l'inscription utilisateur, la base de données, l'optimisation des images.

                                Node.js
                                Express.js
                                Mongo DB
                                API



                            </div>


                            <a className='voir-code' href="https://github.com/mdslasso/mon-vieux-grimoire" target='blank'> <FontAwesomeIcon icon={faLink} /> Voir le code</a>



                        </div>



                    </div>

                    <div className="element-realisation ">

                        <div className="projet">

                            <div className="cadre-image-projet">

                                <img src={ImgProjet3} alt='logo' />


                            </div>



                            <div className='lien'>
                                <a className='voir-code' href=" https://github.com/mdslasso/sophie-bluel" target='blank'> <FontAwesomeIcon icon={faLink} /> Voir le code</a>


                            </div>




                        </div>


                        <div className='infos-projet'>
                            <div className='titre'>
                                <h1> Sophie Bluel</h1>

                            </div>

                            <div>




                                Créer une page web dynmique avec javascript

                                Créer la page de connexion, la modale d'upload de travaux, la modale d'affichage des travaux.



                            </div>




                            <a className='voir-code' href=" https://github.com/mdslasso/sophie-bluel" target='blank'> <FontAwesomeIcon icon={faLink} /> Voir le code</a>







                        </div>



                    </div>

                    <div className="element-realisation ">

                        <div className="projet">

                            <div className="cadre-image-projet">

                                <img src={ImgProjet4} alt='logo' />


                            </div>


                            <div className='lien'>

                                <a href="https://mdslasso.github.io/nina-carducci/#gallery" target='blank'>Voir le site</a>

                            </div>


                        </div>


                        <div className='infos-projet'>
                            <div className='titre'>
                                <h1>  Nina Carducci</h1>

                            </div>

                            <div>



                                Débugger et optimiser le site d'un photographe.

                                Améliorer l'accessibilité, les performances techniques, mettre en place le référencement local.



                            </div>


                            <a className='voir-code' href="https://github.com/mdslasso/nina-carducci" target='blank'> <FontAwesomeIcon icon={faLink} /> Voir le code</a>






                        </div>



                    </div>




                    <div className="element-realisation ">

                        <div className="projet">

                            <div className="cadre-image-projet">

                                <img src={ImgProjet5} alt='logo' />


                            </div>

                            <div className='lien'>

                                <a className='voir-code' href="https://github.com/mdslasso/nina-carducci" target='blank'> <FontAwesomeIcon icon={faLink} /> Voir le code</a>



                            </div>





                        </div>


                        <div className='infos-projet'>
                            <div className='titre'>
                                <h1>  Kasa</h1>

                            </div>

                            <div>



                                Créez une application web de location immobilière avec React.

                                Utiliser des composants réutilisables, mettre en place le routage entre les pages.


                            </div>


                            <a className='voir-code' href="https://github.com/mdslasso/kasa" target='blank'> <FontAwesomeIcon icon={faLink} /> Voir le code</a>






                        </div>



                    </div>







                </div>




            </div>



        </div>
    )

}

export default Realisations;