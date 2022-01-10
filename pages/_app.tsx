import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Prio App</title>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
