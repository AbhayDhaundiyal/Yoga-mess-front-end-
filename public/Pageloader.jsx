import Head from 'next/head'

export default function FullPageLoader() {
    return (
        <>
        <Head>
            <title>AltairOne Environment</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
        <div align="center" width= "100px" height= "100px">
            <img src='Altair_logo.png' />
            <p>Loading...</p>
        </div>
        </>
    );
}