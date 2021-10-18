import { useEffect, useState } from "react";

const Useservices = () => {
    // set courses, cart into state
    const [services, setServices] = useState([]);

    // load courses
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/tahidul1/servicejson/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    console.log(services);
    return [services];
}

export default Useservices;