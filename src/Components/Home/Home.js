import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Banner from '../Banner/Banner'
import EmailSubscription from '../EmailSubscription/EmailSubscription';
import Servicesection from '../Servicesection/Servicesection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Servicesection></Servicesection>
            <AboutSection></AboutSection>
            <EmailSubscription></EmailSubscription>
        </div>
    );
};

export default Home;