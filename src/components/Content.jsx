import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import '.././Content.css'
import comercio from '../assets/comerciopoder.png'
import triangkap from '../assets/triangkap.png'
import patriotismo from '../assets/patriotismo.png'
import comunaparis from '../assets/comunaparis.png'
import aranas from '../assets/aranas.png'
import expansioncom from '../assets/expansioncom.png'
import africaL from '../assets/africaL.png'
import africaR from '../assets/africaR.png'
import sebusca from '../assets/sebusca.png'
import tumba from '../assets/tumba.png'
import colon from '../assets/colon.png'
import carabelas from '../assets/carabelas.png'
import kapitalista from '../assets/kapitalista.png'
import edadmedia from '../assets/edadmedia.png'
import mercader from '../assets/mercader.png'
import soldado from '../assets/soldado.png'
import zombie from '../assets/zombie.png'

export default function Content() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease'
        })
    }, [])
    return (
        <section className='Resumen' id='resumen'>
            <h2 data-aos="flip-down">La Edad Media</h2>
            <div className="Cap1">
                <div data-aos="fade-up">El libro empieza colocándonos en la civilización de la Europa Central del siglo XV, en pleno periodo del feudalismo.
                    En esta época, la sociedad estaba dividida en distintas clases sociales, siendo las principales los campesinos y artesanos
                    por un lado, y los curas y nobles por otro. Los curas y nobles eran dueños de tierras y requerían que los campesinos y artesanos
                    les pagaran impuestos en forma de productos. Si alguien se atrevía a protestar, los soldados amenazaban con violencia hasta que
                    se pagara.
                </div>
                <img className='edadmedia' src={edadmedia} data-aos="fade" data-aos-duration="2000" />
                <img className='kapitalista' src={kapitalista} data-aos="fade" data-aos-duration="2000" />
                <div data-aos="fade-up">
                    Sin embargo, la llegada de los mercaderes cambió la dinámica. Los primeros capitalistas occidentales fueron los mercaderes de Venecia,
                    quienes denominaron al dinero como "CAPITAL" y comenzaron a utilizarlo para generar más dinero. En lugar de ver el dinero como un
                    medio, lo consideraban un fin en sí mismo para acumular poder. Los venecianos incluso prohibieron a otros mercaderes (capitalistas)
                    realizar negocios con China, Arabia e India.
                </div>
                <div data-aos="fade-up">
                    En respuesta a esta prohibición, los capitalistas portugueses decidieron encontrar una nueva ruta hacia la India a través del mar,
                    lideradas por Vasco da Gama y financiadas por nobles. Esto marca el inicio de una nueva era en la historia del capitalismo,
                    con la expansión de las rutas comerciales y la búsqueda de riquezas en ultramar.
                </div>
            </div>
            <h2 data-aos="flip-down">Europa hacia el Mundo</h2>
            <div className="Cap2">
                <div data-aos="fade-up">
                    La expedición portuguesa llegó a las costas de África. En las comunidades africanas observaron mercaderes no europeos,
                    lo que indicaba la presencia de un sistema económico similar al capitalismo. Existían ciudades árabes con estructuras
                    jerárquicas, incluyendo príncipes, artesanos, campesinos y esclavos, lo que reflejaba la existencia de clases en estas sociedades.
                    Sin embargo, los árabes estaban mejor organizados y tenían productos más avanzados que los portugueses, lo que dificultó el
                    intercambio comercial. Debido a esto, al regresar, el rey de Portugal decidió realizar otra expedición, pero en lugar de llenar las
                    embarcaciones con productos a intercambiar, las lleno de armas.
                </div>
                <img className='carabelas' src={carabelas} data-aos="fade" data-aos-duration="2000" />
                <img className='colon' src={colon} data-aos="fade" data-aos-duration="2000" />
                <div data-aos="fade-up">
                    Los españoles no se quedaban atrás en alimentar su capitalismo. En América, donde las civilizaciones Maya, Azteca e Incas
                    eran superiores en muchos aspectos a los europeos. Hasta Cristóbal Colón. Quien accidentalmente llegó a América en 1492. Y siguiendo
                    el ejemplo portugués, el reino español financió el siguiente viaje de Colón, y como resultado, él tomó posesión de las islas que
                    "descubría" para pagar sus deudas con los reyes. Y así comienza...
                </div>
                <h3 data-aos="fade-up">La Conquista</h3>
                <div data-aos="fade-up">
                    Los portugueses se apoderaron de ciudades en la costa africana, estableciendo colonias; y de algunas ciudades en India
                    y China. Por su parte, los españoles destruyeron las civilizaciones Incas, Mayas y Aztecas. La riqueza saqueada de América Latina permitió
                    que España y Portugal construyeran edificios fastuosos y sus reputaciones de ladrones.
                </div>
            </div>
            <h2 data-aos="flip-down">El kapital en el poder</h2>
            <div className="Cap3">
                <div data-aos="fade-up">
                    De regreso a los reinos feudales, los <i>nobles terratenientes</i> comenzaron a cobrar impuestos a los mercaderes. Los mercaderes
                    se unieron con el objetivo de acabar con el poder de los terratenientes, esto dio lugar a conflictos y enfrentamientos
                    entre rateros de diferentes bandos. <br />
                    Para derrotar a los nobles, los mercaderes buscaron la ayuda del rey de Inglaterra, Enrique VIII. Con el pacto de que el rey obtendría dinero de
                    los mercaderes a cambio de que estos no pagarán impuestos. Así, nació la "Economía Mixta", una unión entre el Estado y los capitalistas.
                </div>
                <img className='mercader' src={mercader} data-aos="fade" data-aos-duration="2000" />
                <img className='soldado' src={soldado} data-aos="fade" data-aos-duration="2000" />
                <img className='comercio' src={comercio} data-aos="fade-up" data-aos-duration="2000" />
                <div data-aos="fade-up">
                    Debido a  la creciente influencia y riqueza de los mercaderes, los terratenientes enfurecieron, ya que esto amenazaba
                    su posición de poder y riquezas. Esta tensión culminó en una guerra, una lucha de clases que
                    tuvo lugar entre los siglos XVI y XVII. La guerra enfrentó a tropas pagadas, tanto de nobles como de mercaderes.
                </div>
                <div data-aos="fade-up">
                    Para ganar ventaja en esta guerra, los mercaderes comenzaron a contratar a científicos y artesanos para diseñar y fabricar
                    armas nuevas y más efectivas. Los nobles, necesitando estas nuevas armas para mantener su posición, comenzaron a comprarlas
                    a los mercaderes, lo que resultó en un negocio redondo para los capitalistas.
                </div>
                <div data-aos="fade-up">
                    La creciente demanda de armas llevó a que los artesanos no la pudieran satisfacer a tiempo. Ante esta situación, los
                    mercaderes compraron los talleres de artesanos y tomaron el control de la producción de armas.
                    Para mantener la producción, comenzaron a contratar campesinos a cambio de sueldos muy bajos para
                    trabajar. Esto marcó el nacimiento de dos elementos cruciales del capitalismo: la industria
                    bélica y los primeros asalariados.
                </div>
                <div data-aos="fade-up">
                    Al finalizar la guerra, los terratenientes casi desaparecieron. Con su victoria, el rey promulgó nuevas leyes que favorecían a los
                    mercaderes (capitalistas) y a él mismo. Los pequeños reinos desaparecieron, consolidándose en uno bajo el control del rey. Los nobles
                    ya no podían cobrar impuestos a los mercaderes, sino solo al pueblo (como siempre). Consolidándose así la idea de "Estado".
                </div>
            </div>
            <h2 data-aos="flip-down">Los Kapitalistas Ingléses</h2>
            <div className="Cap4">
                <div data-aos="fade-up">
                    Mientras que los españoles y los portugueses saqueaban a otros de sus riquezas, los europeos robaban de otras formas, y no precisamente
                    productos. En 1562, John Hawkins, un explorador y kapitalista inglés, zarpó hacia África, donde compró y secuestró a
                    numerosos africanos para venderlos como esclavos en América. Su éxito en el tráfico humano lo lleva a enriquecerse enormemente,
                    y la reina de Inglaterra lo nombró caballero debido a su capacidad para vender seres humanos. Este comercio se convirtió en
                    un lucrativo negocio, y mercaderes de Holanda, España, Inglaterra, Francia y Portugal comenzaron a invadir África en busca de personas
                    para vender.
                </div>
                <img className='tumba' src={tumba} data-aos="fade" data-aos-duration="2000" />
                <div data-aos="fade-up">
                    Cuando el tráfico de esclavos llegó al Reino del Congo, el rey Alfonso prohibió a sus mercaderes vender a su gente a los europeos.
                    Pero estos estaban fascinados por las "cosas" que los europeos les daban a cambio por su gente. El rey Alfonso intentó detener el tráfico
                    enviando una carta al rey de Portugal, pero la respuesta fue negativa. El resultado fue que el rey Alfonso murió sin lograr detener el tráfico de su gente.
                </div>
                <h3 data-aos="fade-up">El Triangulo del Kapital</h3>
                <div className='divtriangkap' data-aos="fade-up">
                    RIUS introduce el concepto del "Triángulo del Kapital", destacando cómo el poder de los amos de esclavos no solo se basaba en la fuerza y
                    la violencia, sino también en una red económica internacional.
                </div>
                <img className='triangkap' src={triangkap} data-aos="fade-up" data-aos-duration="2000" />
                <div data-aos="fade-up" className='divtriangkap'>
                    Para mediados del siglo XVIII, Inglaterra había alcanzado el control del comercio entre Europa y otros continentes con la financiación de piratas,
                    y como es costumbre, declaraban de nobles a cualquier criminal que les ayude a hacer dinero.
                </div>
                <h3 data-aos="fade-up">La Revolución Inustrial</h3>
                <div data-aos="fade-up">
                    Debido a la cantidad de mercado, Inglaterra necesitaba crear más productos más rápido. Con lo que se crearon máquinas movidas por vapor.
                    Dando inicio a la creación de máquinas, inventos y la producción en masa en fábricas. <br />
                    Pero período también marcó la transición de los artesanos y campesinos a trabajadores de fábrica,
                    con largas jornadas laborales y condiciones de trabajo precarias. Los capitalistas, dueños de las fábricas,
                    controlaban hasta las necesidades básicas de los trabajadores, pagándoles salarios bajos y enriqueciéndose a expensas de su mano de obra.
                </div>
                <div data-aos="fade-up">
                    El estado gobernaba para la burguesía.
                </div>
            </div>
            <h2 data-aos="flip-down">Los Trabajadores y su Genocidio</h2>
            <div className="Cap5">
                <div data-aos="fade-up">
                    El desarrollo de la industrialización en Europa y los Estados Unidos generó una creciente competencia entre las potencias industriales.
                    Se produjo una sobreproducción de bienes, lo que llevaba a la creación de descuentos y ventas masivas para intentar vender los productos.
                    Por esta intensa competencia condujo a una disminución en la cantidad de capitalistas, ya que muchos no podían competir y quedaban en la bancarrota.
                </div>
                <img className='sebusca' src={sebusca} data-aos="fade" data-aos-duration="2000" />
                <div data-aos="fade-up">
                    Para aumentar sus ganancias, los capitalistas comenzaron a reducir los salarios de los trabajadores y a disminuir la producción
                    en lugar de bajar los precios de los productos. Esta estrategia condujo a una crisis económica que afectó a millones de obreros,
                    quienes se encontraron sin trabajo, sin dinero y sin alimentos. Ante esta situación, los obreros comenzaron a organizarse en sindicatos
                    y partidos socialistas en un intento de mejorar sus condiciones de vida y trabajo.
                </div>
                <h3 data-aos="fade-up">Las Primeras Revoluciones Socialistas</h3>

                <div data-aos="fade-up">
                    En 1871, la Comuna de París se convirtió en un ejemplo de la resistencia obrera. Los obreros franceses tomaron el control del gobierno
                    en un intento de crear una sociedad más igualitaria. Sin embargo, el capitalismo no pudo tolerar esta amenaza,
                    el gobierno sitió la ciudad, la Comuna de París cayó, y treinta mil obreros fueron fusilados.
                    Este episodio demostró que la gente podía organizarse para establecer un gobierno sin capitalistas.
                </div>
                <img className='comunaparis' src={comunaparis} data-aos="fade" data-aos-duration="2000" />
                <div data-aos="fade-up">
                    La amenaza de la clase obrera hizo que los capitalistas se reunieran en París. Acordaron proporcionar trabajo a los trabajadores para
                    mantenerlos ocupados. Sin embargo, la falta de materias primas y tierras para la producción era un problema.
                    En este punto, los capitalistas recurrieron a Henry Morton Stanley, un <i>gran periodista</i> y explorador.
                    Stanley relató la abundancia de materias primas y mano de obra barata en África, lo que llevó al inicio de...
                </div>
                <h3 data-aos="fade-up">La Civilización (genocidio) del África (y el mundo)</h3>
                <div data-aos="fade-up">
                    Barcos europeos cargados de soldados, armas, civilización y claro, religión cristiana, partieron hacia África. A pesar de estar en clara
                    desventaja tecnológica, las civilizaciones africanas resistieron la invasión. Lamentablemente, en tan solo 50 años todo el continente africano se había
                    convertido en una colonia europea bien repartida entre Inglaterra, Francia, Portugal, España, Italia, Alemania y Bélgica.
                </div>
                <img className='africaL' src={africaL} data-aos="fade" data-aos-duration="2000" />
                <img className='africaR' src={africaR} data-aos="fade" data-aos-duration="2000" />
                <div data-aos="fade-up">
                    Pero la repartición no solo se limitó a África sino que abarcó India, y partes de Asia. incluyendo a China.
                    En China, la táctica de los capitalistas europeos para invadir fue el cristianismo. Los misioneros predicaban la "verdadera fe" y el
                    "verdadero dios", lo que generaba descontento entre los lugareños y, en algunos casos, el asesinato de misioneros. Estos asesinatos proporcionaron
                    una <i>oportuna</i> excusa para que los capitalistas europeos enviaran tropas para proteger sus intereses.
                </div>
                <div data-aos="fade-up">
                    Otra táctica para invadir fue el crédito, como en la actualidad. Donde los capitalistas prestaban dinero a los reyes a cambio del control del país,
                    como las aduanas o la policía. Estos préstamos tenían intereses extremadamente altos, lo que generaba deudas impagables. <i>Oportunamente</i>
                    generaban revueltas en los países, lo que llevaba nuevamente a la intervención de las tropas europeas para proteger los intereses capitalistas.
                </div>
            </div>
            <h2 data-aos="flip-down">El Imperialismo</h2>
            <div className="Cap6">
                <div data-aos="fade-up">
                    Como EE.UU. había llegado tarde a la repartición de tierras, se inventaron una nueva forma de colonialismo: las invasiones extranjeras. Con la
                    creación de la doctrina Monroe “América para los americanos” (<i>americanos = EE.UU.</i>), les sirvió para adueñarse de medio México, Cuba, Panamá,
                    Hawái, Alaska y de paso meterse en los asuntos internos de todo el continente.
                </div>
                <div data-aos="fade-up">
                    Los capitalistas no se quedaban atrás en la nueva era. Un grupo de grandes kapitalistas (<i>arañas</i>) se juntaron para establecer un pacto
                    de no agresión entre ellos. Formaron un cártel para no hacerse competencia, unieron sus compañías en una sola, creando un monopolio.
                    No competían con nadie y ellos establecian los precios de sus productos, como el petróleo.
                    Aunque lograron aumentar la producción y dar mas trabajos, esto no duro mucho, como buena costumbre kapitalista.
                </div>
                <img className='aranas' src={aranas} data-aos="fade-up" data-aos-duration="2000" />
                <h3 data-aos="fade-up">Primera Guerra Mundial</h3>
                <div data-aos="fade-up">
                    En los tiempos cercanos a 1914, los imperios no estaban conformes con la repartición del mundo, querían más.
                    Esto significaba quitarles tierras a otros imperios. <br />
                    El imperialismo recurre a las guerras para proteger todo lo que ha robado. <br />
                    Y así se enfrentaron los imperios alemanes contra francia, usa, etc.
                    Para hacer que la gente estuviera dispuesta a tomar armas e ir a matar desconocidos y morir, el capital se inventó…
                </div>
                <img className='patriotismo' src={patriotismo} data-aos="fade-up" data-aos-duration="2000" />
                <div data-aos="fade-up">
                    Tristemente les funcionó. Solo eran obreros matando obreros. Pero un pensador ruso se dió cuenta de esto, y convenció a sus
                    compatriotas de luchar no en contra de sus hermanos obreros, sino en contra de los capitalistas.
                </div>
                <h3 data-aos="fade-up">La Revolución Rusa</h3>
                <div data-aos="fade-up">
                    En 1917 el proletariado, liderado por Lenin, establecieron en Rusia un sistema Socialista. Esta revolución hizo un eco en todo el mundo.
                    Mientras que la primera guerra terminaba, dejando 8 millones de obreros muertos, el proletariado de todo el mundo se daban cuenta que es
                    posible derrotar al capital. <br />
                    La simple idea del socialismo fue (y sigue siendo) considerada una amenaza para el kapitalismo.
                </div>
            </div>
            <h2 data-aos="flip-down">La Era Moderna</h2>
            <div className="Cap7">
                <div data-aos="fade-up">
                    El comunismo se expandía por todo el mundo, y en Alemania tomó posiciones en el poder. Después de la guerra perdida el partido
                    comunista se convirtió en el más popular en este país. El kapitalismo, asustado, alemán necesitaba una solución, y Hitler levantaba la mano.
                    Convence al sediento kapital de sus ideologías de acabar con el comunismo, hacer de Alemania una gran nación y poner al frente la raza aria.
                </div>
                <div data-aos="fade-up">
                    <i>Oportunamente</i>, en 1933, se incendió el Reichstag (el equivalente al Capitolio en EE.UU.) y <i>casualmente</i> el grupo de policías de Hitler
                    encuentra, justo afuera del fuego, a un miembro del partido comunista, Marinus van der Lubbe. <br />
                    Con este pretexto, Hitler persigue a todos los comunistas del país, y ahora, sin una oposición, gana las elecciones, apoderándose de Alemania con el apoyo kapital.
                </div>
                <h3 data-aos="fade-up">La Segunda Guerra Mundial</h3>
                <div data-aos="fade-up">
                    El capital alemán quería retomar y obtener más territorio. Invadieron la URSS con plan de liquidarla en 15 días. Afortunadamente el plan les salió al revés,
                    y fueron los soviéticos quienes derrotaron al loquito Hitler. <br />
                    Con la presencia de los soviéticos en todos los países invadidos, como Polonia, Bulgaria, Rumania, Yugoslavia o Checoslovaquia, la URSS expandió
                    su socialismo.
                </div>
                <img className='zombie' src={zombie} data-aos="fade" data-aos-duration="2000" />
                <img className='expansioncom' src={expansioncom} data-aos="fade" data-aos-duration="2000" />
                <div data-aos="fade-up">
                    Para el final de la guerra, de los 148 millones de kilómetros cuadrados de la tierra, 35 pasaron al socialismo, en menos de 30 años. <br />
                    Un completo desastre para el capitalismo. La expansión del socialismo era debido a que era muy evidente que el kapitalismo no funcionaba.
                </div>
                <h3 data-aos="fade-up">El Neocolonialismo - El Colinialismo Económico</h3>
                <div data-aos="fade-up">
                    En esta nueva etapa, el kapitalismo ya no invade países (a menos que no sigas sus reglas). Ahora solamente los presiona económicamente,
                    baja precios de materias primas, exige pago de deudas, niega préstamos, cierra fronteras a exportaciones, etc., etc. <br />
                    El kapitalismo se perfeccionó. Crearon una sociedad de consumo, gracias a que las empresas se han apoderado de
                    los medios de comunicación. Y es en el contenido que muestran, donde imprimen sus ideales, sus objetivos, sus productos. Las transnacionales,
                    dueñas absolutas del comercio, son los verdaderos gobernantes del mundo.
                </div>
                <div data-aos="fade-up">
                    El socialismo, la opción que se tenía, desafortunadamente cayó en un bache, debido a la cantidad de problemas del stalinismo. Países que seguían
                    esta ideología, como Cuba o Venezuela fueron usados como ejemplos para demostrar lo inútil del socialismo. A pesar de que hacen todo lo
                    económicamente posible para frenar cualquier tipo de avance y mantenerlos como colonias.
                </div>
            </div>
        </section >
    )
}