import Hero from "comps/Hero";
import Head from 'next/head';
import Slider from '../comps/Slider'
import { SliderData } from "comps/SliderData";
import Contacto from "comps/Contacto";

export default function Home() {
    return (
        <div>
            <Head>
                <title>La Turquesa Catering</title>
            </Head>
            <Hero heading='La Turquesa Catering' message='Hacemos tu evento inolvidable. ' />
            <Slider slides={SliderData} />
            <Contacto />
        </div>
    );
}

