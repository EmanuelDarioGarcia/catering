import '../styles/globals.css';
import Navbar from 'comps/Navbar'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;