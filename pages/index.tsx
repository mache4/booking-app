import type { NextPage } from 'next';
import Hero from '../components/hero';
import Layout from '../components/layout';
import TopDestinations from '../components/top-destinaitons';

const Home: NextPage = () => {
    return (
        <Layout title="Home">
            <div className="home">
                <Hero />
                <TopDestinations />
            </div>
        </Layout>
    );
}

export default Home;
