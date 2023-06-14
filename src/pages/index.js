import Hero from "comps/Hero";
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>La Turquesa Catering</title>

            </Head>
            
            <Hero />
        </div>
    );
}

