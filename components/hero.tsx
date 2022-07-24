import type { NextPage } from 'next';
import Image from 'next/image';

const Hero: NextPage = () => {
    return (
        <div className="hero flex items-center justify-between p-20 border-b">
            <div className="pl-20">
                <h1 className="font-bold text-6xl mb-4 text-blue-500">Explore The World.</h1>
                <h1 className="font-bold text-6xl mb-4 text-blue-400">Relax Yourself.</h1>
                <h1 className="font-bold text-6xl mb-4 text-blue-300">Book.</h1>
            </div>
            <Image src={require("../assets/hero-bg.png")} alt="hero-bg" />
        </div>
    );
}

export default Hero;