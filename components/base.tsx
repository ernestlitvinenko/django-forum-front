import React from "react";
import Head from "next/head";
import Header from "./header/header";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

interface BaseLayoutProps {
    children: React.ReactNode
    title: string
}

export default function BaseLayout ({children, title}: BaseLayoutProps) {
    return (
        <>
            <Head>
                <title>{title} | Django Forum</title>
            </Head>

            <Header />
            <main>
                {children}
            </main>

        </>
    )
}