import Hero from "comps/Hero";
import Head from 'next/head';
import Slider from '../comps/Slider'
import { SliderData } from "comps/SliderData";
import Contacto from "comps/Contacto";
import Instagram from "comps/Instagram";

import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "comps/Wrapper";
import Title from "comps/Title";
import Subtitle from "comps/Subtitle";
import Gallery from "comps/Gallery";


const cateringPic = "https://images.pexels.com/photos/3217157/pexels-photo-3217157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const mozosPic = "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const lunchPic = "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const eventosPic = "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg";
const dulcePic = "https://images.pexels.com/photos/6222/food-lunch-table-snack.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const pizzaPic = "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const pernilPic = "https://cottontreemeats.com.au/wp-content/uploads/2018/10/Christmas-Jam.jpg"
const tortaPic = "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
export default function Home() {
    return (
        <div>
            <Head>
                <title>La Turquesa Catering</title>
            </Head>
            <HeroSlider
                height={"100vh"}
                autoplay={{
                    autoplayDuration: 3000,
                    autoplayDebounce: 2000,
                }}
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,
                    onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                    onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                    onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
                }}
            >
                <Overlay>
                    <Wrapper>
                    <Title>La Turquesa</Title>
                    <Subtitle>
                        Hacemos tu evento inolvidable.
                    </Subtitle>
                    </Wrapper>
                </Overlay>

                <Slide
                    shouldRenderMask
                    label="Servicio de Catering"
                    background={{
                    backgroundImageSrc: mozosPic
                    }}
                />

                <Slide
                    shouldRenderMask
                    label="Servicio de Mozos"
                    background={{
                    backgroundImageSrc: cateringPic
                    }}
                />

                <Slide
                    shouldRenderMask
                    label="Servicio de Lunch."
                    background={{
                    backgroundImageSrc: lunchPic
                    }}
                />

                <Slide
                    shouldRenderMask
                    label="Casamientos, Bautismos, 15años."
                    background={{
                    backgroundImageSrc: eventosPic
                    }}
                />

                <Slide
                    shouldRenderMask
                    label="Mesa de dulce"
                    background={{
                    backgroundImageSrc: dulcePic
                    }}
                />
                <Slide
                    shouldRenderMask
                    label="Pizza Party"
                    background={{
                    backgroundImageSrc: pizzaPic
                    }}
                />
                <Slide
                    shouldRenderMask
                    label="Pernil de Cerdo"
                    background={{
                    backgroundImageSrc: pernilPic
                    }}
                />
                <Slide
                    shouldRenderMask
                    label="Tortas Alusivas"
                    background={{
                    backgroundImageSrc: tortaPic
                    }}
                />

                <MenuNav />
            </HeroSlider>
            <Hero heading='La Empresa' message='Hacemos tu evento inolvidable. ' />
{/*             <Slider slides={SliderData} /> */}
            <Gallery />
            <Contacto />
        </div>
    );
}

