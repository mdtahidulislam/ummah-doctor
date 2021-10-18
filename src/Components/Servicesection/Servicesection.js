import React from 'react';
import Sectionheader from '../Sectionheader/Sectionheader';
import AllServices from '../AllServices/AllServices';

const Servicesection = () => {
    return (
        <div className="service-area py-5">
            <Sectionheader heading="Specialized Services" subHeading="Ummah's Doctor services give you expert and quality doctor with all the benefits of clinical expertise."></Sectionheader>
            <AllServices></AllServices>
        </div>
    );
};

export default Servicesection;