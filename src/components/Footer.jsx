import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import '.././Footer.css'

export default function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease'
        })
    }, [])
    return (
        <footer id='opinion'>
            <div className='footer'>
                <div className="opinion">
                    <h2 data-aos="fade-up">Opinión</h2>
                    <div data-aos="fade-up">
                        Este libro lo he disfrutado bastante, uno de los que más he disfrutado leer en general. Abora tantos temas a través de un largo periodo de
                        tiempo de historia, en una forma muy sencilla y clara, además de que se apoya en grandes ilustraciones del propio autor.  Es una lectura
                        simple y entretenida. Personalmente me gusta mucho la historia y la política, me interesa conocer de esos temas en mi tiempo libre.
                        Algunos de los temas que se abordan los conocía, pero no había hecho una conexión entre ellos. Y eso fue lo que más me gustó, como es que
                        prácticas que empezaron en el siglo XV (comercio, impuestos) han afectado el estilo de vida que llevamos, o al menos en los
                        países que tienen un sistema capitalista.
                    </div>
                    <div data-aos="fade-up">
                        En cuanto al contenido del libro y sobre el capitalismo. Pienso que la idea de RIUS en este libro es mostrar con eventos y hechos
                        históricos, como es que el sistema capitalista ha sido un impedimiento para la gran mayoría de las personas. Un impedimento para poder
                        vivir libremente, hacer lo que gusten o disfrutar de sus seres queridos simplemente por tener que ganar dinero. Estoy completamente de
                        acuerdo con estas ideas. <br />
                        Últimamente, con algunas situaciones que he investigado, como lo son las intervenciones estadounidenses en
                        latinoamérica y países del medio oriente, me di cuenta que la avaricia y el deseo por tener más de algunos países, los llevaba a
                        hacer atrocidades, no tan solo violar la soberanía de otros, sino fomentar la corrupción, derrocar gobiernos, instaurar dictaduras, etc.
                        Y leyendo este libro pude observar que esto no era algo nuevo del imperio de estados unidos y países europeos, sino que llevaban años, o siglos
                        teniendo estas prácticas maquiavélicas. Solo para obtener dinero, por el capitalismo.
                    </div>
                    <div data-aos="fade-up">
                        Aunque no pienso que el capitalismo es algo completamente malo. Pienso que se podría llevar de manera distinta, sin tanta avaricia. Actualmente
                        esta el ejemplo de China, un país que históricamente está más inclinado hacia el socialismo, pero que ha estado utilizando prácticas capitalistas
                        pero no como una meta, sino como una herramienta para llegar al socialismo. Donde buscan generar capital para poder invertirlo en
                        su población, innovar, enfocarse en su soberanía y en general, hacerse mejor país. <br />
                        Entonces si creo que el capitalismo pueda llegar a funcionar, al menos como en China, como una herramienta, pero no una meta final.
                        Pero debe de cambiar la percepción de los pocos que tienen la riqueza, que sean un poco más socialistas, pero esto es muy poco probable.
                        Al menos dentro de un futuro cercano, no se pierda la esperanza.
                    </div>
                </div>
                <div className="referencias" data-aos="fade-up">
                    <h2>Referencia</h2>
                    <div >
                        - RIUS. (1998). La Trukulenta Historia del Kapitalismo. Grijalbo. <br />
                        <a href="https://esfops.files.wordpress.com/2013/05/rius_-_la_trukulenta_historia_del_capitalismo.pdf"> https://esfops.files.wordpress.com/2013/05/rius_-_la_trukulenta_historia_del_capitalismo.pdf</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}