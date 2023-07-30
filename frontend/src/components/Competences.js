import datas from '../datas/competences.json'

function Competences() {

    return (



        <div className="competences">

            <div className="cadre-competences">

                <div className="cadre-competences-titre">

                    <h1 className="h-big">MES TECHNOS</h1>
                    <h1 className="h-small">MES COMPÉTENCES</h1>

                </div>


                <div className="competence-row">

                    {datas.map((data) =>

                        <article key={data.id}>
                            <div className="competence-note">
                                <img src={data.image} alt={data.competence} />
                                <h6 >{data.competence}</h6>

                            </div>
                        </article>


                    )}







                </div>


            </div>


            <div id='realisations'></div>
        </div>
    )

}

export default Competences;