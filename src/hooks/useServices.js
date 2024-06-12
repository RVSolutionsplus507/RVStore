import {useState, useEffect} from 'react';
import { getServicios } from '@/services/firebase';


function useServices (search) {
    const [filterSearch, setFilterSearch] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const services = await getServicios();
            setServices(services);
            setLoading(false);
        }
        console.log(services)
            
        fetchData();
    }, []);

    const searchServices = () => {
        if (search) {
        setFilterSearch(services)
        } else {
        setFilterSearch("No services found. Please try again.")
        }
    }

    return {
        services,
        loading,
        searchServices,
        filterSearch
    };
}

export { useServices };