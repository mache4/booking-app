import type { NextPage } from 'next';
import Head from "next/head";
import Navbar from "./navbar";

interface Props {
    children: JSX.Element,
    title: string
};

const Layout: NextPage<Props> = ({ children, title }) => {
    return (
        <div className="layout">
            <Head>
                <title>L9 Booking | {title}</title>
            </Head>
            <Navbar />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Layout;