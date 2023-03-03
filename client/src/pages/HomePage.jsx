import React from 'react';
import Layout from "../components/shared/Layout";
import Hero from "../components/hero/Hero";
import MainSection from "../components/main-section/MainSection";
import FeaturedCollection from "../components/featured-collection/FeaturedCollection";

function HomePage(props) {
    return (
        <>
            <Layout>
                <Hero />
                <MainSection />
                <FeaturedCollection />
            </Layout>
        </>
    );
}

export default HomePage;