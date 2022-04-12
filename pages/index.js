import Head from 'next/head';
import Header from '../partials/header';
import HomePage from './home.page';

export default function Home() {
    return (
        <div className="h-screen bg-[url('/images/said-ait-driss-back.jpg')] bg-no-repeat bg-cover bg-center">
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <HomePage></HomePage>
        </div>
    );
}
