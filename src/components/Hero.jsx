import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '.././Hero.css'

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease'
        })
    }, [])

    return (
        <header>
            <div className="magic"></div>
            <nav>
                <div className="left-options">
                    <ul data-aos="slide-right">
                        <li><a href="#resumen">Resumen</a></li>
                        <li><a href="#opinion">Opinión</a></li>
                        <li><a href="#opinion">Referencia</a></li>
                    </ul>
                </div>
                <p className='nombre' data-aos="slide-left">Rodrigo Gael Guzmán Alburo</p>
            </nav>
            <div className="hero" data-aos="fade-down">
                <h1>La Trukulenta Historia del Kapitalismo</h1>
                <h2>RIUS</h2>
            </div>
        </header>
    );
}